import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'components/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const LogIn = ({ error, handleSubmit, submitting }) => (
  <div className="row">
    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="email" type="email" component={TextField} label="Email"/>
        </div>
        <div>
          <Field name="password" type="password" component={TextField} label="Password"/>
        </div>
        {error && <strong>{error}</strong>}
        <div>
          <RaisedButton type="submit" disabled={submitting} label="Log In" primary={true} />
        </div>
      </form>
    </div>
  </div>
)

export default reduxForm()(LogIn)
