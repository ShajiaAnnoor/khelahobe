import {
    combineReducers
} from 'redux';
import {
    actions
} from '../../actions/PointsTable';

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_BPL_POINTS_TABLE:
			return true;
		case actions.SUCCESS_BPL_POINTS_TABLE:
			return false;
		default:
			return state;
	}
};

const pointstable = (state = {}, action) => {
	switch (action.type) {
		case actions.SUCCESS_BPL_POINTS_TABLE:
			return {
				...action.response,
			};
		default:
			return state;
	}
};

export default combineReducers({
	pointstable,
	isFetching,
});

export const getIsFetching = state => state.isFetching;

export const getPointsTable = state => state.pointstable;