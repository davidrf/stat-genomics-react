import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from 'reducers'
import { Match, Redirect } from 'react-router'

class RedirectUnauthenticatedMatch extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    component: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    pattern: PropTypes.string.isRequired,
    userSignedIn: PropTypes.bool.isRequired,
  }

  renderMatch = props => {
    const { userSignedIn, component: Component } = this.props
    return userSignedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/log-in', state: { from: props.location } }} />
    )
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { component, dispatch, userSignedIn, ...rest } = this.props
    return <Match {...rest} render={this.renderMatch} />
  }
}

const mapStateToProps = state => ({
  userSignedIn: !!getCurrentUser(state)
})

export default connect(mapStateToProps)(RedirectUnauthenticatedMatch)
