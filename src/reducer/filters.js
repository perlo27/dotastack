import { Map, List } from 'immutable'
import { CHANGE_MMR_FILTER } from '../constants'

const defFilters = new Map({
  mmr: [1000, 5000]
})

export default (filters = defFilters, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_MMR_FILTER:
      return filters.set('mmr', payload.value)
  }

  return filters
}
