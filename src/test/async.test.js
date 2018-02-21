import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/actions'
import * as types from '../actions/actionsTypes'
import moxios from 'moxios';
import { getAvengers, getAction } from '../actions/actions';
// import expect from 'expect' // You can use any testing library

var response = {
    data: {
        results: []
    }
}

const avenger = 'iron';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getAction actions', () => {

    beforeEach(function() {
        moxios.install();
    });

    afterEach(function() {
        moxios.uninstall();
    });

    it('It should return Local Storge type', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                payload: response,
            });
        });

        const expectedActions = [
            { type: types.LOCAL_STORAGE },
            { type: types.GET_START },
            { payload: undefined, type: types.GET_AVENGERS }
        ]

        let act;
        const store = mockStore({ avengers: [] })
        store.dispatch(actions.getLocalStorage());
        return store.dispatch(actions.getAvengers(avenger)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });
});