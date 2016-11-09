import { CREATE_PARTY } from '../constants'

export function createPatry(party) {
  return {
    type: CREATE_PARTY,
    payload: {
      party
    }
  }
}
