import { parties as defParties} from '../fixtures'
import { CREATE_PARTY, JOIN_TO_PARTY, LEAVE_PARTY, DELETE_PARTY, JOIN_TO_PARTY_REQUEST, KICK_FROM_WL, INVITE_FROM_WL, CLEAR_WL } from '../constants'
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
    neededroles: [],
    gametype: ""
})

const PlayerModel = Record({
  nick: "",
  mmr: null,
  role: "",
  id: "",
  inparty: ""
})



const defState = arrayToMap(defParties, party => new PartyModel(party))
const defStateP = defState.map((v,k) => v.update('players', players => arrayToMap(players, player => new PlayerModel(player))))
const dswupd = defStateP.map( v => v.update('waitlist', waitlist => arrayToMap(waitlist, wlp => new PlayerModel(wlp))))



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
    case JOIN_TO_PARTY_REQUEST:
      return parties.setIn([payload.partyId, 'waitlist', payload.user.id], new PlayerModel(payload.user))

    case JOIN_TO_PARTY:
      return parties.setIn([payload.partyId, 'players', payload.user.id], new PlayerModel(payload.user))
                    .setIn([payload.partyId, 'averagemmr'], updateMMR(parties.getIn([payload.partyId, 'players']), payload.user.mmr))

    case LEAVE_PARTY:
      return parties.deleteIn([payload.partyId, 'players', payload.user.id])
                    .setIn([payload.partyId, 'averagemmr'], updateMMR(parties.getIn([payload.partyId, 'players']), payload.user.mmr, "minus"))
    case DELETE_PARTY:
      return parties.delete(payload.partyId)

    case INVITE_FROM_WL:
      return parties.setIn([payload.partyId, 'players', payload.player.id], new PlayerModel(payload.player))
                  .setIn([payload.partyId, 'averagemmr'], updateMMR(parties.getIn([payload.partyId, 'players']), payload.player.mmr, "plus"))
                  .deleteIn([payload.partyId, 'waitlist', payload.player.id])

    case KICK_FROM_WL:
      return parties.deleteIn([payload.partyId, 'waitlist', payload.player.id])

    case CLEAR_WL:
      return parties.setIn([payload.partyId, 'waitlist'], new Map({}))
  }

  return parties
}
