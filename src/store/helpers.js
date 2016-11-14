import { Map } from 'immutable'
import store from './index'

export function checkAuth() {
  return store.getState().user.nick ? true : false 
}

export function arrayToMap(arr, mapper = (f) => f) {
    return arr.reduce((acc, entity) => acc.set(entity.id, mapper(entity)), new Map({}))
}
