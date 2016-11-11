import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'components/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const NewFolder = ({ error, handleSubmit, submitting }) => (
  <div className="row">
    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="name" type="text" component={TextField} label="Name" />
        </div>
        <div>
          <RaisedButton type="submit" disabled={submitting} label="Create Folder" primary={true} />
        </div>
      </form>
    </div>
  </div>
)

export default reduxForm()(NewFolder)
