import axios from 'axios';
import * as types from './actionsTypes';

export function getAction(response) {
    return {
        type: types.GET_AVENGERS,
        payload: response
    };
}

export function errorAction(error) {
    return {
        type: types.RECIVE_ERROR,
        payload: error.data
    };
}

export function getStart(error) {
    return {
        type: types.GET_START
    };
}

export function getStorageAction(params) {
    return {
        type: types.LOCAL_STORAGE
    };
}

export const getAvengers = avenger => dispatch => {
    dispatch(getStart());

    return axios
        .get(
            'https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=' +
                avenger +
                '&apikey=346ad994c073569b511cfa4aaa46a391&hash=eab2f0ae9ab71c5b3dce6f1881d40a9d'
        )
        .then(response => {
            dispatch(getAction(response.data));
            return response;
        })
        .catch(error => {
            dispatch(errorAction(error));
            return error;
        });
};

export function getLocalStorage() {
    return dispatch => {
        return dispatch(getStorageAction());
    };
}
