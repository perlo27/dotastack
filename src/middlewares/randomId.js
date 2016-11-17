import history from '../history'

export default store => next => action => {
    const { generateId, ...rest } = action
    if (!generateId) return next(action)

    const generatedId = Date.now() + Math.random()
    next({
        ...rest,
        generatedId
    })

    
}
