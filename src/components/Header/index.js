import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './styles.scss'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const styles = {
  flatButton: {
    color: '#ffffff'
  }
}

const Header = ({ isSignedIn, email, onLogOutClick, onTitleClick }) => (
  <nav>
    <AppBar
      title="Stat Genomics"
      iconElementLeft={<div />}
      iconElementRight={
        <div className="right-icon-element">
          {isSignedIn ? [
            <Link to="/" key="logOut"><FlatButton onClick={onLogOutClick} label="Log Out" style={styles.flatButton}/></Link>
          ] : [
            <Link to="/log-in" key="logIn"><FlatButton label="Log In" style={styles.flatButton}/></Link>,
            <Link to="/sign-up" key="signUp"><FlatButton label="Sign Up" style={styles.flatButton}/></Link>
          ]}
        </div>
      }
      onTitleTouchTap={onTitleClick}
    />
  </nav>
)

Header.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  email: PropTypes.string,
  onLogOutClick: PropTypes.func,
  onTitleClick: PropTypes.func,
}

export default Header
