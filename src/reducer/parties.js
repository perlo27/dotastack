import { parties as defParties} from '../fixtures'
import { CREATE_PARTY, JOIN_TO_PARTY, LEAVE_PARTY } from '../constants'
import { Record, Map, List } from 'immutable'
import { arrayToMap } from '../store/helpers'

const PartyModel = Record({
    id: null,
    date: null,
    partyname: "",
    description: "",
    leader: null,
    players: new Map({})
})

const PlayerModel = Record({
  nick: "",
   mmr: null,
   role: "",
   id: ""
})



const defState = arrayToMap(defParties, party => new PartyModel(party))
const defStateP = defState.map((v,k) => v.update('players', players => arrayToMap(players, player => new PlayerModel(player))))
window.defState = defStateP


export default (parties = defStateP, action) => {
  const {type, payload, generatedId} = action

  switch (type) {

    case CREATE_PARTY:
      return parties.set(generatedId, new PartyModel({
          id: generatedId,
          date: Date.now(),
          partyname: payload.partyprops.partyname,
          description: payload.partyprops.description,
          leader: payload.user.id,
          players: new Map({}).set(payload.user.id, new PlayerModel(payload.user))
        })
      )
    break

    case JOIN_TO_PARTY:
      return parties.setIn([payload.partyId, 'players', payload.user.id], new PlayerModel(payload.user) )

    case LEAVE_PARTY:
      return parties.deleteIn([payload.partyId, 'players', payload.user.id])
  }

  return parties
}
