import {
    combineReducers
} from 'redux';

import {
    actions
} from '../action-types/liveScoreboard';
import { dfs, englishDFS } from '../../src/API/utils';

//to-do: give the basic structure for initial state as default value of state.

const endOfOver = (state = {}, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_ENDOFOVER:
			return {
				...state,
				[action.slug]: {
					...state[action.slug],
					isFetching: true,
				},
			};
		case actions.FAILURE_FETCH_ENDOFOVER:
			return {
				...state,
				[action.slug]: {
					...state[action.slug],
					isFetching: false,
				},
			};
		case actions.SUCCESS_FETCH_ENDOFOVER:
			return {
				...state,
				[action.slug]: {
					...state[action.slug],
					...action.response,
					isFetching: false,
				},
			};
		default:
			return state;
	}
};

const innings = (state = {}, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_INNINGS:
			return {
				...state,
				[action.slug]: {
					...state[action.slug],
					isFetching: true,
				},
			};
		case actions.FAILURE_FETCH_INNINGS:
			return {
				...state,
				[action.slug]: {
					...state[action.slug],
					isFetching: false,
				},
			};
		case actions.SUCCESS_FETCH_INNINGS:
			return {
				...state,
				[action.slug]: {
					...state[action.slug],
					...action.response,
					isFetching: false,
				},
			};
		default:
			return state;
	}
};

const match = (state = {}, action) => {
	switch (action.type) {
		case actions.REQUEST_FETCH_MATCH:
			return {
				...state,
				[action.slug]: {
					...state[action.slug],
					isFetching: true,
				},
			};
		case actions.FAILURE_FETCH_MATCH:
			return {
				...state,
				[action.slug]: {
					...state[action.slug],
					isFetching: false,
				},
			};
		case actions.SUCCESS_FETCH_MATCH:
			return {
				...state,
				[action.slug]: {
					...state[action.slug],
					...action.response,
					isFetching: false,
				},
			};
		default:
			return state;
	}
};

export default combineReducers({
	endOfOver,
	innings,
	match,
});

export const getBestPlayerByInnings = (state, slug, id) => ({
	runs: state.innings[id] && state.innings[id].inningstotal,
	name: state.innings[id] && state.innings[id].name,
	over: state.innings[id] && state.innings[id].over,
	wickets: state.innings[id] && state.innings[id].out,
	batsman: (state.innings[id] &&
		state.innings[id].bestbatsman &&
		state.innings[id].bestbatsman.map(({
			balls,
			name,
			runs,
			notout,
		}) => ({
			balls,
			name: name + ((notout && '*') || ''),
			runs,
		}))) || [],
	bowler: (state.innings[id] &&
		state.innings[id].bestbowler &&
		state.innings[id].bestbowler.map(({
			over,
			name,
			runs,
			wickets,
		}) => ({
			over,
			name,
			runs,
			wickets,
		}))) || [],
});

export const getBestPlayerByMatch = (state, slug) =>
	state.match[slug] && state.match[slug].scoreboards &&
	state.match[slug].scoreboards.map(i => getBestPlayerByInnings(state, slug, i));

export const getCurrentPlayerByInnings = (state, slug, id) => ({
	runs: state.innings[id] && state.innings[id].inningstotal,
	name: state.innings[id] && state.innings[id].name,
	over: state.innings[id] && state.innings[id].over,
	wickets: state.innings[id] && state.innings[id].out,
	batsman: (state.innings[id] &&
		state.innings[id].currentbatsman &&
		state.innings[id].currentbatsman.map(({
			balls,
			name,
			runs,
		}) => ({
			balls,
			name,
			runs,
		}))) || [],
	bowler: (state.innings[id] &&
		state.innings[id].currentbowler &&
		state.innings[id].currentbowler.map(({
			over,
			name,
			runs,
			wickets,
		}) => ({
			over,
			name,
			runs,
			wickets,
		}))) || [],
});

export const getTeamNamesFromMatch = (state, slug) => {
    let team1 = state.match[slug] && state.match[slug].teams[0].name;
    let team2 = state.match[slug] && state.match[slug].teams[1].name;
    let teams = [
        team1,
        team2
    ];

    return teams;
}

export const getCurrentPlayersByMatch = (state, slug) =>
	state.match[slug] && state.match[slug].scoreboards &&
	state.match[slug].scoreboards.map(i => getCurrentPlayerByInnings(state, slug, i));

export const getEndOfOver = (state, slug) => state.endOfOver[slug] && state.endOfOver[slug].endofover;

export const getEndOfOvers = (state, slug) => state.match[slug] && state.match[slug].scoreboards && getInningsIds(state, slug).map(id => getEndOfOver(state, id));

export const getMatch = (state, slug) => state.match[slug] && state.match[slug].matchType && ({
	...state.match[slug],
	manOfTheMatch: {
		name: state.match[slug].manOfTheMatch,
		country: state.match[slug].teams && state.match[slug].teams.reduce((prev, cur) => prev || cur.players.indexOf(state.match[slug].manOfTheMatch) === -1 ? '' : cur.name),
	},
	matchStatus: state.match[slug].matchStatus || '',
	matchType: state.match[slug].matchType || '',
	result: state.match[slug].result || '',
	scoreboards: state.match[slug].scoreboards || '',
	series: state.match[slug].series || '',
	teams: state.match[slug].teams && state.match[slug].teams || [],
});

export const getMatchDetails = (state, slug) => ({
	days: (state.match[slug] && state.match[slug].days) || '',
	matchStatus: (state.match[slug] && state.match[slug].matchStatus) || '',
	matchState: (state.match[slug] && state.match[slug].matchState) || '',
	matchType: (state.match[slug] && state.match[slug].matchType) || '',
	matchnumber: (state.match[slug] && state.match[slug].matchnumber) || '',
	playerOfTheMatch: (state.match[slug] && state.match[slug].manOfTheMatch) || '',
	reserve: (state.match[slug] && state.match[slug].reserve) || '',
	result: (state.match[slug] && state.match[slug].result) || '',
	season: (state.match[slug] && state.match[slug].season) || '',
	series: (state.match[slug] && state.match[slug].series) || '',
	stadium: (state.match[slug] && state.match[slug].stadium) || '',
	toss: (state.match[slug] && state.match[slug].toss) || '',
	tvUmpires: (state.match[slug] && state.match[slug].tvUmpires) || '',
	umpires: (state.match[slug] && state.match[slug].umpires) || '',
});

//get-extras should be separate selector
export const getInnings = (state, slug) => (state.innings && state.innings[slug] && state.innings[slug].extras && {
    ...state.innings[slug],
    extras: `${state.innings[slug].extras.total}  (বাই: ${state.innings[slug].extras.b}, লেগ বাই: ${state.innings[slug].extras.lb}, ওয়াইড: ${state.innings[slug].extras.w}, নো বল: ${state.innings[slug].extras.nb})`,
}) || {};

export const getInningsEs = (state, slug) => state.match[slug].scoreboards && state.match[slug].scoreboards.map(id => getInnings(state, id));

export const getInningsIds = (state, slug) => (state.match && state.match[slug] && state.match[slug].scoreboards) || [];

export const getIsFetchingEndOfOver = (state, slug) => false || (state.endOfOver[slug] && state.endOfOver[slug].isFetching);

export const getIsFetchingEndOfOvers = (state, slug) => false || getInningsIds(state, slug).map(id => getIsFetchingEndOfOver(state, id));

export const getIsFetchingInnings = (state, slug) => false || (state.innings[slug] && state.innings[slug].isFetching);

export const getIsFetchingMatch = (state, slug) => false || (state.match[slug] && state.match[slug].isFetching);

export const getPartnerShipStats = (state, slug) => {
	const inningsIds = getInningsIds(state, slug);
	if (!Array.isArray(inningsIds)) {
		return [];
	}

	return inningsIds.map(i => {
		const data = englishDFS(getInnings(state, i));

		return {
			inningsName: data.name || '',
			partnerships: data.partnerships || [],
		}
	}).filter(i => i.inningsName !== '');
};

export const getRunRate = (state, slug) => {
	const [first, last] = getEndOfOvers(state, slug);
	const [team1, team2] = getTeamNames(state, slug);


	if (!Array.isArray(first) && !Array.isArray(last)) return [];

	let worms = [];
	if (Array.isArray(first)) {
		let tmp = [];
		for (let i = 0; i < first.length; i++) {
			tmp.push({
				over: i + 1,
				run: first[i].runrate || 0,
				wicket: first[i].wickets || 0,
			});
		}
		worms.push(tmp);
	}


	if (Array.isArray(last)) {
		let tmp = [];
		for (let i = 0; i < last.length; i++) {
			tmp.push({
				over: i + 1,
				run: last[i].runrate || 0,
				wicket: last[i].wickets || 0,
			});
		}
		worms.push(tmp);
	}

	return {
		team1,
		team2,
		worms,
	};
};

export const getShortScore = (state, slug) => {
	const inningsIds = getInningsIds(state, slug);
	if (!Array.isArray(inningsIds)) {
		return {};
	}

	const lastI = inningsIds.map(i => i).reverse().find(i => getInnings(state, i).name !== '');
	const last = getInnings(state, lastI);

	return {
		teams: (state.match[slug] && state.match[slug].teams && state.match[slug].teams.map(t => t.name)) || [],
		total: last.inningstotal || '০',
		name: last.name || '',
		out: last.out || '০',
		over: last.over || '০',
		remainingball: last.remainingball || '০',
		runrate: last.runrate || '০',
		requiredrunrate: last.requiredrunrate || '০',
		remainingrun: last.remainingrun || '০',
		leadby: last.leadby || false,
		diff: last.diff || '০',
		first: last.first || false,
		towin: last.towin || false,
		test: last.test || false,
		day: last.day || '০',
		session: last.session || '০',
		running_innings: last.running_innings || false,
	};
};

const getTeamNames = (state, slug) => {
	return getInningsIds(state, slug).map(id => (state.innings && state.innings[id] && state.innings[id].name) || '');
};

export const getTeamsScore = (state, slug) => {

	const inningsIds = getInningsIds(state, slug);
	if (!Array.isArray(inningsIds)) {
		return [];
	}

	return inningsIds.map(i => {
		const k = getInnings(state, i);

		return {
			team: k.name || '',
			total: k.inningstotal || '',
			out: k.out || '০',
			over: k.over || '০',
		};
	});
};

export const getRunsPerOver = (state, slug) => {
	const [first, last] = getEndOfOvers(state, slug);
	const [team1, team2] = getTeamNames(state, slug);

	if (!Array.isArray(first) && !Array.isArray(last)) return [];

	let runsPerOver = [];

	if (!Array.isArray(first)) {
		for (let i = 0; i < last.length; i++) {
			runsPerOver.push({
				over: i + 1,
				run1: 0,
				run2: last[i].run || 0,
				wicket1: 0,
				wicket2: last[i].wickets || 0,
			});
		}
		return {
			team1,
			team2,
			runsPerOver,
		};
	}

	if (!Array.isArray(last)) {
		for (let i = 0; i < first.length; i++) {
			runsPerOver.push({
				over: i + 1,
				run1: first[i].run || 0,
				run2: 0,
				wicket1: first[i].wickets || 0,
				wicket2: 0,
			});
		}
		return {
			team1,
			team2,
			runsPerOver,
		};
	}

	for (let i = 0; i < Math.max(first.length, last.length); i++) {
		runsPerOver.push({
			over: i + 1,
			run1: (first[i] && first[i].run) || 0,
			run2: (last[i] && last[i].run) || 0,
			wicket1: (first[i] && first[i].wickets) || 0,
			wicket2: (last[i] && last[i].wickets) || 0,
		});
	}

	return {
		team1,
		team2,
		runsPerOver,
	};
};

export const getWorms = (state, slug) => {
	const [first, last] = getEndOfOvers(state, slug);
	const [team1, team2] = getTeamNames(state, slug);


	if (!Array.isArray(first) && !Array.isArray(last)) return [];

	let worms = [];
	if (Array.isArray(first)) {
		let tmp = [];
		for (let i = 0; i < first.length; i++) {
			tmp.push({
				over: i + 1,
				run: first[i].totalrun || 0,
				wicket: first[i].wickets || 0,
			});
		}
		worms.push(tmp);
	}


	if (Array.isArray(last)) {
		let tmp = [];
		for (let i = 0; i < last.length; i++) {
			tmp.push({
				over: i + 1,
				run: last[i].totalrun || 0,
				wicket: last[i].wickets || 0,
			});
		}
		worms.push(tmp);
	}

	return {
		team1,
		team2,
		worms,
	};
};

export const getWorms1 = (state, slug) => {
    const [first, last] = getEndOfOvers(state, slug);
    const [team1, team2] = getTeamNames(state, slug);

    if (!Array.isArray(first) && !Array.isArray(last)) return [];

    let runsPerOver = [];

    if (!Array.isArray(first)) {
        for (let i = 0; i <= last.length; i++) {
            if (!i) {
                runsPerOver.push({
                    over: dfs(i),
                    run1: 0,
                    run2: 0,
                    wicket1: 0,
                    wicket2: 0,
                });
            }
            else {
                runsPerOver.push({
                    over: dfs(i),
                    run1: 0,
                    run2: last[i - 1].totalrun || 0,
                    wicket1: 0,
                    wicket2: last[i - 1].wickets || 0,
                });
            }

        }
        return {
            team1,
            team2,
            runsPerOver,
        };
    }

    if (!Array.isArray(last)) {
        for (let i = 0; i <= first.length; i++) {
            if (!i) {
                runsPerOver.push({
                    over: dfs(i),
                    run1: 0,
                    run2: 0,
                    wicket1: 0,
                    wicket2: 0,
                });
            }
            else {
                runsPerOver.push({
                    over: dfs(i),
                    run1: first[i - 1].totalrun || 0,
                    run2: 0,
                    wicket1: first[i - 1].wickets || 0,
                    wicket2: 0,
                });
            }
        }
        return {
            team1,
            team2,
            runsPerOver,
        };
    }

    for (let i = 0; i <= Math.max(first.length, last.length); i++) {
        if (!i) {
            runsPerOver.push({
                over: dfs(i),
                run1: 0,
                run2: 0,
                wicket1: 0,
                wicket2: 0,
            });
        }
        else {
            runsPerOver.push({
                over: dfs(i),
                run1: (first[i - 1] && first[i - 1].totalrun) || null,
                run2: (last[i - 1] && last[i - 1].totalrun) || null,
                wicket1: (first[i - 1] && first[i - 1].wickets) || 0,
                wicket2: (last[i - 1] && last[i - 1].wickets) || 0,
            });
        }

    }

    return {
        team1,
        team2,
        runsPerOver,
    };
};

export const getBattingInnings = (state, slug) => {
    const inningsIds = getInningsIds(state, slug);
    if (!Array.isArray(inningsIds)) {
        return [];
    }

    return inningsIds.map(i => {
        const data = getInnings(state, i);
        const l = (data && data.extras && data.extras.split(' ')) || null;
        let batting = [];
        if (data && l !== null) {
            for (let i = 0; i <= data.batting.length; i++) {
                if (i === data.batting.length) {
                    batting.push({
                        name: 'অতিরিক্ত',
                        value: parseInt(l[0]),
                        balls: 0
                    });
                }
                else if (parseInt(data.batting[i].runs)) {
                    batting.push({
                        name: data.batting[i].name,
                        value: parseInt(data.batting[i].runs),
                        balls: parseInt(data.batting[i].balls)
                    });
                }

            }
        }

        return {
            inningsName: data.name || '',
            batting: batting || [],
        }
    }).filter(i => i.inningsName !== '');
};

export const getBowlingInnings = (state, slug) => {
    const inningsIds = getInningsIds(state, slug);
    if (!Array.isArray(inningsIds)) {
        return [];
    }
    const [team1, team2] = getTeamNamesFromMatch(state, slug);
	const numberMapping = {
		"\u09e6" : 0,
		"\u09e7" : 1,
		"\u09e8" : 2,
		"\u09e9" : 3,
		"\u09ea" : 4,
		"\u09eb" : 5,
		"\u09ec" : 6,
		"\u09ed" : 7,
		"\u09ee" : 8,
		"\u09ef" : 9,
	};
    return inningsIds.map(i => {
        const innings = dfs(getInnings(state, i));
        let bowling = [];
        let outs = 0;
        const out = numberMapping[innings.out];
        if (innings && innings.bowling) {
            for (let i = 0; i <= innings.bowling.length; i++) {
                if (i === innings.bowling.length) {
                    if (out !== outs) {
                        bowling.push({
                            x: 'অন্যান্য',
							//y:3
                            y: parseInt(numberMapping[innings.out]) - parseInt(outs),
                        });
                        outs++;
                    }
                    bowling.push({
                        x: 'নটআউট',
//						y:2
                        y: parseInt(11) - parseInt(outs),
                    });
                }
                else if (parseInt(numberMapping[innings.bowling[i].wickets]) !== 0) {
                    outs += parseInt(numberMapping[innings.bowling[i].wickets]);
                    bowling.push({
                        //name: data.bowling[i].name,
						x: innings.bowling[i].name,
						//value: 2,
                        y: parseInt(numberMapping[innings.bowling[i].wickets])
                    });
                }
            }
        }
        return {
            inningsName: (innings.name === team1 ? team2 : team1) || '',
            bowling: bowling || [],
        }
    }).filter(i => i.inningsName !== '');
};

export const getRunRate1 = (state, slug) => {
    const [first, last] = getEndOfOvers(state, slug);
    const [team1, team2] = getTeamNames(state, slug);

    if (!Array.isArray(first) && !Array.isArray(last)) return [];

    let runsPerOver = [];

    if (!Array.isArray(first)) {
        for (let i = 0; i <= last.length; i++) {
            if (!i) {
                runsPerOver.push({
                    over: dfs(i),
                    run1: 0,
                    run2: 0,
                    wicket1: 0,
                    wicket2: 0,
                });
            }
            else {
                runsPerOver.push({
                    over: dfs(i),
                    run1: 0,
                    run2: last[i - 1].runrate || 0,
                    wicket1: 0,
                    wicket2: last[i - 1].wickets || 0,
                });
            }

        }
        return {
            team1,
            team2,
            runsPerOver,
        };
    }

    if (!Array.isArray(last)) {
        for (let i = 0; i <= first.length; i++) {
            if (!i) {
                runsPerOver.push({
                    over: dfs(i),
                    run1: 0,
                    run2: 0,
                    wicket1: 0,
                    wicket2: 0,
                });
            }
            else {
                runsPerOver.push({
                    over: dfs(i),
                    run1: first[i - 1].runrate || 0,
                    run2: 0,
                    wicket1: first[i - 1].wickets || 0,
                    wicket2: 0,
                });
            }
        }
        return {
            team1,
            team2,
            runsPerOver,
        };
    }

    for (let i = 0; i <= Math.max(first.length, last.length); i++) {
        if (!i) {
            runsPerOver.push({
                over: dfs(i),
                run1: 0,
                run2: 0,
                wicket1: 0,
                wicket2: 0,
            });
        }
        else {
            runsPerOver.push({
                over: dfs(i),
                run1: (first[i - 1] && first[i - 1].runrate) || null,
                run2: (last[i - 1] && last[i - 1].runrate) || null,
                wicket1: (first[i - 1] && first[i - 1].wickets) || 0,
                wicket2: (last[i - 1] && last[i - 1].wickets) || 0,
            });
        }

    }

    return {
        team1,
        team2,
        runsPerOver,
    };
};

export const getBowlerRunsGiven = (state, slug) => {
    const inningsIds = getInningsIds(state, slug);
    if (!Array.isArray(inningsIds)) {
        return [];
    }
    const [team1, team2] = getTeamNamesFromMatch(state, slug);

    return inningsIds.map(i => {
        const data = getInnings(state, i);
        let bowling = [];

        if (data && data.bowling) {
            for (let i = 0; i < data.bowling.length; i++) {
                bowling.push({
                    name: data.bowling[i].name,
                    value: parseInt(data.bowling[i].runs)
                });
            }
        }
        return {
            inningsName: (data.name === team1 ? team2 : team1) || '',
            bowling: bowling || [],
        }
    }).filter(i => i.inningsName !== '');
};

export const getBowlingInningsBar = (state, slug) => {
    const inningsIds = getInningsIds(state, slug);
    if (!Array.isArray(inningsIds)) {
        return [];
    }
    const [team1, team2] = getTeamNamesFromMatch(state, slug);
	
    return inningsIds.map(i => {
        const data = englishDFS(getInnings(state, i));
        let bowling = [];
        if (data && data.bowling) {
            for (let i = 0; i <= data.bowling.length; i++) {
                if (i === data.bowling.length) {

                }
                else {
                    bowling.push({
                        name: data.bowling[i].name,
                        wicket: parseInt(data.bowling[i].wickets),
                        over: parseInt(data.bowling[i].over),
                        run: parseInt(data.bowling[i].runs),
                        dots: parseInt(data.bowling[i].dots),
						x: data.bowling[i].name,
						y: parseInt(data.bowling[i].runs),
                    });
                }
            }
        }
        return {
            inningsName: (data.name === team1 ? team2 : team1) || '',
            bowling: bowling || [],
        }
    }).filter(i => i.inningsName !== '');
};