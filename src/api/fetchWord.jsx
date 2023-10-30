const apiURL = "https://api.datamuse.com/words?rel_syn="

export const fetchWords = (word) => {
  return fetch(apiURL + word).then((response) => 
    response.json()
  )
}