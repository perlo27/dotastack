import { Map } from 'immutable'
import store from './index'

export function checkAuth() {
  return store.getState().user.nick ? true : false
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
