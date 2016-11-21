import { KICK_FROM_WL, INVITE_FROM_WL, CLEAR_WL } from '../constants'

export function kickFromWL(player, partyId) {
  return {
    type: KICK_FROM_WL,
    payload: {
      player, partyId
    }
  }
}

export function inviteFromWL(player, partyId) {
  return {
    type: INVITE_FROM_WL,
    payload: {
      player, partyId
    }
  }
}
export function clearWL(partyId) {
  return {
    type: CLEAR_WL,
    payload: {
      partyId
    }
  }
}
