import {
    combineReducers
} from 'redux';
import {
    actions
} from '../actions/Rank';

const rank = (state = {
    team: {},
    batting: {},
    bowling: {},
    'all-rounder': {},
}, action) => {
    switch (action.type) {
        case actions.SUCCESS_TEAM_RANK:
            return {
                ...state,
                team: {
                    ...state.team,
                    [action.rtype]: [
                        ...action.response,
                    ],
                },
            };
        case actions.SUCCESS_PLAYER_RANK:
            return {
                ...state,
                [action.dtype]: {
                    ...state[action.dtype],
                    [action.rtype]: [
                        ...action.response,
                    ],
                },
            };
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_TEAM_RANK:
        case actions.REQUEST_PLAYER_RANK:
            return true;
        case actions.SUCCESS_TEAM_RANK:
        case actions.FAILURE_TEAM_RANK:
        case actions.SUCCESS_PLAYER_RANK:
        case actions.FAILURE_PLAYER_RANK:
            return false;
        default:
            return state;
    }
};


export default combineReducers({
    rank,
    isFetching,
});

export const getRank = (state, group, type) => state.rank[group][type];

export const getIsFetchingRank = state => state.isFetching;
