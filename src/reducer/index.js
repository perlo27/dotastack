import { combineReducers } from 'redux'
import parties from './parties'
import user from './user'

export default combineReducers({
  parties, user
})
