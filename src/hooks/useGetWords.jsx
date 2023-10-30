import { useState } from "react";
import { fetchWords } from "../api/fetchWord";

export const useGetWords = () => {

  const [wordResults, setWordResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getWords = (word) => {
    setIsLoading(true);
    fetchWords(word)
    .then(setWordResults)
    .then(() => setIsLoading(false))
  };

  return { isLoading, getWords, wordResults }

}