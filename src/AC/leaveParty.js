import { LEAVE_PARTY } from '../constants'

export function leaveParty(user, partyId) {
  return {
    type: LEAVE_PARTY,
    payload: {
      user, partyId
    }
  }
}
