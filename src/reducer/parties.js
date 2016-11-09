import { parties as defParties} from '../fixtures'
import { CREATE_PARTY, JOIN_TO_PARTY } from '../constants'

export default (parties = defParties, action) => {
  const {type, payload} = action
  switch (type) {

    case CREATE_PARTY:
      return parties.concat(payload.party)
    break

    case JOIN_TO_PARTY:

      return parties.map( party =>
        party.id == payload.partyId ? Object.assign({}, party, {players: party.players.concat(payload.user)} ) : party
      )

  }

  return parties
}
