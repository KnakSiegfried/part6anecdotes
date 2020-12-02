import React from "react";
import {createAnecdote} from "../reducers/anecdoteReducer";
import { useDispatch } from 'react-redux'

const NewAnecdote = () => {

    console.log("NewAnecdote")
    const dispatch = useDispatch()

    const create = (event) =>{
        event.preventDefault()
        const content = event.target.content.value
        console.log(content)
        dispatch(createAnecdote(content))
    }

    return (   <div>
    <h2>create new</h2>
    <form onSubmit={create}>
        <div><input  name='content'/></div>
        <button type='submit'>create</button>
    </form>
    </div>)

 }

export default NewAnecdote
