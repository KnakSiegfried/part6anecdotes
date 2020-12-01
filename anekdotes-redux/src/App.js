import React from 'react'
import AnecdotesList from './components/AnecdotesList'
import NewAnecdote from "./components/NewAnecdote";

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
        <AnecdotesList/>
      <NewAnecdote/>
    </div>
  )
}

export default App
