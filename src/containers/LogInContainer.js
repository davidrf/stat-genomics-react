import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { propTypes as RouterPropTypes } from 'react-router'
import LogIn from 'components/LogIn'
import { logInUser } from 'reducers/authentication'
import { setLocalStorage } from 'utilities/localStorage'

class LoginContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    isExact: PropTypes.bool.isRequired,
    location: RouterPropTypes.location.isRequired,
    logInUser: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired,
  }

  validate(values) {
    const errors = {}
    if (!values.email) {
      errors.email = "Email can't be blank"
    }

    if (!values.password) {
      errors.password = "Password can't be blank"
    }

    return errors
  }

  onSubmit = values => {
    return this.props.logInUser(values)
      .then(action => setLocalStorage(action.payload))
      .then(() => {
        const { state } = this.props.location
        const path = state ? state.from : '/home-folder'
        this.context.router.transitionTo(path)
      })
  }

  render() {
    return (
      <LogIn
        form="logIn"
        validate={this.validate}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default connect(null, { logInUser })(LoginContainer)
