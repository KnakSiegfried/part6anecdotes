import React, {useEffect} from 'react'
import AnecdotesList from './components/AnecdotesList'
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";
import anecdotesService from "./services/anecdotesService";
import {useDispatch} from "react-redux";
import {initializeAnecdotes} from "./reducers/anecdoteReducer";

const App = () => {
    console.log("App")

    const dispatch = useDispatch()
    useEffect( async () => {
            const anecdotes = await anecdotesService.getAll()
            dispatch(initializeAnecdotes(anecdotes))
        }
    )

  return (
    <div>
      <Notification/>
      <h2>Anecdotes</h2>
      <AnecdotesList/>
      <NewAnecdote/>
    </div>
  )
}

export default App
