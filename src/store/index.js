import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'
import redirect from '../middlewares/redirect'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk, randomId, redirect))

const store = createStore(reducer, {}, enhancer)


export default store
