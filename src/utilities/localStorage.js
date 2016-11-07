const stateGenomicsKey = 'statGenomics'

export const setLocalStorage = ({ entities, result }) => {
  const authentication = entities.authentications[result]
  const itemValue = JSON.stringify({
    authentication,
    users: { byId: entities.users }
  })
  localStorage.setItem(stateGenomicsKey, itemValue)
}

export const readLocalStorage = () => {
  const itemValue = localStorage.getItem(stateGenomicsKey)
  return itemValue ? JSON.parse(itemValue) : {}
}

export const clearLocalStorage = () => localStorage.removeItem(stateGenomicsKey)
