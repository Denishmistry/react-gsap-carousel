import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk' // redux middle-ware
import reducers from './reducers' //connect all reduce
const initialState = {}; // default redux state
export default createStore(reducers, initialState, applyMiddleware(thunkMiddleware))