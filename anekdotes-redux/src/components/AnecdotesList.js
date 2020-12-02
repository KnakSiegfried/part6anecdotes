import React from "react";
import {connect} from "react-redux";
import {voteAnecdote} from "../reducers/anecdoteReducer";
import Filter from "./Filter";

const AnecdotesList = (props) => {

    console.log("anecdote list")
    const data = props.anecdotes.filter( a => a.content.includes(props.filter) )
    const anecdotes =  data.sort((l, r) => r.votes - l.votes)

    const vote = (id) => {
        props.voteAnecdote(id)
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    voteAnecdote
}
export default connect(mapStateToProps, mapDispatchToProps)(AnecdotesList)
