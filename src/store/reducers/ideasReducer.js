import {LOAD_IDEAS, SORT_UP_IDEAS, SORT_DOWN_IDEAS} from '../types'
import _, {map} from 'underscore'

const initState = {
  ideas: []
}

export const ideasReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_IDEAS:
      return {...state,
              ideas: action.payload}
    case SORT_DOWN_IDEAS:
      const sort = _.sortBy(state.ideas, action.payload)
      console.log('DOWN')
      return {...state,
              ideas: sort}
    case SORT_UP_IDEAS:
      const sort_up = _.sortBy(state.ideas, action.payload)
      console.log('UP')
      return {...state,
              ideas: sort_up.reverse()}
    default: return state
  }
}
