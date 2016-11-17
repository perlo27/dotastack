import history from '../history'
import { CREATE_PARTY } from '../constants'

export default store => next => action => {
    const { generatedId, type, ...rest } = action

    if (type == CREATE_PARTY)  history.push( `parties/${generatedId}`)

    return next(action)

}
