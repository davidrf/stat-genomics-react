import { camelizeKeys } from 'humps'
import { normalize } from 'normalizr'
import { SubmissionError } from 'redux-form'
import { acceptHeaderWithContentType, baseUrl } from './helpers'
import { authenticationSchema } from './schemas'

export const logIn = async ({ email, password }) => {
  const requestBody = JSON.stringify({
    authentication: {
      email,
      password
    }
  })
  const response = await fetch(`${baseUrl}/authentications`, {
    method: 'POST',
    headers: acceptHeaderWithContentType({ version: 1 }),
    body: requestBody
  })

  let camelizedBody, responseBody
  if (response.ok) {
    responseBody = await response.json()
    camelizedBody = camelizeKeys(responseBody)
    return normalize(camelizedBody.authentication, authenticationSchema)
  } else if (response.status === 422) {
    responseBody = await response.json()
    camelizedBody = camelizeKeys(responseBody)
    throw new SubmissionError(camelizedBody)
  }
}
