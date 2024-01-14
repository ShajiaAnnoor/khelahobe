import React, { 
	Fragment,
} from "react";

import Batting from "../Batting";
import Bowling from "../Bowling";

const Scoreboard = ({
	slug
}) => {

	const inningses = useSelector(
		state => getInningsEs(state, slug)
	);
	const matchDetails = useSelector(
		state => getMatchDetails(state, slug)
	);
	const teams = useSelector(
		state => getMatch(state, slug)
	);

    useEffect(
        () => {
            dispatch(
                fetchMatchWithInnings(slug)
            );
            if (
                (
                    data
                    &&
                    data.matchState === 'POST'
                )
            ) return;
            const interval = setInterval(
                () => dispatch(
                    fetchMatchWithInnings(slug)
                ),
                10000
            );

            return () => clearInterval(interval);
        },
        [
            dispatch,
            slug,
        ]
    );

    // need to get type from somewhere
    return (
		<View
			align='center'
			className={classes.root}
        >
			{
				(
					inningses
					&&
					Array.isArray(
						inningses
					)
				)
				&&
				inningses.map(
					(
						value,
						index
					) => (
						value
						&&
						value.over
					)
						&&
						(
                            <Fragment>
								<Batting
									batting={value.batting}
                                    teamname={value.name}
									didnotbat={value.didnotbat}
									extras={value.extras}
									total={value.inningstotal}
									fow={value.fow}
									out={value.out}
									over={dfs(value.over)}
								/>
								<Bowling
									bowling={value.bowling}
								/>
                            </Fragment>
						)
				)
			}
        </View>
    );
}