const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_CHARACTERS":
      return action.characters
    default:
      return state
  }
}