import { camelizeKeys } from 'humps'
import { normalize } from 'normalizr'
import { SubmissionError } from 'redux-form'
import { acceptHeader, authorizationHeaderWithContentType, baseUrl } from './helpers'
import { folderSchema } from './schemas'

export const create = async ({ accessToken, name, homeFolderId }) => {
  const requestBody = JSON.stringify({
    folder: {
      name,
      parent_id: homeFolderId
    },
  })
  const response = await fetch(`${baseUrl}/folders`, {
    method: 'POST',
    headers: authorizationHeaderWithContentType({ accessToken, version: 1 }),
    body: requestBody
  })

  let camelizedBody, responseBody
  if (response.ok) {
    responseBody = await response.json()
    camelizedBody = camelizeKeys(responseBody)
    return normalize(camelizedBody.folder, folderSchema)
  } else if (response.status === 422) {
    responseBody = await response.json()
    camelizedBody = camelizeKeys(responseBody)
    throw new SubmissionError(camelizedBody)
  }
}

export const show = async folderId => {
  const response = await fetch(`${baseUrl}/folders/${folderId}`, {
    headers: acceptHeader({ version: 1 })
  })

  let camelizedBody, responseBody
  if (response.ok) {
    responseBody = await response.json()
    camelizedBody = camelizeKeys(responseBody)
    return normalize(camelizedBody.folder, folderSchema)
  } else {
    throw new Error('unexpected response in fetch')
  }
}
