import { SIGN_IN } from '../constants'

export function signIn(user) {
  return {
    type: SIGN_IN,
    payload: {
      user
    }
  }
}
