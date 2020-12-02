import React from "react";
import {createAnecdote} from "../reducers/anecdoteReducer";
import { useDispatch } from 'react-redux'
import { setNotification, clearNotification} from "../reducers/notificationReducer";

const NewAnecdote = () => {

    console.log("NewAnecdote")
    const dispatch = useDispatch()

    const create = async (event) =>{
        event.preventDefault()
        const content = event.target.content.value
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
