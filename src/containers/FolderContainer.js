import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { propTypes as RouterPropTypes } from 'react-router'
import { folderFind } from 'reducers'
import { fetchFolder } from 'reducers/folders'
import Folder from 'components/Folder'
import Loading from 'components/Loading'

class FolderContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    fetchFolder: PropTypes.func.isRequired,
    folder: PropTypes.object,
    isExact: PropTypes.bool.isRequired,
    location: RouterPropTypes.location.isRequired,
    params: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.props.fetchFolder(this.props.params.folderId)
  }

  render() {
    const { folder } = this.props
    return folder ?
      <Folder {...folder} isHomeFolder={false} /> :
      <Loading />
  }
}

const mapStateToProps = (state, { params }) => ({
  folder: folderFind(state, params.folderId)
})

export default connect(mapStateToProps, { fetchFolder })(FolderContainer)
