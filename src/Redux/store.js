import {applyMiddleware, combineReducers, createStore} from 'redux';
import { animalsReducer } from './Reducers/animalsReducer';
import thunk from 'redux-thunk';
import { photosReducer } from './Reducers/photosReducer';
import {usersReducer} from './Reducers/usersReducer';

const rootReducer = combineReducers({
    animals: animalsReducer,
    // users: usersReducer,
    // photos: photosReducer,

})
export const store = createStore(rootReducer,applyMiddleware(thunk))