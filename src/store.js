import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const middlewares = [thunk]
middlewares.push(logger)

export default createStore(rootReducer, applyMiddleware(...middlewares))