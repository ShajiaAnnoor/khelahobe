import { axiosGet, axiosPost } from "./axios";
import apiUrls from "./apiurls";

const processHighlights = ({
	all_videos
}) => all_videos;

const fetchHighlights = ({
	skip, limit
}) => axiosGet(apiUrls.FETCH_HIGHLIGHTS, {}, skip, limit).then(
	response => processHighlights(response.data),
	err => {
		return Promise.reject(() => ({
			message: err,
		}))
	}
);

const fetchHighlightById = ({ id }) => axiosGet(apiUrls.FETCH_HIGHLIGHT_BY_ID, {}, id).then(
	response => processHighlightById(response.data),
	err => {
		return Promise.reject(() => ({
			message: err,
		}));
	}
);

const fetchHighlightBySlug = ({ slug }) => axiosGet(apiUrls.FETCH_HIGHLIGHT_BY_SLUG, {}, slug).then(
	response => processHighlightBySlug(response.data),
	err => {
		return Promise.reject(() => ({
			message: err,
		}));
	}
);

const countHighlights = () => axiosGet(apiUrls.COUNT_HIGHLIGHTS, {}).then(
	response => processCountHighlights(response.data),
	err => {
		return Promise.reject(() => ({
			message: err,
		}));
	}
);

export const endPoints = {
//    CREATE_HIGHLIGHT: createHighlight,
	FETCH_HIGHLIGHTS: fetchHighlights,
	FETCH_HIGHLIGHT_BY_ID: fetchHighlightById,
	FETCH_HIGHLIGHT_BY_SLUG: fetchHighlightBySlug,
//    FETCH_HIGHLIGHTS_BY_TAGS: fetchHighlightsByTags,
//    UPDATE_HIGHLIGHT: updateHighlight,
//    DELETE_HIGHLIGHT: deleteHighlight,
	COUNT_HIGHLIGHTS: countHighlights,
}