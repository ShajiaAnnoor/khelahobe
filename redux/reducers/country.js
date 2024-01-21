import {
    combineReducers
} from 'redux';
import {
    actions
} from '../actions/Countries';

const basic = (state = [], action) => {
	switch (action.type) {
		case actions.SUCCESS_FETCH_COUNTRIES_BASIC:
			return [
				...action.response,
			];
		default:
			return state;
	}
};

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_COUNTRIES_BASIC:
			return true;
		case actions.SUCCESS_FETCH_COUNTRIES_BASIC:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	basic,
	isFetching,
});

export const getBasic = state => state.basic;

export const getIsFetching = state => state.isFetching;