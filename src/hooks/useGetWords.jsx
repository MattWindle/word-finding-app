import { useState } from "react";
import { fetchWords } from "../api/fetchWord";

export const useGetWords = () => {

  const [wordResults, setWordResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getWords = (word, searchType) => {
    setIsLoading(true);
    fetchWords(word, searchType)
    .then(setWordResults)
    .then(() => setIsLoading(false))
  };

  return { isLoading, getWords, wordResults, setWordResults }

}