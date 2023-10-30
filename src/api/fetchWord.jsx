const apiURL = "https://api.datamuse.com/words"
export const fetchWords = (word, searchType) => {
  return fetch(apiURL + searchType + word).then((response) => {
    if(response.status == 200){
      return response.json();
    }
  }
  )
}

