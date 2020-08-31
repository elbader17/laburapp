const initialState = {
  isLoggedIn: false,
}

const LOGIN = 'auth/LOGIN';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
      }
    default:
      return state
  }
}
