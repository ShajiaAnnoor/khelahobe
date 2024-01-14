import { axiosGet } from "./axios";
import apiUrls from "./apiurls";
import { dfs, processMatch, processInnings } from "./utils";

const fetchMatch = ({ slug }) => axiosGet(apiUrls.FETCH_MATCH, {}, slug).then(
    response => dfs(processMatch(response.data)),
    err => Promise.reject(() => ({
        message: err,
    }))
);

const fetchInnings = ({ slug, inningsNo }) => axiosGet(apiUrls.FETCH_INNINGS, {}, slug, inningsNo).then(
    response => dfs(processInnings(response.data)),
    err => Promise.reject(() => ({
        message: err,
    }))
);

const fetchEndOfOver = ({ slug }) => axiosGet(apiUrls.FETCH_END_OF_OVER, {}, slug).then(
    response => console.log(response) || response.data,
    err => {
        return Promise.reject(() => ({
            message: err,
        }));
    }
);

export const endPoints = {
    FETCH_MATCH: fetchMatch,
    FETCH_INNINGS: fetchInnings,
    FETCH_END_OF_OVER: fetchEndOfOver,
}