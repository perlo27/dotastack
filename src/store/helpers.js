import { Map } from 'immutable'
import store from './index'

export function checkAuth() {
  return !!JSON.parse(localStorage.getItem('user'))
}

export function arrayToMap(arr, mapper = (f) => f) {
    return arr.reduce((acc, entity) => acc.set(entity.id, mapper(entity)), new Map({}))
}

export function updateMMR(playersMap, pmmr) {
  const mmrarr = playersMap.map(v => v.get('mmr')).toArray()
  const playersCount = mmrarr.length + 1
  const summMMR = mmrarr.reduce( (acc, v )=> acc + v, 0 )
  const total = Math.floor((summMMR + pmmr) / playersCount)

  return total
}

export function checkParty() {
  if (!JSON.parse(localStorage.getItem('user'))) return false
  return JSON.parse(localStorage.getItem('user')).inparty ? JSON.parse(localStorage.getItem('user')).inparty : false
}

export function updateStorage(storageKey, objectKey, value, method) {
  if ( !JSON.parse(localStorage.getItem(storageKey)) ) return false
  var playerObj = JSON.parse(localStorage.getItem(storageKey))
  if (method == 'push') {
    playerObj[objectKey].push(value)
  }
  localStorage.removeItem(storageKey)
  localStorage.setItem(storageKey, JSON.stringify(playerObj))
}
