import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Folder = ({
  id,
  isHomeFolder,
  created,
  files,
  folders,
  name,
  parent,
  updatedAt,
  user,
}) => (
  <div>
    {isHomeFolder && <Link to="/folders/new">New Folder</Link>}
    <h1>{name}</h1>
  </div>
)

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  isHomeFolder: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
  folders: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  parent: PropTypes.object,
  updatedAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

export default Folder
