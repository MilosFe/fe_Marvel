import axios from 'axios';
import * as types from './actionsTypes';


export function getAction(response) {
    return {
        type: types.GET_AVENGERS,
        payload: response.data
    }
}

export function errorAction(error) {
    return {
        type: types.RECIVE_ERROR,
        payload: error.data
    }
}



export function getAvengers(avenger) {
    return (dispatch) => {
        axios
            .get("https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=" + avenger + "&apikey=346ad994c073569b511cfa4aaa46a391&hash=eab2f0ae9ab71c5b3dce6f1881d40a9d")
            .then(response => {
                dispatch(getAction(response));
            })
            .catch(error => {
                dispatch(errorAction(error));
            });
    };
}

export function getLocalStorage() {
    return (dispatch) => {

        dispatch({
            type: 'LOCAL_STORAGE'
        });

    };
}