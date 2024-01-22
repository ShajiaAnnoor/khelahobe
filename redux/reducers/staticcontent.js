import {
	combineReducers
} from 'redux';
import {
	actions
} from '../actions/StaticContent';

const staticContents = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_STATIC_CONTENTS:
			return action.response;
		// case actions.SUCCESS_DELETE_STATIC_CONTENT:
		//     del = state.STATIC_CONTENT.find(i => i.id === id);
		//     delete del;
		//     return state;
		// case actions.SUCCESS_FETCH_STATIC_CONTENT:
		//     return [...state, action.response];
		default:
			return state;
	}
};

const staticContentIndividual = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_STATIC_CONTENT_BY_ID:
			return [action.response];
		case actions.SUCCESS_FETCH_STATIC_CONTENT_BY_SLUG:
			return [action.response];
		default:
			return state;
	}
};

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_STATIC_CONTENTS:
		case actions.REQUEST_CREATE_STATIC_CONTENT:
		case actions.REQUEST_UPDATE_STATIC_CONTENT:
		case actions.REQUEST_DELETE_STATIC_CONTENT:
			return true;
		case actions.SUCCESS_UPDATE_STATIC_CONTENT:
		case actions.FAILURE_UPDATE_STATIC_CONTENT:
		case actions.SUCCESS_DELETE_STATIC_CONTENT:
		case actions.FAILURE_DELETE_STATIC_CONTENT:
		case actions.SUCCESS_CREATE_STATIC_CONTENT:
		case actions.FAILURE_CREATE_STATIC_CONTENT:
		case actions.SUCCESS_FETCH_STATIC_CONTENTS:
		case actions.FAILURE_FETCH_STATIC_CONTENTS:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	staticContents,
	staticContentIndividual,
	isFetching,
});

export const getStaticContents = state => (state.staticContents && state.staticContents) || [];

export const getIsFetching = state => state.isFetching;

export const getStaticContentById = (state, id) => (state.staticContentIndividual.length !== 0 && state.staticContentIndividual.find(i => i.id === id)) || '';

export const getStaticContentBySlug = (state, slug) => (state.staticContentIndividual.length !== 0 && state.staticContentIndividual.find(i => i.slug === slug)) || '';

export const getStaticContent = (state, slug) => (state.staticContents && state.staticContents.find(i => i.content_slug === slug)) || '';