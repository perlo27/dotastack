import { combineReducers } from 'redux'
import parties from './parties'
import user from './user'
import { reducer as form } from 'redux-form'

export default combineReducers({
  parties, user, form
})
