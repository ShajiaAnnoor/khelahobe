import {
	combineReducers
} from 'redux';
import {
	actions
} from '../actions/Notice';

const notices = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_NOTICES:
			return action.response;
		default:
			return state;
	}
};

const notice = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_NOTICE_BY_ID:
			return [action.response];
		default:
			return state;
	}
};

const isFetchingIndividual = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_NOTICE_BY_ID:
			return true;
		case actions.SUCCESS_FETCH_NOTICE_BY_ID:
		case actions.FAILURE_FETCH_NOTICE_BY_ID:
			return false;
		default:
			return state;
	}
};

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_NOTICES:
		case actions.REQUEST_CREATE_NOTICE:
		case actions.REQUEST_UPDATE_NOTICE:
		case actions.REQUEST_DELETE_NOTICE:
			return true;
		case actions.SUCCESS_UPDATE_NOTICE:
		case actions.FAILURE_UPDATE_NOTICE:
		case actions.SUCCESS_DELETE_NOTICE:
		case actions.FAILURE_DELETE_NOTICE:
		case actions.SUCCESS_CREATE_NOTICE:
		case actions.FAILURE_CREATE_NOTICE:
		case actions.SUCCESS_FETCH_NOTICES:
		case actions.FAILURE_FETCH_NOTICES:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	notice,
	notices,
	isFetching,
	isFetchingIndividual
});

export const getNotices = state => state.notices || [];

export const getIsFetchingIndividual = state => state.isFetchingIndividual;

export const getIsFetching = state => state.isFetching;

export const getNotice = (state, id) => (state.notice.length !== 0 && state.notice.find(i => i.id === id)) || '';

export const getActiveNotice = state => (state.notice.length !== 0 && state.notice.find(i => i.active === true)) || '';