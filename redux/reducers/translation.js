import {
	combineReducers
} from 'redux';
import {
	actions
} from '../actions/Translation';

const translations = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_TRANSLATION:
			return action.response;
		default:
			return state;
	}
};

const translationIndividual = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_TRANSLATION_BY_ID:
			return [action.response];
		default:
			return state;
	}
};

const isFetchingIndividual = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_TRANSLATION_BY_ID:
			return true;
		case actions.SUCCESS_FETCH_TRANSLATION_BY_ID:
		case actions.FAILURE_FETCH_TRANSLATION_BY_ID:
			return false;
		default:
			return state;
	}
};

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_TRANSLATION:
		case actions.REQUEST_CREATE_TRANSLATION:
		case actions.REQUEST_UPDATE_TRANSLATION:
		case actions.REQUEST_DELETE_TRANSLATION:
		case actions.REQUEST_COUNT_TRANSLATION:
			return true;
		case actions.SUCCESS_UPDATE_TRANSLATION:
		case actions.FAILURE_UPDATE_TRANSLATION:
		case actions.SUCCESS_COUNT_TRANSLATION:
		case actions.FAILURE_COUNT_TRANSLATION:
		case actions.SUCCESS_DELETE_TRANSLATION:
		case actions.FAILURE_DELETE_TRANSLATION:
		case actions.SUCCESS_CREATE_TRANSLATION:
		case actions.FAILURE_CREATE_TRANSLATION:
		case actions.SUCCESS_FETCH_TRANSLATION:
		case actions.FAILURE_FETCH_TRANSLATION:
			return false;
		default:
			return state;
	}
};

const count = (state = 0, action) => {
	switch (action.type) {
		case actions.SUCCESS_COUNT_TRANSLATION:
			return action.response;
		default:
			return state;
	}
};

export default combineReducers({
	count,
	translations,
	isFetching,
	isFetchingIndividual,
	translationIndividual,
});

export const getTranslations = state => state.translations || [];

export const getIsFetching = state => state.isFetching;

export const getIsFetchingIndividual = state => state.isFetchingIndividual;

export const getTranslationById = (state, id) => (state.translationIndividual.length !== 0 && state.translationIndividual.find(i => i.id === id)) || '';

export const getCount = state => state.count;