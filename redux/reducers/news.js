import {
    combineReducers
} from 'redux';
import {
    actions
} from '../actions/News';

const news = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_NEWS:
            return action.response;
        default:
            return state;
    }
};

const newsIndividual = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_NEWS_BY_ID:
            return [action.response];
        case actions.SUCCESS_FETCH_NEWS_BY_SLUG:
            return [action.response];
        default:
            return state;
    }
};

const isFetchingIndividual = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_FETCH_NEWS_BY_ID:
        case actions.REQUEST_FETCH_NEWS_BY_SLUG:
            return true;
        case actions.SUCCESS_FETCH_NEWS_BY_ID:
        case actions.FAILURE_FETCH_NEWS_BY_ID:
        case actions.SUCCESS_FETCH_NEWS_BY_SLUG:
        case actions.FAILURE_FETCH_NEWS_BY_SLUG:
            return false;
        default:
            return state;
    }
};

const count = (state = 0, action) => {
    switch (action.type) {
        case actions.SUCCESS_COUNT_NEWS:
            return action.response;
        default:
            return state;
    }
}

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_FETCH_NEWS:
        case actions.REQUEST_CREATE_NEWS:
        case actions.REQUEST_UPDATE_NEWS:
        case actions.REQUEST_DELETE_NEWS:
        case actions.REQUEST_COUNT_NEWS:
            return true;
        case actions.SUCCESS_UPDATE_NEWS:
        case actions.FAILURE_UPDATE_NEWS:
        case actions.SUCCESS_COUNT_NEWS:
        case actions.FAILURE_COUNT_NEWS:
        case actions.SUCCESS_DELETE_NEWS:
        case actions.FAILURE_DELETE_NEWS:
        case actions.SUCCESS_CREATE_NEWS:
        case actions.FAILURE_CREATE_NEWS:
        case actions.SUCCESS_FETCH_NEWS:
        case actions.FAILURE_FETCH_NEWS:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    news,
    count,
    isFetching,
    newsIndividual,
    isFetchingIndividual
});

export const getNews = state => state.news || [];

export const getIsFetching = state => state.isFetching;

export const getIsFetchingIndividual = state => state.isFetchingIndividual;

export const getNewsById = (state, id) => (state.newsIndividual.length !== 0 && state.newsIndividual.find(i => i.id === id)) || '';

export const getNewsBySlug = (state, slug) => (state.newsIndividual.length !== 0 && state.newsIndividual.find(i => i.slug === slug)) || '';

export const getCount = state => state.count;