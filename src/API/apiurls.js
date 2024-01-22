let backendUrl = "https://khelahobe.co/";
//let backendUrl = "http://192.168.1.11:9090/"
 
export default apiUrls = {
	FETCH_PLAYER_TABLE_DATA: (d) => backendUrl + `api/playerrecordslug/${d}`,
		FETCH_LIVESCORES: backendUrl + 'api/recentrunning/limitedmatch',
	FETCH_LIVESCORES_TEST: backendUrl + 'api/recentrunning/testmatch',
	FETCH_UPCOMING: backendUrl + 'api/matchlive/upcoming',
	FETCH_LIVESCORES_RECENT_FINISHED: (skip, limit) => backendUrl + `api/recentended/${skip}/${limit}`,

	FETCH_TEAM_RANKING: (sex, type) => backendUrl + `api/teamrank/${sex}/${type}`,
	FETCH_PLAYER_RANK: (sex, type, discipline) => backendUrl + `api/rank/${sex}/${type}/${discipline}`,

	FETCH_INNINGS: slug => backendUrl + `api/scoreboard/${slug}`,
	FETCH_MATCH: slug => backendUrl + `api/matchslug/${slug}`,
	FETCH_END_OF_OVER: slug => backendUrl + `api/endover/${slug}`,
	FETCH_BD_MATCH: backendUrl + 'api/bdmatch',

	LOGIN: backendUrl + `api/token`,
	REGISTER: backendUrl + 'api/user',
	FETCH_ID: backendUrl + 'api/user/info/getid',
	FETCH_PROFILE: (id) => backendUrl + `api/user/${id}`,

	CREATE_BLOG: backendUrl + `api/blog`,
	FETCH_BLOGS: (skip, limit) => backendUrl + `api/allblog/${skip}/${limit}`,
	UPDATE_BLOG: (id) => backendUrl + `api/blogupdate/${id}`,
	DELETE_BLOG: (id) => backendUrl + `api/blog/remove/${id}`,
	COUNT_BLOG: backendUrl + `api/blog/info/count`,

	CREATE_HIGHLIGHT: backendUrl + `api/youtube`,
	FETCH_HIGHLIGHTS: (skip, limit) => backendUrl + `api/videos/${skip}/${limit}`,
	FETCH_HIGHLIGHTS_BY_TAGS: backendUrl + `api/youtube/searchtag`,
	FETCH_HIGHLIGHT_BY_ID: (id) => backendUrl + `api/youtube/${id}`,
	UPDATE_HIGHLIGHT: (id) => backendUrl + `api/youtube/${id}`,
	DELETE_HIGHLIGHT: (id) => backendUrl + `api/youtube/remove/${id}`,
	COUNT_HIGHLIGHTS: backendUrl + `api/youtube/videos/count`,

	CREATE_NEWS: backendUrl + `api/news`,
	FETCH_NEWS: backendUrl + `api/news/info/all`,
	DELETE_NEWS: (id) => backendUrl + `api/news/remove/${id}`,
	UPDATE_NEWS: (id) => backendUrl + `api/news/update/${id}`,
	COUNT_NEWS: backendUrl + `api/news/count`,

	FETCH_BLOG_BY_ID: (id) => backendUrl + `api/blog/${id}`,
	FETCH_NEWS_BY_ID: (id) => backendUrl + `api/news/info/${id}`,
	FETCH_NEWS_REQUEST_BY_ID: (id) => backendUrl + `api/newsupdate/${id}`,
	FETCH_STATIC_CONTENT_BY_ID: (id) => backendUrl + `api/staticcontent/info/${id}`,
	FETCH_STATIC_CONTENT_BY_SLUG: (slug) => backendUrl + `api/staticcontent/getslug/${slug}`,

	CREATE_COMMENTARY: backendUrl + `api/commentary`,
	UPDATE_COMMENTARY: (id) => backendUrl + `api/commentary/update/${id}`,
	DELETE_COMMENTARY: (id) => backendUrl + `api/commentary/remove/${id}`,
	FETCH_COMMENTARY_BY_ID: (id) => backendUrl + `api/commentary/info/${id}`,
	FETCH_COMMENTARIES: (skip, limit) => backendUrl + `api/allcommentary/${skip}/${limit}`,

	CREATE_STATIC_CONTENT: backendUrl + `api/admin/staticcontent`,
	FETCH_STATIC_CONTENTS: backendUrl + `api/staticcontent/info/all`,
	UPDATE_STATIC_CONTENT: (id) => backendUrl + `api/staticcontent/update/${id}`,
	DELETE_STATIC_CONTENT: (id) => backendUrl + `api/staticcontent/remove/${id}`,

	CREATE_NEWS_REQUEST: backendUrl + `api/newsupdate`,
	UPDATE_NEWS_REQUEST: (id) => backendUrl + `api/newsupdate/update/${id}`,
	DELETE_NEWS_REQUEST: (id) => backendUrl + `api/newsupdate/remove/${id}`,
	FETCH_NEWS_REQUESTS: (skip, limit) => backendUrl + `api/allnewsupdate/${skip}/${limit}`,
	COUNT_NEWS_REQUESTS: backendUrl + `api/newsupdate/info/count`,

	CREATE_ON_THIS_DAY: backendUrl + `api/onthisday`,
	UPDATE_ON_THIS_DAY: (id) => backendUrl + `api/onthisday/update/${id}`,
	DELETE_ON_THIS_DAY: (id) => backendUrl + `api/onthisday/remove/${id}`,
	FETCH_ALL_ON_THIS_DAY: backendUrl + `api/onthisday/info/all`,
	FETCH_ON_THIS_DAY: onthisday => backendUrl + `api/onthisday/date/${onthisday}`,
	FETCH_ON_THIS_DAY_BY_ID: id => backendUrl + `api/onthisday/info/${id}`,
	FETCH_ON_THIS_DAY_BY_SLUG: slug => backendUrl + `api/onthisday/search/${slug}`,

	FORGET_PASSWORD: backendUrl + `api/user/resetemail`,
	RESET_PASSWORD: id => backendUrl + `api/user/resetpassword/${id}`,

	CREATE_TRANSLATION: backendUrl + `api/translation`,
	DELETE_TRANSLATION: (id) => backendUrl + `api/translation/remove/${id}`,
	UPDATE_TRANSLATION: (id) => backendUrl + `api/translation/update/${id}`,
	FETCH_TRANSLATION_BY_ID: (id) => backendUrl + `api/translation/info/${id}`,
	FETCH_TRANSLATION: (skip, limit) => backendUrl + `api/gettranslation/${skip}/${limit}`,
	COUNT_TRANSLATION: backendUrl + `api/translation/count`,

	FETCH_BLOG_BY_SLUG: (slug) => backendUrl + `api/blogslug/${slug}`,
	FETCH_NEWS_BY_SLUG: (slug) => backendUrl + `api/news/search/${slug}`,
	FETCH_NEWS_REQUEST_BY_SLUG: (slug) => backendUrl + `api/newsupdate/${slug}`,
	FETCH_HIGHLIGHT_BY_SLUG: (slug) => backendUrl + `api/youtube/info/all/${slug}`,

	CREATE_COUNTER: backendUrl + `api/counter`,
	DELETE_COUNTER: (id) => backendUrl + `api/counter/remove/${id}`,
	UPDATE_COUNTER: (id) => backendUrl + `api/counterupdate/${id}`,
	FETCH_COUNTER: (id) => backendUrl + `api/counter/${id}`,
	FETCH_COUNTERS: (skip, limit) => backendUrl + `api/allcounter/${skip}/${limit}`,

	CREATE_NOTICE: backendUrl + `api/notice`,
	DELETE_NOTICE: (id) => backendUrl + `api/notice/remove/${id}`,
	UPDATE_NOTICE: (id) => backendUrl + `api/noticeupdate/${id}`,
	FETCH_NOTICE: (id) => backendUrl + `api/notice/${id}`,
	FETCH_NOTICES: (skip, limit) => backendUrl + `api/allnotice/${skip}/${limit}`,
};
