import { SIGN_IN, SIGN_OUT } from '../constants'

export default store => next => action => {
    const {payload, type} = action
    
    if (type == SIGN_IN) {
      const userString = JSON.stringify(payload.user)
      localStorage.setItem('user', userString)
    }

    if (type == SIGN_OUT) {
      localStorage.removeItem('user')
    }

    return next(action)

}
