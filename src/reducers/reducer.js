import { GET_AVENGERS, RECIVE_ERROR, GET_START, LOCAL_STORAGE } from '../actions/actionsTypes';

const initialState = [];

export const reducer = (state = initialState, action) => {
    if (action.type === GET_AVENGERS) {
        return [action.payload, ...state];
    } else if (action.type === RECIVE_ERROR) {
        return { ...state, error: action.payload };
    } else if (action.type === GET_START) {
        return state;
    } else if (action.type === LOCAL_STORAGE) {
        var stored = JSON.parse(localStorage.getItem('names'));
        return (state = stored);
    }
    return state;
};
