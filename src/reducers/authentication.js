import StatGenomicsApi from 'apis/statGenomicsApi'
import types from 'constants/actionTypes'

const logInUserSuccess = payload => ({ type: types.LOG_IN_USER_SUCCESS, payload })

export const logInUser = values => dispatch => {
  return StatGenomicsApi.authentications.logIn(values)
    .then(payload => dispatch(logInUserSuccess(payload)))
}

export const logOutUser = () => ({ type: types.LOG_OUT_USER })

export default (state = {}, action) => {
  switch (action.type) {
    case types.LOG_IN_USER_SUCCESS:
    case types.SIGN_UP_USER_SUCCESS:
      const { entities, result } = action.payload
      return entities.authentications[result]
    case types.LOG_OUT_USER:
      return {}
    default:
      return state
  }
}
