import {
    combineReducers
} from 'redux';

import {
    actions
} from '../actions/Commentary';

const commentary = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_COMMENTARY_BY_ID:
			return action.response;
		case actions.SUCCESS_FETCH_COMMENTARIES:
			if (action.response === null) return state;
			return [
				...state.slice(0, action.skip),
				...action.response
			];
		default:
			return state;
	}
};

const notification = (state = {
	severity: '',
	message: ''
}, action) => {
	switch (action.type) {
		case actions.REQUEST_CREATE_COMMENTARY:
		case actions.SUCCESS_FETCH_COMMENTARY_BY_ID:
		case actions.SUCCESS_FETCH_COMMENTARIES:
			return {
				severity: '',
				message: ''
			};
		case actions.SUCCESS_CREATE_COMMENTARY:
			if (action.response.status === 200) {
				return {
					severity: 'success',
					message: 'Commentary created successfully'
				}
			}
			return {
				severity: 'error',
				message: 'Something bad happened. Try again later'
			}
		case actions.FAILURE_CREATE_COMMENTARY:
			return !action.response.id && {
				severity: 'error',
				message: 'Something bad happened. Try again later'
			};
		case actions.REQUEST_UPDATE_COMMENTARY:
			return state;
		case actions.SUCCESS_UPDATE_COMMENTARY:
			if (action.response.status === 200) {
				return {
					severity: 'success',
					message: 'Commentary updated successfully'
				}
			}
			return {
				severity: 'error',
				message: 'Something bad happened. Try again later'
			}
		case actions.FAILURE_UPDATE_COMMENTARY:
			return {
				severity: 'error',
				message: 'Something bad happened. Try again later'
			}
		case actions.REQUEST_DELETE_COMMENTARY:
			return state;
		case actions.SUCCESS_DELETE_COMMENTARY:
			if (action.response.status === 200) {
				return {
					severity: 'info',
					message: 'Commentary deleted successfully'
				}
			}
			return {
				severity: 'error',
				message: 'Something bad happened. Try again later'
			}
		case actions.FAILURE_DELETE_COMMENTARY:
			return {
				severity: 'error',
				message: 'Something bad happened. Try again later'
			}
		default:
			return state;
	}
}

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_COMMENTARY_BY_ID:
		case actions.REQUEST_FETCH_COMMENTARIES:
		case actions.REQUEST_CREATE_COMMENTARY:
		case actions.REQUEST_UPDATE_COMMENTARY:
		case actions.REQUEST_DELETE_COMMENTARY:
			return true;
		case actions.SUCCESS_UPDATE_COMMENTARY:
		case actions.FAILURE_UPDATE_COMMENTARY:
		case actions.SUCCESS_DELETE_COMMENTARY:
		case actions.FAILURE_DELETE_COMMENTARY:
		case actions.SUCCESS_CREATE_COMMENTARY:
		case actions.FAILURE_CREATE_COMMENTARY:
		case actions.SUCCESS_FETCH_COMMENTARY_BY_ID:
		case actions.SUCCESS_FETCH_COMMENTARIES:
		case actions.FAILURE_FETCH_COMMENTARY_BY_ID:
		case actions.FAILURE_FETCH_COMMENTARIES:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	commentary,
	isFetching,
	notification
});

export const getCommentaries = (state, eventid) => (state.commentary && state.commentary[0] && (state.commentary[0].eventid === parseInt(eventid) ? state.commentary : [])) || [];

export const getIsFetching = state => state.isFetching;

export const getNotiCommentary = state => state.notification;

export const getCommentaryById = (state, id) => (state.commentary && state.commentary.find(i => i.id === id)) || '';