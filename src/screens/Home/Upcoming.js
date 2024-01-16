import React, {
	Fragment,
	useEffect,
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';

import { 
    getLiveScoresHome, 
} from '../../../redux/reducers';
import { 
    fetchLiveScores, 
} from '../../../redux/complex-actions/livescore';
import ShortscoreList from "./ShortscoreList";

const Upcoming = () => {
	let livescores = useSelector(
		state => getLiveScoresHome(state)
	) || [];
   
    const dispatch = useDispatch();

    useEffect(
		() => {
			dispatch(
				fetchLiveScores()
			);
		},[]
	);
		
    return (
		<Fragment>
			<ShortscoreList livescores={livescores.slice(0,12)}/>
		</Fragment>
    );
}

export default Upcoming;