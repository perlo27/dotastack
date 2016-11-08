import { JOIN_TO_PARTY } from '../constants'

export function joinToParty(user, partyId) {
  return {
    type: JOIN_TO_PARTY,
    payload: {
      user, partyId
    }
  }
}
