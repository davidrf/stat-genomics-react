import StatGenomicsApi from 'apis/statGenomicsApi'
import { combineReducers } from 'redux'
import types from 'constants/actionTypes'
import { getHomeFolderId } from 'reducers'

const fetchFolderRequest = () => ({ type: types.FETCH_FOLDER_REQUEST })
const fetchFolderRequestFailure = () => ({ type: types.FETCH_FOLDER_REQUEST_FAILURE })
const fetchFolderRequestSuccess = payload => ({ type: types.FETCH_FOLDER_REQUEST_SUCCESS, payload })
const createFolderRequestSuccess = payload => ({ type: types.CREATE_FOLDER_REQUEST_SUCCESS, payload })

export const fetchFolder = folderId => dispatch => {
  dispatch(fetchFolderRequest())
  return StatGenomicsApi.folders.show(folderId)
    .then(
      payload => dispatch(fetchFolderRequestSuccess(payload)),
      () => dispatch(fetchFolderRequestFailure())
    )
}

export const createFolder = ({ name }) => (dispatch, getState) => {
  const { authentication, users } = getState()
  const homeFolderId = getHomeFolderId({ authentication, users })
  const accessToken = authentication.accessToken
  return StatGenomicsApi.folders.create({ accessToken, homeFolderId, name })
    .then(payload => dispatch(createFolderRequestSuccess(payload)))
}

const initialState = {
  byId: {},
  isFetching: false
}

const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case types.FETCH_FOLDER_REQUEST_SUCCESS:
      return { ...state, ...action.payload.entities.folders }
    default:
      return state
  }
}

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case types.FETCH_FOLDER_REQUEST:
      return true
    case types.FETCH_FOLDER_REQUEST_FAILURE:
    case types.FETCH_FOLDER_REQUEST_SUCCESS:
      return false
    default:
      return state
  }
}


export default combineReducers({
  byId,
  isFetching
})
