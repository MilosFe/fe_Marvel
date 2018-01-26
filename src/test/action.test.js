import { getAction } from '../actions/actions';
import { GET_AVENGERS, RECIVE_ERROR } from "../actions/actionsTypes";

describe('actions', () => {
    it('should create action', () => {
        var response = {
            data: 'Milos'
        }
        const expectedAction = {
            type: GET_AVENGERS,
            payload: response.data
        }
        expect(getAction(response)).toEqual(expectedAction)
    })
})