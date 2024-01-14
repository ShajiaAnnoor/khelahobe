import { combineReducers } from "redux";
import { actions } from "../action-types/livescore";

const liveScores = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_LIVESCORES:
            return action.response.data;
        default:
            return state;
    }
};

const bdMatch = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_BD_MATCH:
            return action.response;
        default:
            return state;
    }
};

const liveScoresTest = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_LIVESCORES_TEST:
            return action.response.data;
        default:
            return state;
    }
};

const liveScoresRecentFinished = (state = [], action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_LIVESCORES_RECENT_FINISHED:
            return action.response.data;
        default:
            return state;
    }
};

const isFetchingLivescores = (state = false, action) => {
    switch (action.type) {
        case actions.REQUEST_FETCH_LIVESCORES:
        case actions.REQUEST_FETCH_BD_MATCH:
        case actions.REQUEST_FETCH_LIVESCORES_TEST:
        case actions.REQUEST_FETCH_LIVESCORES_RECENT_FINISHED:
            return true;
        case actions.SUCCESS_FETCH_LIVESCORES:
        case actions.SUCCESS_FETCH_BD_MATCH:
        case actions.SUCCESS_FETCH_LIVESCORES_TEST:
        case actions.SUCCESS_FETCH_LIVESCORES_RECENT_FINISHED:
        case actions.FAILURE_FETCH_LIVESCORES:
        case actions.FAILURE_FETCH_BD_MATCH:
        case actions.FAILURE_FETCH_LIVESCORES_TEST:
        case actions.FAILURE_FETCH_LIVESCORES_RECENT_FINISHED:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    liveScores,
    bdMatch,
    liveScoresTest,
    liveScoresRecentFinished,
    isFetchingLivescores,
})

export const getLiveScoresHome = state => {
    let scores = (
        (
            state.liveScoresTest
            &&
            state.liveScores
        )
        &&
        state.liveScores
            .concat(
                state.liveScoresTest
            )
    )

        ||
        (
            state.liveScores
            ||
            []
        );

    return scores.filter((l, index) => index < 5).map(l => l)
};

export const getLiveScoresRecentFinished = state => state.liveScoresRecentFinished || [];

export const getBDMatch = state => state.bdMatch || '';
