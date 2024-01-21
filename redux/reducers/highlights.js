import {
	combineReducers
} from 'redux';
import {
	actions
} from '../action-types/highlight';

const highlights = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_HIGHLIGHTS:
			return action.response;
		default:
			return state;
	}
};

const highlightsByTags = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_HIGHLIGHTS_BY_TAGS:
			return action.response;
		default:
			return state;
	}
};

const highlight = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_HIGHLIGHT_BY_SLUG:
		case actions.SUCCESS_FETCH_HIGHLIGHT_BY_ID:
			return [action.response];
		default:
			return state;
	}
};

const isFetchingIndividual = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_HIGHLIGHT_BY_ID:
		case actions.REQUEST_FETCH_HIGHLIGHT_BY_SLUG:
			// case actions.REQUEST_FETCH_HIGHLIGHT:
			return true;
		case actions.SUCCESS_FETCH_HIGHLIGHT_BY_ID:
		case actions.FAILURE_FETCH_HIGHLIGHT_BY_ID:
		case actions.SUCCESS_FETCH_HIGHLIGHT_BY_SLUG:
		case actions.FAILURE_FETCH_HIGHLIGHT_BY_SLUG:
			return false;
		default:
			return state;
	}
};

const count = (state = 0, action) => {
	switch (action.type) {
		case actions.SUCCESS_COUNT_HIGHLIGHTS:
			return action.response;
		default:
			return state;
	}
};

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_HIGHLIGHTS:
		case actions.REQUEST_FETCH_HIGHLIGHTS_BY_TAGS:
		case actions.REQUEST_CREATE_HIGHTLIGHT:
		case actions.REQUEST_UPDATE_HIGHTLIGHT:
		case actions.REQUEST_DELETE_HIGHTLIGHT:
		case actions.REQUEST_COUNT_HIGHLIGHTS:
			return true;
		case actions.SUCCESS_FETCH_HIGHLIGHTS:
		case actions.FAILURE_FETCH_HIGHLIGHTS:
		case actions.SUCCESS_FETCH_HIGHLIGHTS_BY_TAGS:
		case actions.FAILURE_FETCH_HIGHLIGHTS_BY_TAGS:
		case actions.SUCCESS_COUNT_HIGHLIGHTS:
		case actions.FAILURE_COUNT_HIGHLIGHTS:
		case actions.SUCCESS_DELETE_HIGHTLIGHT:
		case actions.FAILURE_DELETE_HIGHTLIGHT:
		case actions.SUCCESS_CREATE_HIGHTLIGHT:
		case actions.FAILURE_CREATE_HIGHTLIGHT:
		case actions.SUCCESS_UPDATE_HIGHTLIGHT:
		case actions.FAILURE_UPDATE_HIGHTLIGHT:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	highlights,
	highlight,
	count,
	highlightsByTags,
	isFetching,
	isFetchingIndividual
});

export const getHighlights = state => state.highlights || [];

export const getHighlightsByTags = state => state.highlightsByTags ? (state.highlightsByTags || []) : [];

export const getHighlight = (state, id) => (state.highlights.length !== 0 && state.highlights.find(i => i.id === id)) || '';

export const getIsFetching = state => state.isFetching;

export const getIsFetchingIndividual = state => state.isFetchingIndividual;

export const getCount = state => state.count;

export const getHighlightById = (state, id) => (state.highlight.length !== 0 && state.highlight.find(i => i.id === id)) || '';
