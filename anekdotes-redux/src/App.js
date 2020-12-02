import React from 'react'
import AnecdotesList from './components/AnecdotesList'
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";

const App = () => {
    console.log("App")

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
