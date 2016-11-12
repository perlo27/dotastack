import { DELETE_PARTY } from '../constants'

export function deleteParty(partyId) {
  return {
    type: DELETE_PARTY,
    payload: {
      partyId
    }
  }
}
