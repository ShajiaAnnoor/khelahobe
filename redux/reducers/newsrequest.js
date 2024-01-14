import {
    combineReducers
} from 'redux';
import {
    actions
} from '../actions/NewsRequest';

const newsRequests = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_NEWS_REQUESTS:
            return action.response;
        default:
            return state;
    }
};

const count = (state = 0, action) => {
    switch (action.type) {
        case actions.SUCCESS_COUNT_NEWS_REQUESTS:
            return action.response;
        default:
            return state;
    }
};

const newsRequestIndividual = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_NEWS_REQUEST_BY_ID:
            return [action.response];
        case actions.SUCCESS_FETCH_NEWS_REQUEST_BY_SLUG:
            return [action.response];
        default:
            return state;
    }
};

const isFetchingIndividual = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_FETCH_NEWS_REQUEST_BY_ID:
        case actions.REQUEST_FETCH_NEWS_REQUEST_BY_SLUG:
            return true;
        case actions.SUCCESS_FETCH_NEWS_REQUEST_BY_ID:
        case actions.FAILURE_FETCH_NEWS_REQUEST_BY_ID:
        case actions.SUCCESS_FETCH_NEWS_REQUEST_BY_SLUG:
        case actions.FAILURE_FETCH_NEWS_REQUEST_BY_SLUG:
            return false;
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_FETCH_NEWS_REQUESTS:
        case actions.REQUEST_CREATE_NEWS_REQUEST:
        case actions.REQUEST_UPDATE_NEWS_REQUEST:
        case actions.REQUEST_DELETE_NEWS_REQUEST:
        case actions.REQUEST_COUNT_NEWS_REQUESTS:
            return true;
        case actions.SUCCESS_UPDATE_NEWS_REQUEST:
        case actions.FAILURE_UPDATE_NEWS_REQUEST:
        case actions.SUCCESS_COUNT_NEWS_REQUESTS:
        case actions.FAILURE_COUNT_NEWS_REQUESTS:
        case actions.SUCCESS_DELETE_NEWS_REQUEST:
        case actions.FAILURE_DELETE_NEWS_REQUEST:
        case actions.SUCCESS_CREATE_NEWS_REQUEST:
        case actions.FAILURE_CREATE_NEWS_REQUEST:
        case actions.SUCCESS_FETCH_NEWS_REQUESTS:
        case actions.FAILURE_FETCH_NEWS_REQUESTS:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    newsRequests,
    count,
    isFetching,
    isFetchingIndividual,
    newsRequestIndividual
});

export const getNewsRequests = state => state.newsRequests || [];

export const getIsFetching = state => state.isFetching;

export const getNewsRequestById = (state, id) => (state.newsRequestIndividual.length !== 0 && state.newsRequestIndividual.find(i => i.id === id)) || '';

export const getNewsRequestBySlug = (state, slug) => (state.newsRequestIndividual.length !== 0 && state.newsRequestIndividual.find(i => i.slug === slug)) || '';

export const getCount = state => state.count;