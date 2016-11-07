import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authentication from './authentication'
import users from './users'

let rootReducer = combineReducers({
  authentication,
  form,
  users
})

export const getCurrentUser = ({ authentication, users }) => {
  const userId = authentication.user
  return userId && users.byId[userId]
}

export default rootReducer
