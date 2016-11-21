import { SIGN_IN, SIGN_OUT, JOIN_TO_PARTY } from '../constants'

export default store => next => action => {
    const {payload, type} = action

    if (type == SIGN_IN) {
      const userString = JSON.stringify(payload.user)
      localStorage.setItem('user', userString)
    }

    if (type == SIGN_OUT) {
      localStorage.removeItem('user')
    }

    if (type == JOIN_TO_PARTY) {
      localStorage.removeItem('user')
      const newuser = Object.assign({}, payload.user, {inparty: payload.partyId})
      const userString = JSON.stringify(newuser)
      localStorage.setItem('user', userString)
    }

    return next(action)

}
