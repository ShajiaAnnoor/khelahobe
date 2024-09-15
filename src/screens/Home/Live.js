import React, {
	useEffect,
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';

import { 
    getLiveScoresHome, 
    getLiveScoresRecentFinished,
    getBDMatch,
	getLive,
} from '../../../redux/reducers';
import { 
    fetchLiveScores, 
    fetchLiveScoresTest, 
	fetchBDMatch,
	fetchLiveScoresRecentFinished,
	fetchLive,
} from '../../../redux/complex-actions/livescore';
import ShortscoreList from "./ShortscoreList";

const Live = () => {
	/*
	let livescores = useSelector(
		state => getLiveScoresHome(state)
	) || [];
	*/
//	livescores = [];
/*
	const livescoresRecentFinished = useSelector(
		state => getLiveScoresRecentFinished(state)
	) || [];

	console.log("testing recently finished matches",livescoresRecentFinished);
*/
/*   
    const bdMatch = useSelector(
		state => getBDMatch(state)
	) || '';
	
	if (bdMatch!=undefined){
		livescores = [bdMatch]
	}
*/
    //livescores = (livescores && livescores.length < 5 && livescores.concat(livescoresRecentFinished)) || livescores;

	const livescores = useSelector(state=>getLive(state));

    const dispatch = useDispatch();

    useEffect(
		() => {
			dispatch(
				fetchLive()
			);
		},[]
	);

/*
	useEffect(
		() => {
			dispatch(
				fetchBDMatch()
			);
		},[]
	);
*/	
	/*
    useEffect(
		() => {
			dispatch(
				fetchLiveScoresTest()
			);
		},
		[
			dispatch
		]
	);
	*/
	/*
    useEffect(
		() => {
			dispatch(
				Match()
			);
			const interval = setInterval(() => dispatch(
				fetchBDMatch()
			), 1000000);
			return () => clearInterval(interval);
		},
		[
			dispatch
		]
    );
	*/	
	/*
	useEffect(
		() => {
			if (livescores.length < 5) {
				dispatch(
					fetchLiveScoresRecentFinished(0, 10)
				);
			}
		},[]
	);
	*/
    return (
		<ShortscoreList livescores={livescores}/>		
    );
}

export default Live;