import {SWAP_STATE} from '../types'

const initState = {
  id: true,
  author: true,
  title: true,
  problem: true,
  region: true,
  field: true,
  rating: true,
  views: true
}

export const categoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case SWAP_STATE:
      let key = action.payload
      return {...state,
              [key]: !state[key]}
    default: return state
  }
}
