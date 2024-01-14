import {
    combineReducers
} from 'redux';
import {
    actions
} from '../actions/Counter';

const counters = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_COUNTERS:
            return action.response;
        default:
            return state;
    }
};

const counter = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_COUNTER_BY_ID:
            return [action.response];
        default:
            return state;
    }
};

const isFetchingIndividual = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_FETCH_COUNTER_BY_ID:
            return true;
        case actions.SUCCESS_FETCH_COUNTER_BY_ID:
        case actions.FAILURE_FETCH_COUNTER_BY_ID:
            return false;
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_FETCH_COUNTERS:
        case actions.REQUEST_CREATE_COUNTER:
        case actions.REQUEST_UPDATE_COUNTER:
        case actions.REQUEST_DELETE_COUNTER:
            return true;
        case actions.SUCCESS_UPDATE_COUNTER:
        case actions.FAILURE_UPDATE_COUNTER:
        case actions.SUCCESS_DELETE_COUNTER:
        case actions.FAILURE_DELETE_COUNTER:
        case actions.SUCCESS_CREATE_COUNTER:
        case actions.FAILURE_CREATE_COUNTER:
        case actions.SUCCESS_FETCH_COUNTERS:
        case actions.FAILURE_FETCH_COUNTERS:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    counter,
    counters,
    isFetching,
    isFetchingIndividual
});

export const getCounters = state => state.counters || [];

export const getIsFetchingIndividual = state => state.isFetchingIndividual;

export const getIsFetching = state => state.isFetching;

export const getCounter = (state, id) => (state.counter.length !== 0 && state.counter.find(i => i.id === id)) || '';