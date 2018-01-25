import axios from 'axios';

export const GET_AVENGERS = 'GET_AVENGERS';
export const RECIVE_ERROR = 'RECIVE_ERROR';



export function getAvengers(avenger) {
    return (dispatch) => {
        axios
            .get("https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=" + avenger + "&apikey=346ad994c073569b511cfa4aaa46a391&hash=eab2f0ae9ab71c5b3dce6f1881d40a9d")
            .then(response => {
                dispatch({ type: GET_AVENGERS, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: RECIVE_ERROR, payload: error });
            });
    };
}