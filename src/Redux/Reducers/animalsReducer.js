import axios from "axios";

const initState = [];

export const animalsReducer = (state = initState, action) => {
    switch (action.type){
        default: return state
        case 'ADD_ANIMALS': {
            return state = action.payload
        }
    }
}

export const animalsAC = (payload) => {
    return {
        type: 'ADD_ANIMALS',
        payload,
    }
}
// export const delayLoadAC = (payload) => {
//     return {
//         type: 'DELAY_LOAD',
//         payload,
//     }
// }


export const animalsTC = () => {
    // delayLoadAC(true)
    return (dispatch) => {
        axios('https://territoriyazoo.by/api/animals/')
        // .then(delayLoadAC(false))
        .then(response => dispatch(animalsAC(response)))
    } 
}