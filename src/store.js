import {createStore,applyMiddleware, logger, thunk} from './KRedux'
//import {createStore, applyMiddleware} from 'redux';
//import logger from 'redux-logger';
//import thunk from 'redux-thunk';

function reducer(state = 0, action){
    switch(action.type){
        case "ADD" : return state+1;
        case "MINUS" : return state-1;
        default : return state;
    }
}
export const store = createStore(reducer,applyMiddleware(thunk, logger));
