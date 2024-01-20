import React, { Fragment } from 'react';
import { 
  useSelector, 
} from 'react-redux';
import { SafeAreaView } from 'react-native';
import Batting from "./Batting";
import Bowling from "./Bowling";
import MatchDetails from "./MatchDetails";
import Squad from "./Squad"; 

import { styles } from "./Scorecard.style";
import { ScrollView } from 'react-native';
import { getInningsEs } from '../../../redux/reducers';
import { getMatchDetails } from '../../../redux/reducers';
import { getMatch} from '../../../redux/reducers';
import { dfs } from '../../API/utils';

const ScorecardComponent = ({ route }) => {

  const {slug} = route.params;

  const inningses = dfs(useSelector(
		state => getInningsEs(state, slug)
	));

	const matchDetails = dfs(useSelector(
		state => getMatchDetails(state, slug)
	));

	const data = useSelector(
		state => getMatch(state, slug)
	);

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>{
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
						innings,
						index
					) => (
						innings
						&&
						innings.over
					)
						&& (
              <Fragment>
                <Batting 
                  batting={innings.batting} 
                  didnotbat={innings.didnotbat} 
                  extras={innings.extras} 
                  total={innings.inningstotal} 
                  fow={innings.fow}
                  out={innings.out}
                  over={dfs(innings.over)}
                />
                <Bowling 
                  bowling={innings.bowling}
                />
              </Fragment>
          
            )
        )}
          <MatchDetails {...matchDetails}/>
          <Squad teams={data.teams}/>
        </ScrollView>  
    </SafeAreaView>
  );
}; 


export default ScorecardComponent;
