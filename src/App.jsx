import { useState } from "react";
import { useGetWords } from "./hooks/useGetWords";


function App() {

  const [word, setWord] = useState("");
  const {wordResults, isLoading, getWords} = useGetWords();

  const searchWord = (e) => {
    e.preventDefault();
    getWords(word);
  }

  return (
    <>
      <div className="container p-4  mx-auto flex flex-col items-center pt-8">
        <h1 className="text-blue-900 font-extrabold text-3xl pb-2 ">
          Word Finding App
        </h1>
        <p className="max-w-3xl text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ad
          corrupti nostrum soluta officia in dolor cumque? Odit impedit
          praesentium dignissimos, eaque ab quisquam? Enim, iste distinctio.
          Adipisci, nesciunt reiciendis!
        </p>
        {word && (
          <p className="mt-4 text-lg font-medium">Searched word: {word}</p>
        )}
        <form action="" className="mt-8"  onSubmit={searchWord}>
          <label htmlFor="searchWord" className="mr-4">
            Search Word
          </label>
          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            id="searchWord"
            type="text"
            className="border-2 border-gray-400 py-2 px-4 rounded-md w-64"
          />
          <button className="ml-4  border-2  font-medium py-2 px-4 rounded-md bg-blue-200 border-blue-300 hover:bg-blue-500 hover:border-blue-700 hover:text-white">
            Find word
          </button>
        </form>
        {isLoading ? (
          <p>Is loading...</p>
        ) : (
          <div className="flex flex-row gap-4 max-w-[1200px] flex-wrap mt-8">
            {wordResults.map((singleWordResult, index) => (
              <p key={index} className="bg-gray-200 py-2 px-4 capitalize rounded-md">{singleWordResult.word}</p>
            ))}
          </div>
        )}

  
      </div>

    </>
  );
}

export default App;
