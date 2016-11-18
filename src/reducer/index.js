import { combineReducers } from 'redux'
import parties from './parties'
import user from './user'
import filters from './filters'

export default combineReducers({
  parties, user, filters
})
