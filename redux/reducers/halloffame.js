import {
    combineReducers
} from 'redux';
import {
    actions
} from '../actions/HallOfFame';

const hallOfFame = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_HALL_OF_FAME:
            return action.response;
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_FETCH_HALL_OF_FAME:
            return true;
        case actions.SUCCESS_FETCH_HALL_OF_FAME:
        case actions.FAILURE_FETCH_HALL_OF_FAME:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    hallOfFame,
    isFetching,
});

export const getHallOfFame = state => state.hallOfFame || [];

export const getIsFetching = state => state.isFetching;