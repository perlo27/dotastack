import { SIGN_IN } from '../constants'

export default ( user = {}, action ) => {
  const {type, payload} = action
  switch(type) {
    case SIGN_IN:
    return Object.assign({}, user, payload.user)
  }
  return user
}
