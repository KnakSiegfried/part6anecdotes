
const initialState = {
    notification: "initial notification",
    timeoutId: 0
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SETNOTIFICATION':{
            return {...state, notification: action.text}
        }
        case 'CLEARNOTIFICATION':{
            return {...state, notification: '', timeoutId: 0 }
        }
        case 'SETNOTIFICATIONID': {
            return {...state, timeoutId: action.timeoutId}
        }
        default:
            return state
    }
}

export const setNotification = (text, seconds) => {
    const milliSeconds = seconds*1000
    console.log("millis ", milliSeconds)
    return async (dispatch, getState) => {
        dispatch({ type: 'SETNOTIFICATION', text: text})
        const timeoutId = setTimeout(()=>{
            dispatch({type: 'CLEARNOTIFICATION'})
        }, milliSeconds)
        const existingId= getState().notification.timeoutId
        if (existingId>0){
            clearTimeout(existingId)
        }
        dispatch({type: 'SETNOTIFICATIONID', timeoutId: timeoutId})
    }
}

export const clearNotification = () => {
    return { type: 'CLEARNOTIFICATION'}
}

export default notificationReducer
