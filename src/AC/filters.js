import { CHANGE_MMR_FILTER } from '../constants'

export function changeMmrFilter(value) {
  return {
    type: CHANGE_MMR_FILTER,
    payload: {
      value
    }
  }
}
