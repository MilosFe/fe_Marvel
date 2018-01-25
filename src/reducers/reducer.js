import { GET_AVENGERS, RECIVE_ERROR } from '../actions/actions';

const initialState = [];

export const reducer = (state = initialState, action) => {
    if (action.type === GET_AVENGERS) {
        return [action.payload, ...state];
    } else if (action.type === RECIVE_ERROR) {
        return {...state, error: action.payload };
    }
    return state;
};