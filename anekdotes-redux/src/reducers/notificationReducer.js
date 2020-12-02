

const notificationReducer = (state = "initial notification", action) => {
    switch (action.type){
        case 'SETNOTIFICATION':{
            return action.text
        }
        default:
            return state
    }
}

export const setNotification = (text) => {
    return { type: 'SETNOTIFICATION', text: text}
}

export const deleteNotification = () => {
    return { type: 'SETNOTIFICATION', text: ""}
}

export default notificationReducer
