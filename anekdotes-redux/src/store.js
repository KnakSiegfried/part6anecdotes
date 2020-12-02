import { createStore } from 'redux'
import andecdotesReducer from './reducers/anecdoteReducer'

const store = createStore(andecdotesReducer)

export default store
