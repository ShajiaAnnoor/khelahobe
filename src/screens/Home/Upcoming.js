import React, {
	Fragment,
	useEffect,
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';

import { 
    getUpcoming, 
} from '../../../redux/reducers';
import { 
    fetchUpcoming, 
} from '../../../redux/complex-actions/livescore';
import ShortscoreList from "./ShortscoreList";

const Upcoming = () => {
	let upcoming = useSelector(
		state => getUpcoming(state)
	)
		||
		[];

    useEffect(
        () => {
            dispatch(
                fetchUpcoming()
            );
        },[]
    );

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
			<ShortscoreList livescores={upcoming}/>
		</Fragment>
    );
}

export default Upcoming;