import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {voteAnecdote} from "../reducers/anecdoteReducer";
import Filter from "./Filter";

const AnecdotesList = () => {

    console.log("anecdote list")
    const anecdotes = useSelector(({filter, anecdotes})=> {
        const data = anecdotes.filter( a => a.content.includes(filter) )
        data.sort((l, r) => r.votes - l.votes
        )
        return data;
    })

    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteAnecdote(id))
    }

    return   (
        <div>
            <Filter/>
            {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
        )}
        </div>
    )
}

export default AnecdotesList
