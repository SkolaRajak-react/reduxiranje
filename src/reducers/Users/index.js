const initialState = {
  username: 'Jovan'
}

export default function userReducer(state=initialState, action) {
  switch(action.type) {
    case 'CHANGE_USERNAME':  {
      return {username: action.payload}
    }
    default: return state 
  }
}

