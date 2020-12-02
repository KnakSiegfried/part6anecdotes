import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import andecdotesReducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers(
    {
        anecdotes: andecdotesReducer,
        notification: notificationReducer,
        filter: filterReducer
    }
)

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ))


export default store
