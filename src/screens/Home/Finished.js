import React, {
	useEffect,
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';

import { 
    getLiveScoresRecentFinished,
} from '../../../redux/reducers';
import { 
	fetchLiveScoresRecentFinished,
} from '../../../redux/complex-actions/livescore';
import ShortscoreList from "./ShortscoreList";

const Finished = () => {

	const livescoresRecentFinished = useSelector(
		state => getLiveScoresRecentFinished(state)
	) || [];
   
    const dispatch = useDispatch();
	
	useEffect(
		() => {
				dispatch(
					fetchLiveScoresRecentFinished(0, 3)
				);
			}
		,[]
	);
	
    return (
		<ShortscoreList livescores={livescoresRecentFinished.slice(0,12)}/>		
    );
}

export default Finished;