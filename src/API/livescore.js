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

export const endPoints = {
	FETCH_LIVESCORES: fetchLiveScores,
	FETCH_LIVESCORES_TEST: fetchLiveScoresTest,
	FETCH_LIVESCORES_RECENT_FINISHED: fetchLiveScoresRecentFinished,
	FETCH_BD_MATCH: fetchBDMatch,
	FETCH_UPCOMING: fetchUpcoming,
	FETCH_FINISHED: fetchFininshed,
}