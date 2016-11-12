import { CREATE_PARTY } from '../constants'

export function createPatry(partyprops, user) {
  return {
    type: CREATE_PARTY,
    payload: {
      partyprops, user
    },
    generateId: true
  }
}
