import anecdotesService from "../services/anecdotesService";


const reducer = (state  =[]/*= initialState*/, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type){
    case 'VOTE' : {
      return state.map( anecdote => {return anecdote.id!==action.id?anecdote:{content: anecdote.content, id: anecdote.id, votes: anecdote.votes+1}})
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
  return { type: 'VOTE', id: id}
}

export const createAnecdote = (anecdote) => {
  return {type:'CREATE', item: anecdote}
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
