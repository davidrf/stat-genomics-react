import React from 'react'
import MaterialUITextField from 'material-ui/TextField'

const TextField = ({ input, label, type, meta: { touched, error } }) => (
  <MaterialUITextField
    floatingLabelText={label}
    type={type}
    errorText={touched && error}
    fullWidth={true}
    {...input}
  />
)

export default TextField
