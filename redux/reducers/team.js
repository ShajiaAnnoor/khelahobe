import {
	combineReducers
} from 'redux';
import {
	actions,
} from '../actions/Team';

const intro = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_INTRO:
			return action.payload;
		default:
			return state;
	}
}

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_INTRO:
			return true;
		case actions.RECEIVE_INTRO:
			return false;
		default:
			return state;
	}
};

const results = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_RESULTS:
			return action.payload;
		default:
			return state;
	}
}

const isFetchingResults = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_RESULTS:
			return true;
		case actions.RECEIVE_RESULTS:
			return false;
		default:
			return state;
	}
}

const schedule = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_SCHEDULE:
			return action.payload;
		default:
			return state;
	}
}

const isFetchingSchedule = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_SCHEDULE:
			return true;
		case actions.RECEIVE_SCHEDULE:
			return false;
		default:
			return state;
	}
}

const table = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_TABLE:
			return action.payload;
		default:
			return state;
	}
}

const isFetchingTable = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_TABLE:
			return true;
		case actions.RECEIVE_TABLE:
			return false;
		default:
			return state;
	}
}

const odi = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_ODI_SQUAD:
			return action.payload;
		default:
			return state;
	}
}

const isFetchingODI = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_ODI_SQUAD:
			return true;
		case actions.RECEIVE_ODI_SQUAD:
			return false;
		default:
			return state;
	}
}

const t20 = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_T20_SQUAD:
			return action.payload;
		default:
			return state;
	}
}

const isFetchingT20 = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_T20_SQUAD:
			return true;
		case actions.RECEIVE_T20_SQUAD:
			return false;
		default:
			return state;
	}
}

const test = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_TEST_SQUAD:
			return action.payload;
		default:
			return state;
	}
}

const isFetchingTest = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_TEST_SQUAD:
			return true;
		case actions.RECEIVE_TEST_SQUAD:
			return false;
		default:
			return state;
	}
}

const playerData = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_PLAYER_BASIC:
			return action.payload;
		default:
			return state;
	}
}

const isFetchingPlayerData = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_PLAYER_BASIC:
			return true;
		case actions.RECEIVE_PLAYER_BASIC:
			return false;
		default:
			return state;
	}
};

const highestScorer = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_HIGHEST_SCORER:
			return action.payload;
		default:
			return state;
	}
}

const isFetchingHighestScorer = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_HIGHEST_SCORER:
			return true;
		case actions.RECEIVE_HIGHEST_SCORER:
			return false;
		default:
			return state;
	}
};

const highestWicketTaker = (state = [], action) => {
	switch (action.type) {
		case actions.RECEIVE_HIGHEST_WICKET_TAKER:
			return action.payload;
		default:
			return state;
	}
}

const isFetchingHighestWicketTaker = (state = false, action) => {
	switch (action.type) {
		case actions.REQUEST_WICKET_TAKER:
			return true;
		case actions.RECEIVE_WICKET_TAKER:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	intro,
	isFetching,
	results,
	isFetchingResults,
	schedule,
	isFetchingSchedule,
	table,
	isFetchingTable,
	odi,
	isFetchingODI,
	t20,
	isFetchingT20,
	test,
	isFetchingTest,
	playerData,
	isFetchingPlayerData,
	highestScorer,
	isFetchingHighestScorer,
	highestWicketTaker,
	isFetchingHighestWicketTaker,
});

export const getIntro = state => state.intro;
export const getIsFetching = state => state.isFetching;
export const getTeamResults = state => state.results;
export const getIsFetchingResults = state => state.isFetchingResults;
export const getTeamSchedule = state => state.schedule;
export const getIsFetchingSchedule = state => state.isFetchingSchedule;
export const getTeamTable = state => state.table;
export const getIsFetchingTable = state => state.isFetchingTable;
export const getODISquad = state => state.odi;
export const getODISquadIsFetching = state => state.isFetchingODI;
export const getT20Squad = state => state.t20;
export const getT20SquadIsFetching = state => state.isFetchingT20;
export const getTestSquad = state => state.test;
export const getTestSquadIsFetching = state => state.isFetchingTest;
export const getPlayerData = state => state.playerData;
export const getIsFetchingPlayerData = state => state.isFetchingPlayerData;
export const getHighestScorer = state => state.highestScorer;
export const getIsFetchingHighestScorer = state => state.getIsFetchingHighestScorer;
export const getHighestWicketTaker = state => state.highestWicketTaker;
export const getIsFetchingHighestWicketTaker = state => state.isFetchingHighestWicketTaker;
