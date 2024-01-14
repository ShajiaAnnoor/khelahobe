import {
    combineReducers
} from 'redux';
import {
    actions
} from '../../actions/Bpl';

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_BPL_TEAM_LIST:
            return true;
        case actions.SUCCESS_BPL_TEAM_LIST:
            return false;
        default:
            return state;
    }
};

const teamList = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_BPL_TEAM_LIST:
            return [
                ...action.response,
            ];
        default:
            return state;
    }
};

export default combineReducers({
    teamList,
    isFetching,
});

export const getIsFetching = state => state.isFetching;

export const getTeamList = state => state.teamList;