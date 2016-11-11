export const acceptHeader = ({ version }) => ({
  'Accept': `application/vnd.stat-genomics-rails.com; version=${version}`
})

export const acceptAuthorizationHeader = ({ accessToken, version }) => ({
  ...acceptHeader({ version }),
  'Authorization': `Bearer ${accessToken}`
})

const contentTypeHeader = { 'Content-Type': 'application/json' }

export const acceptHeaderWithContentType = ({ version }) => ({
  ...acceptHeader({ version }),
  ...contentTypeHeader
})

export const authorizationHeaderWithContentType = ({ accessToken, version }) => ({
  ...acceptAuthorizationHeader({ accessToken, version }),
  ...contentTypeHeader
})

// eslint-disable-next-line no-undef
export const baseUrl = STAT_GENOMICS_API_URL
