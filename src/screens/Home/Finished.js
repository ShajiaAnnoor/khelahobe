import React, {
	useEffect,
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';

import { 
	getFinished,
    getLiveScoresRecentFinished,
} from '../../../redux/reducers';
import { 
	fetchFinished,
	fetchLiveScoresRecentFinished,
} from '../../../redux/complex-actions/livescore';
import ShortscoreList from "./ShortscoreList";

const Finished = () => {

	const livescoresRecentFinished = useSelector(
		state => getLiveScoresRecentFinished(state)
	) || [];
   
	const finished = useSelector(
		state => getFinished(state)
	)
		||
		[];

    const dispatch = useDispatch();
	
	useEffect(
		() => {
				dispatch(
					fetchFinished()
//					fetchLiveScoresRecentFinished(0, 3)
				);
			}
		,[]
	);
	
    return (
		<ShortscoreList livescores={finished.slice(0,12)}/>		
    );
}

export default Finished;