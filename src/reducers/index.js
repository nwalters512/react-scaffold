import { combineReducers } from 'redux'
import defaultReducer from './default'

const reducer = combineReducers({
  defaultState: defaultReducer,
})

export default reducer
