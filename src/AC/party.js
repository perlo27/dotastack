import { CREATE_PARTY, LEAVE_PARTY, JOIN_TO_PARTY, DELETE_PARTY, JOIN_TO_PARTY_REQUEST } from '../constants'
import history from '../history'

export function createPatry(partyprops, user) {
  const generatedId = Date.now() + Math.random()

  return (dispatch) => {
      dispatch({
        type: CREATE_PARTY,
          payload: {
            partyprops, user
          },
          generatedId
      })
      history.push( `parties/${generatedId}`)
  }
}

export function leaveParty(user, partyId) {
  return {
    type: LEAVE_PARTY,
    payload: {
      user, partyId
    }
  }
}

export function joinToParty(user, partyId) {
  return {
    type: JOIN_TO_PARTY,
    payload: {
      user, partyId
    }
  }
}

export function deleteParty(partyId) {
  return {
    type: DELETE_PARTY,
    payload: {
      partyId
    }
  }
}

export function joinToPartyRequest(user, partyId) {
  return {
    type: JOIN_TO_PARTY_REQUEST,
    payload: {
      user, partyId
    }
  }
}
