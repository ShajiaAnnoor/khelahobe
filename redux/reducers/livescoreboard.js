import {
    combineReducers
} from 'redux';

import {
    actions
} from '../action-types/liveScoreboard';

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
    teams: state.match[slug].teams && state.match[slug].teams.map(t => t.name) || [],
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
        const data = getInnings(state, i);

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

