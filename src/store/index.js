import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'
import userToLocalStorage from '../middlewares/userToLocalStorage'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk, randomId, userToLocalStorage))

const store = createStore(reducer, {}, enhancer)


export default store
