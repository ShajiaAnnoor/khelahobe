import React, {
	Fragment,
	useEffect,
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';

import { styles } from "./Home.style";
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

const Home = () => {
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
//		[livescores.length]
	);
	
    return (
		<Fragment>
			{/*this will show one scorecard
			<View style={styles.pageContainer}>*/}
			<ShortscoreList livescores={livescores.slice(0,12)}/>
				{/*<BDMatch bdMatch={bdMatch} />*/}
		
		</Fragment>
    );
}

export default Home