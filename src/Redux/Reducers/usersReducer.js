const  initState = [];

export const usersReducer = (action,state = initState) => {
    switch (action.type){
        default: return state;
        case 'ADD_USERS': {
            return [...state,
            action.payload]
        }
    }
}

export const usersAC = (payload) => {
    return {
        type: 'ADD_USERS',
        payload: payload,
    }
}