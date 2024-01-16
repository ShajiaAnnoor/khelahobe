import {
    getIsFetchingHighlights,
    // getIsFetchingHighlightsIndividual 
} from '../reducers';
import {
    endPoints
} from '../../Api';
import { actions } from "../action-types/highlight";

export const fetchHighlights = (skip, limit) => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_HIGHLIGHTS,
            actions.SUCCESS_FETCH_HIGHLIGHTS,
            actions.FAILURE_FETCH_HIGHLIGHTS
        ],
        method: endPoints.FETCH_HIGHLIGHTS,
        race: () => false,
        data: {
            skip,
            limit,
            // token: getToken(getState())
        }
    }
});

export const fetchHighlightById = id => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_HIGHLIGHT_BY_ID,
            actions.SUCCESS_FETCH_HIGHLIGHT_BY_ID,
            actions.FAILURE_FETCH_HIGHLIGHT_BY_ID,
        ],
        method: endPoints.FETCH_HIGHLIGHT_BY_ID,
        race: () => false,
        data: {
            id,
        },
    },
});

export const fetchHighlightsByTags = tag => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_HIGHLIGHTS_BY_TAGS,
            actions.SUCCESS_FETCH_HIGHLIGHTS_BY_TAGS,
            actions.FAILURE_FETCH_HIGHLIGHTS_BY_TAGS,
        ],
        method: endPoints.FETCH_HIGHLIGHTS_BY_TAGS,
        race: getIsFetchingHighlights,
        data: {
            tag,
        },
    },
});

export const fetchHighlightBySlug = slug => ({
    RSAA: {
        types: [
            actions.REQUEST_FETCH_HIGHLIGHT_BY_SLUG,
            actions.SUCCESS_FETCH_HIGHLIGHT_BY_SLUG,
            actions.FAILURE_FETCH_HIGHLIGHT_BY_SLUG,
        ],
        method: endPoints.FETCH_HIGHLIGHT_BY_SLUG,
        race: () => false,
        data: {
            slug,
        },
    },
});

export const countHighlights = () => (
    dispatch,
    getState
) => dispatch({
    RSAA: {
        types: [
            actions.REQUEST_COUNT_HIGHLIGHTS,
            actions.SUCCESS_COUNT_HIGHLIGHTS,
            actions.FAILURE_COUNT_HIGHLIGHTS,
        ],
        method: endPoints.COUNT_HIGHLIGHTS,
        race: () => false,
    },
});
