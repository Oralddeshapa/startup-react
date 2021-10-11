import {SWAP_STATE} from '../types'

const initState = {
  id: localStorage.getItem('id') ? (localStorage.getItem('id') == "true") : true,
  author: localStorage.getItem('author') ? (localStorage.getItem('author') == "true"): true,
  title: localStorage.getItem('title') ? (localStorage.getItem('title') == "true"): true,
  problem: localStorage.getItem('problem') ? (localStorage.getItem('problem') == "true"): true,
  region: localStorage.getItem('region') ? (localStorage.getItem('region') == "true"): true,
  field: localStorage.getItem('field') ? (localStorage.getItem('field') == "true"): true,
  rating: localStorage.getItem('rating') ? (localStorage.getItem('rating') == "true"): true,
  views: localStorage.getItem('views') ? (localStorage.getItem('views') == "true"): true
}

export const categoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case SWAP_STATE:
      let key = action.payload
      localStorage.setItem([key], !state[key])
      return {...state,
              [key]: !state[key]}
    default: return state
  }
}
