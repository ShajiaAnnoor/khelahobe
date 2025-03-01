import { actions } from "../action-types/livescore";
import { endPoints } from "../../src/API/livescore";

export const fetchLiveScores = () => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_LIVESCORES,
            actions.SUCCESS_FETCH_LIVESCORES,
            actions.FAILURE_FETCH_LIVESCORES,
        ],
        method: endPoints.FETCH_LIVESCORES,
        race: () => false,
    },
});

export const fetchBDMatch = () => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_BD_MATCH,
            actions.SUCCESS_FETCH_BD_MATCH,
            actions.FAILURE_FETCH_BD_MATCH,
        ],
        method: endPoints.FETCH_BD_MATCH,
        race: () => false,
    },
});

export const fetchFinished = () => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_FINISHED,
            actions.SUCCESS_FETCH_FINISHED,
            actions.FAILURE_FETCH_FINISHED,
        ],
        method: endPoints.FETCH_FINISHED,
        race: () => false,
    },
});

export const fetchLiveScoresTest = () => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_LIVESCORES_TEST,
            actions.SUCCESS_FETCH_LIVESCORES_TEST,
            actions.FAILURE_FETCH_LIVESCORES_TEST,
        ],
        method: endPoints.FETCH_LIVESCORES_TEST,
        race: () => false,
    },
});

export const fetchLiveScoresRecentFinished = (skip, limit) => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_LIVESCORES_RECENT_FINISHED,
            actions.SUCCESS_FETCH_LIVESCORES_RECENT_FINISHED,
            actions.FAILURE_FETCH_LIVESCORES_RECENT_FINISHED,
        ],
        method: endPoints.FETCH_LIVESCORES_RECENT_FINISHED,
        race: () => false,
        data: {
            skip,
            limit,
        },
    },
});

export const fetchUpcoming = () => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_UPCOMING,
            actions.SUCCESS_FETCH_UPCOMING,
            actions.FAILURE_FETCH_UPCOMING,
        ],
        method: endPoints.FETCH_UPCOMING,
        race: () => false,
    },
});

export const fetchLive = () => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_LIVE,
            actions.SUCCESS_FETCH_LIVE,
            actions.FAILURE_FETCH_LIVE,
        ],
        method: endPoints.FETCH_LIVE,
        race: () => false,
    },
});