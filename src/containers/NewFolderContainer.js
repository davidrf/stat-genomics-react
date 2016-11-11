import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { propTypes as RouterPropTypes } from 'react-router'
import NewFolder from 'components/NewFolder'
import { createFolder } from 'reducers/folders'

class NewFolderContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    createFolder: PropTypes.func.isRequired,
    isExact: PropTypes.bool.isRequired,
    location: RouterPropTypes.location.isRequired,
    params: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired,
  }

  validate(values) {
    const errors = {}
    if (!values.name) {
      errors.name = "Name can't be blank"
    }

    return errors
  }

  handleSubmit = values => {
    return this.props.createFolder(values)
      .then(() => this.context.router.transitionTo('/home-folder'))
  }

  render() {
    return (
      <NewFolder
        form="newFolder"
        validate={this.validate}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default connect(null, { createFolder })(NewFolderContainer)
