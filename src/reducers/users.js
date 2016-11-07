import StatGenomicsApi from 'apis/statGenomicsApi'
import { combineReducers } from 'redux'
import types from 'constants/actionTypes'

const signUpUserSuccess = payload => ({ type: types.SIGN_UP_USER_SUCCESS, payload })

export const signUpUser = values => dispatch => {
  return StatGenomicsApi.users.signUp(values)
    .then(payload => dispatch(signUpUserSuccess(payload)))
}

const initialState = {
  byId: {}
}

const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case types.LOG_IN_USER_SUCCESS:
    case types.SIGN_UP_USER_SUCCESS:
      return { ...state, ...action.payload.entities.users }
    default:
      return state
  }
}

export default combineReducers({
  byId
})
