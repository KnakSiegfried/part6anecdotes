
const filterReducer = ( state="", action) =>{
    switch (action.type){
        case 'SETFILTER': {
            return action.text
        }
        default:
            return state
    }
}

export const setFilter = (text) => {
    return {
        type: 'SETFILTER',
        text: text
    }
}

export default filterReducer
