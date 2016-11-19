import { parties as defParties} from '../fixtures'
import { CREATE_PARTY, JOIN_TO_PARTY, LEAVE_PARTY, DELETE_PARTY } from '../constants'
import { Record, Map, List } from 'immutable'
import { arrayToMap, updateMMR } from '../store/helpers'

const PartyModel = Record({
    id: null,
    date: null,
    partyname: "",
    description: "",
    leader: null,
    averagemmr: null,
    players: new Map({}),
    waitlist: new Map({}),
    neededroles: []
})

const PlayerModel = Record({
  nick: "",
   mmr: null,
   role: "",
   id: ""
})



const defState = arrayToMap(defParties, party => new PartyModel(party))
const defStateP = defState.map((v,k) => v.update('players', players => arrayToMap(players, player => new PlayerModel(player))))
const dswupd = defStateP.map( v => v.update('waitlist', waitlist => arrayToMap(waitlist, wlp => new PlayerModel(wlp))))
window.defState = dswupd


export default (parties = dswupd, action) => {
  const {type, payload, generatedId} = action

  switch (type) {

    case CREATE_PARTY:
      return parties.set(generatedId, new PartyModel({
          id: generatedId,
          date: Date.now(),
          partyname: payload.partyprops.partyname,
          description: payload.partyprops.description,
          leader: payload.user.id,
          averagemmr: payload.user.mmr,
          players: new Map({}).set(payload.user.id, new PlayerModel(payload.user)),
          waitlist: new Map({})
        })
      )

    case JOIN_TO_PARTY:

      return parties.setIn([payload.partyId, 'players', payload.user.id], new PlayerModel(payload.user) )
                    .setIn( [payload.partyId, 'averagemmr'], updateMMR(parties.getIn([payload.partyId, 'players']), payload.user.mmr))

    case LEAVE_PARTY:
      return parties.deleteIn([payload.partyId, 'players', payload.user.id])

    case DELETE_PARTY:
      return parties.delete(payload.partyId)
  }

  return parties
}
