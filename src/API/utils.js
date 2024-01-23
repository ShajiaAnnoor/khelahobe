export const dfs = obj => {
	if (obj === null || obj === undefined) return obj;
	if (typeof obj === 'string') return translate(obj);
	if (typeof obj === 'number') return translate((Math.round(obj * 100) / 100).toString(10));
	if (Array.isArray(obj)) return obj.map(e => dfs(e));
	if (typeof obj === 'object') return Object.getOwnPropertyNames(obj).map(
		k => exceptions.indexOf(k) === -1 ? [k, dfs(obj[k])] : [k, obj[k]]
	).reduce(
		(prev, cur) => {
			prev[cur[0]] = cur[1];
			return prev;
		}, {});
	return obj;
};

export const translate = s => [...s].map(c => numberMapping.hasOwnProperty(c) ? numberMapping[c] : c).join('');

export const processMatch = ({
	days,
	matchnotes,
	matchnumber,
	matchstate,
	matchstatus,
	matchtype,
	playermatch,
	reserve,
	result,
	scoreboards,
	season,
	series,
	stadium,
	team1players,
	team2players,
	teamone,
	teamtwo,
	toss,
	tvumpires,
	umpires,
	seriesid,
	eventid,
	winning_team,
	start_time,
	team1captain,
	team2captain
}) => ({
	days: days || '',
	matchNotes: matchnotes || [],
	matchnumber: matchnumber || 0,
	matchStatus: matchstatus || '',
	matchState: matchstate || '',
	matchType: matchtype,
	manOfTheMatch: playermatch || '',
	reserve: reserve || [],
	result: result || '',
	scoreboards: scoreboards || '',
	season: season || '',
	series: series || '',
	stadium: stadium || '',
	teams: [
		{
			name: teamone || '',
			players: team1players || [],
			captain: team1captain
		},
		{
			name: teamtwo || '',
			players: team2players || [],
			captain: team2captain
		},
	],
	toss: toss || '',
	tvUmpires: tvumpires || [],
	umpires: umpires || [],
	seriesid: seriesid || '',
	eventid: eventid || '',
	winning_team: winning_team || '',
	start_time,
});

export const processInnings = ({
	battinginnings: {
		batting,
	},
	bowlinginnings: {
		bowlinginnings: bowling,
	},
	bestbatsman,
	bestbowler,
	currentbatsman,
	currentbowler,
	day,
	didnotbat,
	diff,
	endofover,
	extras,
	first,
	fow,
	inningstotal,
	leadby,
	name,
	out,
	over,
	partnership,
	remainingball,
	remainingrun,
	requiredrunrate,
	result,
	runrate,
	scoreslevel,
	session,
	test,
	towin,
	trailby,
	running_innings
}) => ({
	day: day || 0,
	diff: diff || 0,
	endofover: endofover || '',
	first: first || false,
	leadby: leadby || false,
	scoreslevel: scoreslevel || false,
	session: session || 0,
	test: test || false,
	towin: towin || false,
	trailby: trailby || false,
	name: name || '',
	inningstotal: inningstotal,
	result: result || '',
	batting: Array.isArray(batting) ? batting.map(b => processWicketText(processBatsmen(b))) : [],
	bowling: bowling ? bowling.map(b => processBowler(b)) : [],
	didnotbat: didnotbat || [],
	extras: typeof extras === 'object' ? {
		lb: extras.legbyes || 0,
		b: extras.byes || 0,
		nb: extras.noballs || 0,
		w: extras.wides || 0,
		total: extras.total || 0,
	} : {},
	fow: fow ? fow.map(e => ({
		name: e.name,
		over: e.over,
		run: e.run,
		wicket: e.wicketNumber,
	})) : [],
	out: out,
	over,
	remainingball: remainingball || 0,
	remainingrun: remainingrun || 0,
	requiredrunrate: requiredrunrate || 0,
	runrate: runrate || 0,
	running_innings,
	bestbatsman: Array.isArray(bestbatsman) ? bestbatsman.map(b => processBatsmen(b)) : [],
	bestbowler: Array.isArray(bestbowler) ? bestbowler.map(b => processBowler(b)) : [],
	currentbatsman: Array.isArray(currentbatsman) ? currentbatsman.map(b => processBatsmen(b)) : [],
	currentbowler: Array.isArray(currentbowler) ? currentbowler.map(b => processBowler(b)) : [],
	partnerships: Array.isArray(partnership) ? partnership.map(p => processPartnership(p)) : [],
});

const processWicketText = ({
	typeofout,
	peopleinvolved,
	...rest
}) => ({
	...rest,
	wicketText: ((t, p) => {
		if (rest.notout) return '';
		if (peopleinvolved[0] === '' && peopleinvolved[1] === '') return '';
		if (t === 'bowled') return `বোল্ড ${p[1] || ''}`;
		if (t === 'run out') return `রান আউট ${p[0] || p[1] || ''}`;
		if (t === 'leg before wicket' || t === 'lbw') return `এলবিডব্লিউ ${p[1] || ''}`;
		if (t === 'hit wicket') return `হিট আউট ${p[0] || p[1] || ''}`;
		if (t === 'আহত অবসর' || t === 'retired not out') return 'আহত অবসর';
		let w = 'কট';
		if (t === 'stumped') w = 'স্টাম্পড';
		if (p[0] === p[1]) return `${w} ও বোল্ড ${p[0] || ''}`;
		return `${w} ${p[0] || ''} বোল্ড ${p[1] || ''}`;
	})(typeofout, peopleinvolved),
});

const processBatsmen = ({
	balls,
	fours,
	minutes,
	name,
	notout,
	peopleinvolved,
	runs,
	sixes,
	strikerate,
	typeofout,
	inningsid,
}) => ({
	name: name || '',
	inningsid: inningsid || '',
	runs: runs || '0',
	balls: balls || '0',
	fours: fours || '0',
	sixes: sixes || '0',
	notout: notout,
	typeofout: typeofout || '',
	peopleinvolved: peopleinvolved || [],
	sr: strikerate || '0.00',
	minutes: minutes || '',
});

const processBowler = ({
	dots,
	economy,
	fourshit,
	maidens,
	name,
	noballs,
	overbowled,
	runsgiven,
	sixeshit,
	wicketstaken,
	wides,
}) => ({
	name: name || '',
	over: overbowled || '0',
	maidens: maidens || '0',
	runs: runsgiven || '0',
	wides: wides || '0',
	noballs: noballs || '0',
	wickets: wicketstaken || '0',
	fours: fourshit || '0',
	sixes: sixeshit || '0',
	dots: dots || '0',
	economy: economy || '0',
});

const processPartnership = ({
	active,
	ball,
	first,
	firstcontribute,
	runs,
	second,
	secondconntribute: secondcontribute,
}) => ({
	firstBatsman: first || '',
	secondBatsman: second || '',
	firstContribution: firstcontribute || '0',
	secondContribution: secondcontribute || '0',
	runs: runs || '0',
	ball: ball || '0',
	active: active || false,
	left: Math.min((Math.pow(firstcontribute || 0, 1.0 / 2) / 158.113883008) * 1000, 100),
	right: Math.min((Math.pow(secondcontribute || 0, 1.0 / 2) / 158.113883008) * 1000, 100),
});

const numberMapping = {
	"0": "\u09e6",
	"1": "\u09e7",
	"2": "\u09e8",
	"3": "\u09e9",
	"4": "\u09ea",
	"5": "\u09eb",
	"6": "\u09ec",
	"7": "\u09ed",
	"8": "\u09ee",
	"9": "\u09ef",
};

const exceptions = [
	'start_time',
	'batting_order',
	'bowling_order',
	'scoreboards',
	'ID',
	'id',
	'left',
	'right',
	'eventid',
	'comment',
	'short_text',
	'matchType',
	'matchnumber',
	'sequence',
	'created_at',
	'updated_at',
	'deleted_at',
	'seriesid',
];