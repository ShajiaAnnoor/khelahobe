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
} from '../../../redux/reducers';
import { 
    fetchLiveScores, 
    fetchLiveScoresTest, 
	fetchBDMatch,
	fetchLiveScoresRecentFinished,
} from '../../../redux/complex-actions/livescore';
import ShortscoreList from "./ShortscoreList";

const Live = () => {
	let livescores = useSelector(
		state => getLiveScoresHome(state)
	) || [];

	const livescoresRecentFinished = useSelector(
		state => getLiveScoresRecentFinished(state)
	) || [];
   
	/*
    const bdMatch = useSelector(
		state => getBDMatch(state)
	) || '';
	*/
    //livescores = (livescores && livescores.length < 5 && livescores.concat(livescoresRecentFinished)) || livescores;

    const dispatch = useDispatch();

    useEffect(
		() => {
			dispatch(
				fetchLiveScores()
			);
		},[]
	);
	
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
				fetchBDMatch()
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
	useEffect(
		() => {
			if (livescores.length < 5) {
				dispatch(
					fetchLiveScoresRecentFinished(0, 10)
				);
			}
		},[]
	);
	
    return (
		<ShortscoreList livescores={livescores.slice(0,12)}/>		
    );
}

export default Live;