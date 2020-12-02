import React from "react";
import {createAnecdote} from "../reducers/anecdoteReducer";
import { useDispatch } from 'react-redux'
import anecdotesService from "../services/anecdotesService";

const NewAnecdote = () => {

    console.log("NewAnecdote")
    const dispatch = useDispatch()

    const asObject = (anecdote) => {
        const getId = () => (100000 * Math.random()).toFixed(0)
        return {

            content: anecdote,
            id: getId(),
            votes: 0
        }
    }

    const create = async (event) =>{
        event.preventDefault()
        const content = event.target.content.value
        const item = asObject(content)
        const ret = await anecdotesService.addNew(item)
        dispatch(createAnecdote(ret))
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
