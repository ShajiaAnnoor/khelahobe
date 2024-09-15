import { axiosGet } from "./axios";
import apiUrls from "./apiurls";

const fetchLiveScores = () => axiosGet(apiUrls.FETCH_LIVESCORES, {}).then(
	response => response, //different from other, check out the reducer for better understanding
	err => {
		return Promise.reject(() => ({
			message: err,
		}));
	}
);

const fetchLiveScoresTest = () => axiosGet(apiUrls.FETCH_LIVESCORES_TEST, {}).then(
	response => response, //different from other, check out the reducer for better understanding
	err => {
		return Promise.reject(() => ({
			message: err,
		}));
	}
);

const fetchLiveScoresRecentFinished = ({ skip, limit }) => axiosGet(apiUrls.FETCH_LIVESCORES_RECENT_FINISHED, {}, skip, limit).then(
	response => response, //different from other, check out the reducer for better understanding
	err => {
		return Promise.reject(() => ({
			message: err,
		}));
	}
);

const fetchBDMatch = () => axiosGet(apiUrls.FETCH_BD_MATCH, {}).then(
	response => processBDMatch(response.data),
	err => null
	//why is error null here? 
);

const fetchUpcoming = () => axiosGet(apiUrls.FETCH_UPCOMING, {}).then(
	response => response, //different from other, check out the reducer for better understanding
	err => {
		return Promise.reject(() => ({
			message: err,
		}));
	}
);

const fetchFininshed = () => axiosGet(apiUrls.FETCH_FINISHED, {}).then(
    response => response, //different from other, check out the reducer for better understanding
    err => {
        return Promise.reject(() => ({
            message: err,
        }));
    }
);

const fetchMatch = ({ slug }) => axiosGet(apiUrls.FETCH_MATCH, {}, slug).then(
    response => processMatch(response.data),
    err => Promise.reject(() => ({
        message: err,
    }))
);


const fetchInnings = ({ slug, inningsNo }) => axiosGet(apiUrls.FETCH_INNINGS, {}, slug, inningsNo).then(
    response => processInnings(response.data),
    err => Promise.reject(() => ({
        message: err,
    }))
);
const fetchEndOfOver = ({ slug }) => axiosGet(apiUrls.FETCH_END_OF_OVER, {}, slug).then(
    response => response.data,
    err => {
        return Promise.reject(() => ({
            message: err,
        }));
    }
);
const fetchLocalMatches = () => axiosGet(apiUrls.FETCH_LOCAL_MATCHES, {}).then(
    response => response, //different from other, check out the reducer for better understanding
    err => {
        return Promise.reject(() => ({
            message: err,
        }));
    }
);
const fetchInternationalMatches = () => axiosGet(apiUrls.FETCH_INTERNATIONAL_MATCHES, {}).then(
    response => response, //different from other, check out the reducer for better understanding
    err => {
        return Promise.reject(() => ({
            message: err,
        }));
    }
);

const fetchLive = () => axiosGet(apiUrls.FETCH_LIVE, {}).then(
    response => response, //different from other, check out the reducer for better understanding
    err => {
        return Promise.reject(() => ({
            message: err,
        }));
    }
);

const fetchMatchWithInnings = ({ slug }) => axiosGet(apiUrls.FETCH_MATCH_WITH_INNINGS, {}, slug).then(
    response => dfs(processMatch(response.data)),
    err => Promise.reject(() => ({
        message: err,
    }))
);

export const endPoints = {
	FETCH_LIVESCORES: fetchLiveScores,
	FETCH_LIVESCORES_TEST: fetchLiveScoresTest,
	FETCH_LIVESCORES_RECENT_FINISHED: fetchLiveScoresRecentFinished,
	FETCH_BD_MATCH: fetchBDMatch,
	FETCH_UPCOMING: fetchUpcoming,
	FETCH_FINISHED: fetchFininshed,
	FETCH_LIVE: fetchLive,
    FETCH_LOCAL_MATCHES: fetchLocalMatches,
    FETCH_INTERNATIONAL_MATCHES: fetchInternationalMatches,
	FETCH_MATCH: fetchMatch,
    FETCH_INNINGS: fetchInnings,
    FETCH_END_OF_OVER: fetchEndOfOver,
    FETCH_MATCH_WITH_INNINGS: fetchMatchWithInnings,
}