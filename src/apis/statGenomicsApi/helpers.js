export const acceptHeader = ({ version }) => ({
  'Accept': `application/vnd.stat-genomics-rails.com; version=${version}`
})

const contentTypeHeader = { 'Content-Type': 'application/json' }

export const acceptHeaderWithContentType = ({ version }) => ({
  ...acceptHeader({ version }),
  ...contentTypeHeader
})

// eslint-disable-next-line no-undef
export const baseUrl = STAT_GENOMICS_API_URL
