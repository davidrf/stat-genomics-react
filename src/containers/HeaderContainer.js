import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from 'components/Header'
import { logOutUser } from 'reducers/authentication'
import { getCurrentUser } from 'reducers'
import { clearLocalStorage } from 'utilities/localStorage'

class HeaderContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    currentUser: PropTypes.object,
    logOutUser: PropTypes.func.isRequired
  }

  handleLogOutClick = () => {
    this.props.logOutUser()
    clearLocalStorage()
  }

  handleTitleClick = () => {
    this.context.router.transitionTo('/')
  }

  render() {
    const { currentUser } = this.props

    return (
      <Header
        isSignedIn={!!currentUser}
        email={currentUser && currentUser.email}
        onLogOutClick={this.handleLogOutClick}
        onTitleClick={this.handleTitleClick}
      />
    )
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps, { logOutUser })(HeaderContainer)
