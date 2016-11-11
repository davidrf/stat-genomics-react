import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authentication from './authentication'
import folders from './folders'
import users from './users'

let rootReducer = combineReducers({
  authentication,
  folders,
  form,
  users
})

export const folderFind = ({ folders }, folderId) => {
  return folders.byId[folderId]
}

export const getCurrentUser = ({ authentication, users }) => {
  const userId = authentication.user
  return userId && users.byId[userId]
}

export const getHomeFolderId = ({ authentication, users }) => {
  const currentUser = getCurrentUser({ authentication, users })
  return currentUser && currentUser.rootFolderId
}

export default rootReducer
