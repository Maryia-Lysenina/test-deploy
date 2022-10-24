const  initState = [];

export const photosReducer = (action,state = initState) => {
    switch (action.type){
        default: return state;
        case 'ADD_PHOTOS': {
            return [...state,
            action.payload]
        }
    }
}

export const photosAC = (payload) => {
    return {
        type: 'ADD_PHOTOS',
        payload: payload,
    }
}