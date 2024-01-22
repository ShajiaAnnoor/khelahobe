import {
	combineReducers
} from 'redux';
import {
	actions
} from '../actions/OnThisDay';

const onThisDay = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_ON_THIS_DAY:
			return action.response;
		default:
			return state;
	}
};

const onThisDayById = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_ON_THIS_DAY_BY_SLUG:
			return [action.response];
		case actions.SUCCESS_FETCH_ON_THIS_DAY_BY_ID:
			return [action.response];
		default:
			return state;
	}
};

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_ON_THIS_DAY:
		case actions.REQUEST_CREATE_ON_THIS_DAY:
		case actions.REQUEST_UPDATE_ON_THIS_DAY:
		case actions.REQUEST_DELETE_ON_THIS_DAY:
		case actions.REQUEST_FETCH_ALL_ON_THIS_DAY:
			return true;
		case actions.SUCCESS_UPDATE_ON_THIS_DAY:
		case actions.FAILURE_UPDATE_ON_THIS_DAY:
		case actions.SUCCESS_FETCH_ALL_ON_THIS_DAY:
		case actions.FAILURE_FETCH_ALL_ON_THIS_DAY:
		case actions.SUCCESS_DELETE_ON_THIS_DAY:
		case actions.FAILURE_DELETE_ON_THIS_DAY:
		case actions.SUCCESS_CREATE_ON_THIS_DAY:
		case actions.FAILURE_CREATE_ON_THIS_DAY:
		case actions.SUCCESS_FETCH_ON_THIS_DAY:
		case actions.FAILURE_FETCH_ON_THIS_DAY:
			return false;
		default:
			return state;
	}
};

const isFetchingIndividual = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_ON_THIS_DAY_BY_ID:
			return true;
		case actions.SUCCESS_FETCH_ON_THIS_DAY_BY_ID:
		case actions.FAILURE_FETCH_ON_THIS_DAY_BY_ID:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	onThisDay,
	onThisDayById,
	isFetching,
	isFetchingIndividual
});

export const getOnThisDayAll = state => state.onThisDay || [];

export const getIsFetching = state => state.isFetching;

export const getOnThisDayById = (state, id) => (state.onThisDayById && state.onThisDayById.find(i => i.id === id)) || '';

export const getOnThisDayBySlug = (state, slug) => (state.onThisDayById && state.onThisDayById.find(i => i.slug === slug)) || '';

export const getIsFetchingIndividual = state => state.isFetchingIndividual;