import {LOGIN} from '../types'

const initState = {
  username: '',
  role: '',
  token: ''
}

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state,
              username: action.payload.username,
              role: action.payload.role,
              token: action.payload.token,}
    default: return state
  }
}
