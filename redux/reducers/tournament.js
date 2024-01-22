import {
	combineReducers
} from 'redux';
import {
	actions,
} from '../actions/Tournament';

const tournamentTeam = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_TOURNAMENT_TEAM:
			return action.payload;
		default:
			return state;
	}
}

const isFetchingTournamentTeam = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_TOURNAMENT_TEAM:
			return true;
		case actions.RECEIVE_TOURNAMENT_TEAM:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	tournamentTeam,
	isFetchingTournamentTeam,
});

export const getTournamentTeam = state => state.tournamentTeam;

export const TournamentTeamisFetching = state => state.isFetchingTournamentTeam;
