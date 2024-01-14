import {
    combineReducers
} from 'redux';

import blogs, * as fromBlogs from './blog';
//import commentary, * as fromCommentary from './commentary';
//import counter, * as fromCounter from './counter';
//import countries, * as fromCountries from './country';
//import hallOfFame, * as fromHallOfFame from './halloffame';
//import highlights, * as fromHighlights from './highlights';
import livescore, * as fromLiveScores from "./livescore" ;
//import news, * as fromNews from './news'; 
//import newsRequest, * as fromNewsRequest from './newsrequest';
//import notice, * as fromNotice from './notice';
//import onThisDay, * as fromOnThisDay from './onthisday';
//import player, * as fromPlayer from './player';
//import rank, * as fromRank from "./rank";
import scoreboard, * as fromScoreboard from "./livescoreboard";
//import staticContent, * as fromStaticContent from './staticcontent';
//import translation, * as fromTranslation from './translation';
//import user, * as fromUser from './user';

export default combineReducers({
    blogs,
//    commentary,
//    counter,
//    countries,
//    hallOfFame,
//    highlights,
    livescore,
//    news,
//    newsRequest,
//    notice,
//    onThisDay,
//    player,
//    rank,
    scoreboard,
//    staticContent,
//    translation,
//    user,
});

//Selectors will be written under this line

export const getAdmin = state => fromUser.getProfile(state.user).isadmin;

export const getAuth = state => (
    {
        login: getToken(state) !== '',
        admin: fromUser.getProfile(state.user).isadmin,
    }
);

export const getBestPlayerByMatch = (state, slug) => fromScoreboard.getBestPlayerByMatch(state.scoreboard, slug);

export const getBlog = (state, id) => fromBlogs.getBlog(state.blogs, id);

export const getBlogBySlug = (state, slug) => fromBlogs.getBlogBySlug(state.blogs, slug);

export const getBlogs = state => fromBlogs.getBlogs(state.blogs);

export const getCommentaryById = (state, id) => fromCommentary.getCommentaryById(state.commentary, id);

export const getCommentaries = (state, eventid) => fromCommentary.getCommentaries(state.commentary, eventid);

export const getCount = state => fromBlogs.getCount(state.blogs);

export const getCounterById = (state, id) => fromCounter.getCounter(state.counter, id);

export const getCounters = state => fromCounter.getCounters(state.counter);

export const getNoticeById = (state, id) => fromNotice.getNotice(state.notice, id);

export const getActiveNotice = state => fromNotice.getActiveNotice(state.notice);

export const getNotices = state => fromNotice.getNotices(state.notice);

export const getCountriesBasic = state => fromCountries.getBasic(state.countries);

export const getCurrentPlayerByMatch = (state, slug) => fromScoreboard.getCurrentPlayersByMatch(state.scoreboard, slug);

export const getEndOfOvers = (state, slug) => fromScoreboard.getEndOfOvers(state.scoreboard, slug);

export const getHallOfFame = state => fromHallOfFame.getHallOfFame(state.hallOfFame);

export const getHighlight = (state, id) => fromHighlights.getHighlight(state.highlights, id);

export const getHighlightById = (state, id) => fromHighlights.getHighlightById(state.highlights, id);

export const getHighlightBySlug = (state, slug) => fromHighlights.getHighlightBySlug(state.highlights, slug);

export const getHighlights = state => fromHighlights.getHighlights(state.highlights);

export const getHighlightsCount = state => fromHighlights.getCount(state.highlights);

export const getID = state => fromUser.getUserID(state.user);

export const getInningsEs = (state, slug) => fromScoreboard.getInningsEs(state.scoreboard, slug);

export const getIsLoggedIn = state => fromUser.getIsLoggedIn(state.user);

export const getIsFetchingBlogIndividual = state => fromBlogs.getIsFetchingIndividual(state.blogs);

export const getIsFetchingBlogs = state => fromBlogs.getIsFetching(state.blogs);

export const getIsFetchingCounterIndividual = state => fromCounter.getIsFetchingIndividual(state.counter);

export const getIsFetchingNoticeIndividual = state => fromNotice.getIsFetchingIndividual(state.notice);

export const getIsFetchingCounters = state => fromCounter.getIsFetching(state.counter);

export const getIsFetchingNotices = state => fromNotice.getIsFetching(state.notice);

export const getIsFetchingCommentary = state => fromCommentary.getIsFetching(state.commentary);

export const getIsFetchingCountriesBasic = state => fromCountries.getIsFetching(state.countries);

export const getIsFetchingEndOfOver = (state, slug) => fromScoreboard.getIsFetchingEndOfOver(state.scoreboard, slug);

export const getIsFetchingEndOfOvers = (state, slug) => fromScoreboard.getIsFetchingEndOfOvers(state.scoreboard, slug);

export const getIsFetchingHallOfFame = state => fromHallOfFame.getIsFetching(state.hallOfFame);

export const getIsFetchingHighlights = state => fromHighlights.getIsFetching(state.highlights);

export const getIsFetchingHighlightsIndividual = state => fromHighlights.getIsFetchingIndividual(state.highlights);

export const getIsFetchingInnings = (state, slug) => fromScoreboard.getIsFetchingInnings(state.scoreboard, slug);

export const getIsFetchingLiveScores = state => fromLiveScores.getIsFetchingLiveScores(state.livescores);

export const getIsFetchingMatch = (state, slug) => fromScoreboard.getIsFetchingMatch(state.scoreboard, slug);

export const getIsFetchingNews = state => fromNews.getIsFetching(state.news);

export const getIsFetchingNewsIndividual = state => fromNews.getIsFetchingIndividual(state.news);

export const getIsFetchingNewsRequest = state => fromNews.getIsFetching(state.newsRequest);

export const getIsFetchingNewsRequestIndividual = state => fromNews.getIsFetchingIndividual(state.newsRequest);

export const getIsFetchingOnThisDay = state => fromOnThisDay.getIsFetching(state.onThisDay);

export const getMatchDetails = (state, slug) => fromScoreboard.getMatchDetails(state.scoreboard, slug);

export const getNews = state => fromNews.getNews(state.news);

export const getNewsById = (state, id) => fromNews.getNewsById(state.news, id);

export const getNewsBySlug = (state, slug) => fromNews.getNewsBySlug(state.news, slug);

export const getNewsCount = state => fromNews.getCount(state.news);

export const getNewsRequests = state => fromNewsRequest.getNewsRequests(state.newsRequest);

export const getNewsRequestById = (state, id) => fromNewsRequest.getNewsRequestById(state.newsRequest, id);

export const getNewsRequestBySlug = (state, slug) => fromNewsRequest.getNewsRequestBySlug(state.newsRequest, slug);

export const getNewsRequestCount = state => fromNewsRequest.getCount(state.newsRequest);

export const getNotificationCommentary = state => fromCommentary.getNotiCommentary(state.commentary);

export const getOnThisDay = state => fromOnThisDay.getOnThisDayAll(state.onThisDay);

export const getOnThisDayById = (state, id) => fromOnThisDay.getOnThisDayById(state.onThisDay, id);

export const getOnThisDayBySlug = (state, slug) => fromOnThisDay.getOnThisDayBySlug(state.onThisDay, slug);

export const getPlayerProfileIsFetching = state => fromPlayer.getIsFetching(state.player);

export const getPlayerTableData = (state, slug) => fromPlayer.getPlayerTableData(state.player, slug);

export const getProfile = state => fromUser.getProfile(state.user);

export const getPartnerShipStats = (state, slug) => fromScoreboard.getPartnerShipStats(state.scoreboard, slug);

export const getRank = (state, group, type) => fromRank.getRank(state.rank, group, type);

export const getRankIsFetching = state => fromRank.getIsFetchingRank(state.rank);

export const getRunRate = (state, slug) => fromScoreboard.getRunRate(state.scoreboard, slug);

export const getRunsPerOver = (state, slug) => fromScoreboard.getRunsPerOver(state.scoreboard, slug);

export const getStaticContents = state => fromStaticContent.getStaticContents(state.staticContent);

export const getStaticContentById = (state, id) => fromStaticContent.getStaticContentById(state.staticContent, id);

export const getStaticContentBySlug = (state, slug) => fromStaticContent.getStaticContentBySlug(state.staticContent, slug);

export const getToken = state => fromUser.getToken(state.user);

export const getTranslationById = (state, id) => fromTranslation.getTranslationById(state.translation, id);

export const getTranslationCount = state => fromTranslation.getCount(state.translation);

export const getTranslations = state => fromTranslation.getTranslations(state.translation);

export const getUserName = state => fromUser.getUserName(state.user);

export const getWorms = (state, slug) => fromScoreboard.getWorms(state.scoreboard, slug);

export const getLiveScoresHome = state => fromLiveScores.getLiveScoresHome(state.livescore);

export const getLiveScoresRecentFinished = state => fromLiveScores.getLiveScoresRecentFinished(state.livescore);

export const getBDMatch = state => fromLiveScores.getBDMatch(state.livescore);

export const getMatch = (state, slug) => fromScoreboard.getMatch(state.scoreboard, slug);

export const getShortScore = (state, slug) => fromScoreboard.getShortScore(state.scoreboard, slug);

export const getTeamsScore = (state, slug) => fromScoreboard.getTeamsScore(state.scoreboard, slug);

export const getInningsIds = (state, slug) => fromScoreboard.getInningsIds(state.scoreboard, slug);
