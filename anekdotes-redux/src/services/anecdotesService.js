import axios from 'axios'

const baseUrl = 'http://localhost:3004/anecdotes'


    const  getAll = async() => {
        const ret = await axios.get(baseUrl)
        return ret.data
    }

    const getById = async(id) => {
        const ret = await axios.get(`${baseUrl}/${id}`)
        return ret.data
    }

    const addNew = async (anecdote) => {
        const ret = await axios.post(baseUrl, anecdote)
        return ret.data
    }

    const update = async (id, anecdote) => {
        const ret = await axios.put(`${baseUrl}/${id}`, anecdote)
        return ret.data
    }

export default {getAll, getById, addNew, update}


