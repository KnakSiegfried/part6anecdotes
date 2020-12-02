import React from "react";
import {createAnecdote} from "../reducers/anecdoteReducer";
import { connect } from 'react-redux'

const NewAnecdote = (props) => {
    const create = async (event) =>{
        event.preventDefault()
        const content = event.target.content.value
        props.createAnecdote(content)
    }

    return (   <div>
        <h2>create new</h2>
        <form onSubmit={create}>
            <div><input  name='content'/></div>
            <button type='submit'>create</button>
        </form>
    </div>)

}

const mapDispatchToProps = {
    createAnecdote}
export default connect(null, mapDispatchToProps)(NewAnecdote)
