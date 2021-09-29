import {LOAD_COMMENTS} from '../types'
const initState = {
  comments: []
}

export const commentsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {...state,
              comments: action.payload}
    default: return state
  }
}
