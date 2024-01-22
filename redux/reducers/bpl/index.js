import {
	combineReducers
} from 'redux';
import pointstable, * as fromPointStable from './PointsTable';
import teamList, * as fromTeamList from './TeamList';

export default combineReducers({
	teamList,
	pointstable,
});

export const getBPLTeamList = state => fromTeamList.getTeamList(state.teamList);

export const getIsFetchingPointsTable = state => fromPointStable.getIsFetching(state.pointstable);

export const getIsFetchingTeamList = state => fromTeamList.getIsFetching(state.teamList);

export const getPointsTable = state => fromPointStable.getPointsTable(state.pointstable);