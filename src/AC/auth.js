import { SIGN_IN, SIGN_OUT} from '../constants'
import history from '../history'

export function signIn(user) {
  return {
    type: SIGN_IN,
    payload: {
      user
    }
  }
}
export function signOut() {
  return (dispatch) => {
    dispatch({
      type: SIGN_OUT
    })
    
    history.push('/')
  }
}
