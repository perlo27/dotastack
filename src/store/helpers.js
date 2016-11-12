import { Map } from 'immutable'

export function checkAuth(user) {
  console.log(user)
  return user ? true : false
}

export function arrayToMap(arr, mapper = (f) => f) {
    return arr.reduce((acc, entity) => acc.set(entity.id, mapper(entity)), new Map({}))
}
