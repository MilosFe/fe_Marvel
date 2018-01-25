import { reducer } from './reducers/reducer';
// eslint-disable-next-line 
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

/* We could have done this with not comebineing but we are thinking ahead if we needed more  */
const allReducer = combineReducers({
    avengers: reducer
});

const middleware = applyMiddleware(thunk, logger);
const store = createStore(allReducer, middleware);

export default store;