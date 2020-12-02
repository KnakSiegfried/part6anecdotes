import anecdotesService from "../services/anecdotesService";
import {setNotification} from "./notificationReducer";

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const reducer = (state  =[]/*= initialState*/, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type){
    case 'UPDATE' : {
      return state.map(anecdote => {
        return anecdote.id !== action.id ? anecdote : action.item
      })
    }
    case 'CREATE' : {
      return [...state, action.item]
    }
    case 'INIT_DATA': {
      return action.items
    }
    default:
      return state
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const anecdote = await anecdotesService.getById(id)
    const changed = {...anecdote, votes: anecdote.votes+1}
    const ret = await anecdotesService.update(id, changed)
    dispatch( { type: 'UPDATE', id: id, item: ret})
    dispatch(setNotification(`you voted '${ret.content}'`,5))
  }
}

export const createAnecdote = (content) => {
  return async(dispatch_method) => {
    const anecdote = asObject(content)
    const savedAnecdote = await anecdotesService.addNew(anecdote)
    dispatch_method({type:'CREATE', item: savedAnecdote})
    dispatch_method(setNotification(`new anecdote '${savedAnecdote.content}'`,5))
  }

}

export const initializeAnecdotes = () => {
  return async (dispatch_method) => {
    const anecdotes = await anecdotesService.getAll()
    dispatch_method({
      type: 'INIT_DATA',
      items: anecdotes
    })
  }
}

export default reducer
