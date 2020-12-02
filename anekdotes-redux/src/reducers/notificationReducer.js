

const notificationReducer = (state = "initial notification", action) => {
    switch (action.type){
        case 'SETNOTIFICATION':{
            return action.text
        }
        default:
            return state
    }
}

export const setNotification = (text, seconds) => {
    const milliSeconds = seconds*1000
    console.log("millis ", milliSeconds)
    return async (dispatch) => {
        dispatch({ type: 'SETNOTIFICATION', text: text})


        setTimeout(()=>{
            dispatch({type: 'SETNOTIFICATION', text: ''})
        }, milliSeconds)
    }

}

export const clearNotification = () => {
    return { type: 'SETNOTIFICATION', text: ""}
}

export default notificationReducer
