import { SIGN_IN, SIGN_OUT } from '../constants'

export default ( user = {}, action ) => {
  const {type, payload} = action
  switch(type) {
    case SIGN_IN:
      return Object.assign({}, user, payload.user)

    case SIGN_OUT:
      return {}

  }
  return user
}
