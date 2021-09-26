import {combineReducers} from 'redux'
import {loginReducer} from './reducers/loginReducer'
import {ideasReducer} from './reducers/ideasReducer'
import {categoriesReducer} from './reducers/categoriesReducer'

export const rootReducer = combineReducers({
  login: loginReducer,
  categories: categoriesReducer,
  ideas: ideasReducer
})
