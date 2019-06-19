import {createStore, applyMiddleware} from "redux";
import reducer from '../reducers/rootReducer'
import thunk from "redux-thunk";
import logger from 'redux-logger'
import {loadState, saveState} from "../localStorage/localStorage";

const persistedState = loadState();

const store = createStore(reducer,
    persistedState,applyMiddleware(logger,thunk)
);

//adding save to localstorage of the redux state
store.subscribe(() => {
    saveState({
        pageView: store.getState().pageView,
        scores:store.getState().scores
    });
});

export default store;