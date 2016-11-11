import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { propTypes as RouterPropTypes } from 'react-router'
import { folderFind, getHomeFolderId } from 'reducers'
import { fetchFolder } from 'reducers/folders'
import Folder from 'components/Folder'
import Loading from 'components/Loading'

class HomeFolderContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    fetchFolder: PropTypes.func.isRequired,
    folder: PropTypes.object,
    homeFolderId: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    location: RouterPropTypes.location.isRequired,
    params: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.props.fetchFolder(this.props.homeFolderId)
  }

  render() {
    const { folder } = this.props
    return folder ?
      <Folder {...folder} isHomeFolder={true} /> :
      <Loading />
  }
}

const mapStateToProps = state => {
  const homeFolderId = getHomeFolderId(state)
  return { folder: folderFind(state, homeFolderId), homeFolderId }
}

export default connect(mapStateToProps, { fetchFolder })(HomeFolderContainer)
