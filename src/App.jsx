import { useState } from "react";
import { useGetWords } from "./hooks/useGetWords";
import { Loader } from "./components/Loader"

function App() {

  const [word, setWord] = useState("");
  const [searchType, setSearchType] = useState("?rel_syn=");
  const {wordResults, isLoading, getWords, setWordResults} = useGetWords();

  const searchWord = (e) => {
    e.preventDefault();
    getWords(word, searchType);
  }

  const clearSearch = () => {
    setWord("")
    setWordResults([])
  }

  return (
    <>
      <div className="bg-gray-700/70 h-[100svh] flex items-center">
        <div className="container p-4  mx-auto flex flex-col items-center pt-8">
          <form action="" className="mt-4"  onSubmit={searchWord}>
            <label htmlFor="searchWord" className="text-white font-semibold text-5xl pb-2 my-4 block text-center">
              Search Word
            </label>
            <div>
            <input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              id="searchWord"
              type="text"
              className="py-2 px-4 rounded-md w-64 min-w-[25rem] capitalize border-2 border-gray-200"
            />
            <select onChange={(e) => {setSearchType(e.target.value)}} name="" id="" className="ml-4 py-2 px-4 rounded-md appearance-none" >
              <option value="?rel_syn=">Synonym</option>
              <option value="?rel_jjb=">Adjective</option>
              <option value="?rel_jja=">Nouns</option>
              <option value="?sl=">Sounds like</option>
            </select>
            <button className="ml-4 py-2 px-4 rounded-md border-2 border-gray-200  cursor-pointer font-medium text-white hover:bg-white/20">
              Search
            </button>
            <button onClick={() => clearSearch()} type="button" className="ml-4 py-2 px-4 rounded-md border-2 border-gray-200  cursor-pointer font-medium text-white hover:bg-white/20">
              Clear
            </button>
            </div>

          </form>
          <div className="flex flex-row gap-4 max-w-[1200px] flex-wrap mt-8">
          {isLoading ? (
            <>
              <Loader />
            </>

          ) : (
            <>
              {wordResults.map((singleWordResult, index) => (
                <p onClick={() => {
                  getWords(singleWordResult.word, searchType)
                  setWord(singleWordResult.word)
                }} key={index} className="bg-gray-200 py-2 px-4 capitalize rounded-md hover:bg-blue-200 cursor-pointer">{singleWordResult.word}</p>
              ))}
            </>
          )}

          </div>
    
        </div>
      </div>
    </>
  );
}

export default App;
