import { Schema } from 'normalizr'

export const userSchema = new Schema('users')
const authenticationSchema = new Schema('authentications', { idAttribute: 'accessToken'})
authenticationSchema.define({
  user: userSchema
})

export { authenticationSchema }
