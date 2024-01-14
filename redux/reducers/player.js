import {
    combineReducers
} from 'redux';
import {
    actions
} from '../actions/Player';

const playerProfile = (state = {}, action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_PLAYER_TABLE:
            return {
                ...state,
                [action.slug]: {
                    ...action.response,
                }
            };
        case actions.SUCCESS_FETCH_PLAYER_PROFILE:
            return {
                ...state,
                [action.slug]: {
                    ...action.response,
                }
            };
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_FETCH_PLAYER_PROFILE:
        case actions.REQUEST_FETCH_PLAYER_TABLE:
            return true;
        case actions.SUCCESS_FETCH_PLAYER_PROFILE:
        case actions.SUCCESS_FETCH_PLAYER_TABLE:
        case actions.FAILURE_FETCH_PLAYER_PROFILE:
        case actions.FAILURE_FETCH_PLAYER_TABLE:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    playerProfile,
    isFetching,
});

export const getPlayerTableData = (state, slug) => state.playerProfile[slug];

export const getIsFetching = state => state.isFetching;