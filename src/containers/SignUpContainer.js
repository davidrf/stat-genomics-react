import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { propTypes as RouterPropTypes } from 'react-router'
import SignUp from 'components/SignUp'
import { signUpUser } from 'reducers/users'
import { setLocalStorage } from 'utilities/localStorage'

class SignUpContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    signUpUser: PropTypes.func.isRequired,
    isExact: PropTypes.bool.isRequired,
    location: RouterPropTypes.location.isRequired,
    params: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired,
  }

  validate({ email, password, passwordConfirmation }) {
    const errors = {}
    if (!email) {
      errors.email = "Email can't be blank"
    }

    if (!password) {
      errors.password = "Password can't be blank"
    }

    if (!passwordConfirmation) {
      errors.passwordConfirmation = "Password Confirmation can't be blank"
    }

    if (password && passwordConfirmation && password !== passwordConfirmation) {
      errors.passwordConfirmation = 'Password Confirmation must match password'
    }

    return errors
  }

  onSubmit = ({ email, password }) => {
    return this.props.signUpUser({ email, password })
      .then(action => setLocalStorage(action.payload))
      .then(() => this.context.router.transitionTo('/'))
  }

  render() {
    return (
      <SignUp
        form="signUp"
        validate={this.validate}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default connect(null, { signUpUser })(SignUpContainer)
