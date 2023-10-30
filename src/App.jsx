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
      <div className="bg-gray-700/70 h-[100svh] flex items-center">
        <div className="container p-4  mx-auto flex flex-col items-center pt-8">
          <h1 className="text-white font-semibold text-5xl pb-2 ">
            Word Finding App
          </h1>
          <form action="" className="mt-8"  onSubmit={searchWord}>
            <label htmlFor="searchWord" className="mr-4 text-gray-200 sr-only">
              Search Word
            </label>
            <input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              id="searchWord"
              type="text"
              className="py-4 px-4 rounded-md w-64 text-2xl min-w-[25rem] capitalize border-2 border-gray-200"
            />
            <button className="ml-4 py-4 px-4 rounded-md text-2xl border-2 border-gray-200  cursor-pointer font-medium text-white hover:bg-white/20">
              Search
            </button>
          </form>
          {isLoading ? (
            <p>Is loading...</p>
          ) : (
            <div className="flex flex-row gap-4 max-w-[1200px] flex-wrap mt-8">
              {wordResults.map((singleWordResult, index) => (
                <p onClick={() => getWords(singleWordResult.word, setWord(singleWordResult.word))} key={index} className="bg-gray-200 py-2 px-4 capitalize rounded-md hover:bg-blue-200 cursor-pointer">{singleWordResult.word}</p>
              ))}
            </div>
          )}

    
        </div>
      </div>


    </>
  );
}

export default App;
