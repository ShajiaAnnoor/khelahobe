import { actions } from "../action-types/liveScoreboard";
import { endPoints } from "../../src/API/livescoreboard";
import { getInningsIds } from "../reducers";

export const fetchMatch = slug => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_MATCH,
            actions.SUCCESS_FETCH_MATCH,
            actions.FAILURE_FETCH_MATCH,
        ],
        method: endPoints.FETCH_MATCH,
        race: () => false,
        data: {
            slug,
        },
    },
});

export const fetchInnings = slug => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_INNINGS,
            actions.SUCCESS_FETCH_INNINGS,
            actions.FAILURE_FETCH_INNINGS,
        ],
        method: endPoints.FETCH_INNINGS,
        race: () => false,
        data: {
            slug,
        },
    },
});

export const fetchEndOfOver = slug => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_ENDOFOVER,
            actions.SUCCESS_FETCH_ENDOFOVER,
            actions.FAILURE_FETCH_ENDOFOVER,
        ],
        method: endPoints.FETCH_END_OF_OVER,
        race: () => false,
        data: {
            slug,
        },
    },
});

export const fetchEndOfOvers = slug => async (dispatch, getState) => {
    if (getIsFetchingMatch(getState(), slug)) {
        return Promise.resolve();
    }

    const inningsIds = getInningsIds(getState(), slug);

    if (!Array.isArray(inningsIds) || inningsIds.length === 0) return Promise.reject(
        () => ({
            message: "empty innings info",
        })
    );

    await Promise.all(inningsIds.map(id => dispatch(fetchEndOfOver(id))));
};

export const fetchMatchWithInnings = slug => async (dispatch, getState) => {
    // if (getIsFetchingMatch(getState(), slug)) {
    //     return Promise.resolve();
    // }

    await dispatch(fetchMatch(slug));

    const inningsIds = getInningsIds(getState(), slug);

    console.log("There should be some innings ids here");
    console.log(inningsIds.length);
    if (!Array.isArray(inningsIds) || inningsIds.length === 0) return Promise.reject(
        () => ({
            message: "empty innings info",
        })
    );

    await Promise.all(inningsIds.map(id => dispatch(fetchInnings(id))));
};