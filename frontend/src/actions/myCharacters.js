



export const setMyCharacters = characters => {
  return {
    type: "SET_MY_CHARACTERS",
    characters
  }
}

export const getMyCharacters = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/characters', {
      credentials: 'include',
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setMyCharacters(response.data))
      }
    })
    .catch(console.log)
  }
}