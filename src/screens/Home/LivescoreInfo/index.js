import React, { 
	useEffect, 
	Fragment,
} from "react";
import { 
	useSelector, 
	useDispatch,
} from "react-redux";
import { 
	Pressable, 
	Text, 
	View,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import { 
	getMatch, 
	getShortScore, 
	getTeamsScore,
} from "../../../../redux/reducers";
import { fetchMatchWithInnings } from "../../../../redux/complex-actions/scoreboard";
import { dfs } from "../../../API/utils";
import { styles } from "./style";
import { getTime } from "./utils";

const LiveScoreInfo = ({
    slug, flag
}) => {
	
    const match = useSelector(
		state => getMatch(state, slug) || ''
	);

	const shortScoreCard = useSelector(
		state => getShortScore(state, slug)
	);

	const teamscore = useSelector(
		state => getTeamsScore(state, slug)
	);

	const dispatch = useDispatch();
	const isEmpty = obj => !Object.keys(obj).reduce((prev, cur) => prev || obj.hasOwnProperty(cur), false);

  //TO-DO: Want to check why innings data is being fetched here. 
  
	useEffect(
		() => {
			dispatch(
				fetchMatchWithInnings(slug)
			);
			if (flag === 0 || (
				match.matchState
				&&
				match.matchState === 'POST'
			)) return;
			const interval = setInterval(
				() => dispatch(
					fetchMatchWithInnings(slug)
				),
				1000000
			);

			return () => clearInterval(interval);
		},
		[
//			match.matchState
		]
	);

    useEffect(
      () => {
        if (
          flag === 0 //TO-DO: What is the purpose of this app? 
          ||
          (
              match.matchStatus
              &&
              match.matchStatus === 'স্টাম্পস'
          )
          ||
          (
              match.matchStatus
              &&
              match.matchStatus === 'সরাসরি কাভারেজ নেই'
          )
        ) {
            const interval = setInterval(
              () => {
                  dispatch(
                      fetchMatchWithInningses(slug)
                  );
              },
              6000000
            );

            return () => clearInterval(interval);
        }
      },
      [
//          match.matchState,
//          match.matchStatus,
      ]
    );
	
	if (!match || isEmpty(match)) {
		return (<Fragment></Fragment>);
	}

	let team1 = '',
		team2 = '',
		test1 = 110,
		test2 = 110,
		test3 = 110,
		test4 = 110;

	if (
		match.matchType === 'T20'
		||
		match.matchType === 'ODI'
		||
		match.matchType === 'HUNDRED_BALL'
	) {
		if (
			teamscore[0]
			&&
			shortScoreCard.teams[0].toLowerCase() === teamscore[0].team.toLowerCase()
		) {
			team1 = shortScoreCard.teams[0].toLowerCase();
			team2 = shortScoreCard.teams[1].toLowerCase();
		}
		else {
			team1 = shortScoreCard.teams[1].toLowerCase();
			team2 = shortScoreCard.teams[0].toLowerCase();
		}
	}

	if (
		match.matchType === 'TEST' //only test
	) {
		if (!teamscore) { //when no teamscore is there
			team1 = shortScoreCard.teams[0].toLowerCase();
			team2 = shortScoreCard.teams[1].toLowerCase();
		}
		if (
			teamscore[0] //when only 1 or 2 teamscore is there. if we get only one then we can take the 2nd index team too
			&&
			shortScoreCard.teams[0].toLowerCase() === teamscore[0].team.toLowerCase()
		) {
			team1 = shortScoreCard.teams[0].toLowerCase();
			team2 = shortScoreCard.teams[1].toLowerCase();
			test1 = 0;
			test2 = 1;
		}
		else {
			team1 = shortScoreCard.teams[1].toLowerCase();
			team2 = shortScoreCard.teams[0].toLowerCase();
			test1 = 1;
			test2 = 0;
		}
		if (
			teamscore[2]
			&&
			teamscore.length > 2 //when at least 3 teamscores are there we can always get the 4th one
			&&
			teamscore[0].team.toLowerCase() === teamscore[2].team.toLowerCase()
		) {
			test3 = 2;
			test4 = 3;
		}
		else {
			test3 = 3;
			test4 = 2;
		}
	}

	const l = `${shortScoreCard.remainingball} বলে ${shortScoreCard.remainingrun} রান দরকার`;
	const st = getTime(match.start_time, match.days);

	if (!match) return '';
	
	let over = teamscore[0] && teamscore[0].over || ''
	let out = teamscore[0] && teamscore[0].out || ''

	if ( out !== '১০' ) { out = `/${out}`}
	else { out = "" }

	let over1 = teamscore[1] && teamscore[1].over || '';
	let out1 = teamscore[1] && teamscore[1].out || '';

	if ( out1 !== '১০' ) { out1 = `/${out1}`}
	else { out1 = "" };

	const navigation=useNavigation();

    return (
		<View style={styles.listItem}>
        	<View style={styles.itemContainer}>
          		<View style={styles.dateAndStatusContainer}>        
					<Text style={styles.statusText}> 
						{match.matchStatus} 
					</Text>

					<Text style={styles.dateTimeText} >  
						{st}
					</Text>
            
					<Text style={styles.dateTimeText} >  
						`${match.series}, ${match.stadium}`
					</Text>
          		</View>

				<View style={styles.manOfTheMatchContainer}>					
					<Text style={styles.manOfTheMatchText}>
						ম্যাচ সেরা খেলোয়াড়
					</Text>
					<Text style={styles.manOfTheMatchNameText} > 
						{match.manOfTheMatch.name} 
					</Text>
				</View>
        	</View> 

        	<View style={{ width:'100%',flexDirection:'column'}}>
          		<View style={ styles.teamScoreItemContainer}>
            		<View style={styles.countryNameStyle}>
              			<Text style={styles.countryNameTextStyle}> 
                			{team1} 
              			</Text> 
            		</View>

	            <View style={styles.scoreContainer}>
    	        	<Text style={styles.scoreTextStyle}> 
						{(match.matchType !== "TEST" && teamscore[0] && teamscore[0].total) ||''}
						{
							(
								(over !== "০")
							?
								(
								`${out} (${over} ওভার)`
								)
								:
								null							
							)
						}
						{(match.matchType === "TEST" && teamscore[test1] && teamscore[test1].total) || ''}
						{
							(
								((teamscore[test1] && dfs(teamscore[test1].over) !== "০")
								?
								(
									`${(teamscore[test1] && teamscore[test1].out) || '০' } (${dfs(teamscore[test1].over)} ওভার)`
								)
								:
									null

								)
							)
						}
						{(match.matchType === "TEST" && teamscore[test3] && "এবং " + teamscore[test3].total) || ''}
						{
							(
								((teamscore[test3] && dfs(teamscore[test3].over) !== "০")
								?
									(
									`${(teamscore[test3] && teamscore[test3].out) || '০' } (${dfs(teamscore[test3].over)} ওভার)`
									)
									:
									null

								)
							)
						}
              		</Text>
            	</View>
        	</View>

        	<View style={ styles.teamScoreItemContainer}> 
            	<View style={styles.countryNameStyle}>
            		<Text style={styles.countryNameTextStyle} > 
                		{team2} 
            		</Text>
            	</View>
               
            	<View style={styles.scoreContainer}>
            		<Text style={styles.scoreTextStyle}> 
						{(match.matchType !== "TEST" && teamscore[1] && teamscore[1].total) ||''}
						{
							(
								(over1 !== "০")
								?
								(
									`${out1} (${over1} ওভার)`
								)
								:
									null              
							)
						}
						{(match.matchType === "TEST" && teamscore[test2] && teamscore[test2].total) || ''}
						{
							(
								((teamscore[test2] && dfs(teamscore[test2].over) !== "০")
								?
								(
									`${(teamscore[test2] && teamscore[test2].out) || '০' } (${dfs(teamscore[test2].over)} ওভার)`
								)
								:
									null

								)
						)
						}
						{(match.matchType === "TEST" && teamscore[test4] && "এবং " + teamscore[test4].total) || ''}
						{
							(
								((teamscore[test4] && dfs(teamscore[test4].over) !== "০")
								?
									(
									`${(teamscore[test4] && teamscore[test4].out) || '০' } (${dfs(teamscore[test4].over)} ওভার)`
									)
									:
									null
								)
							)
						}
    	        	</Text>
            	</View>
        	</View>
        </View>

        <View style={styles.summaryContainer}>
        	<Text 
            style={styles.summaryText}
          >
            {
              (
                match.result 
                  ? match.result : (
                  (
                    teamscore.length === 0 && match.scoreboards === ''
                  ) 
                    ? 
                    match.toss 
                    : 
                    l
                  )
              )
            }
          </Text>
        </View>

        <View style={{paddingLeft:1,padding:2,flex:2}}>
			<Pressable 
				style ={styles.buttonMatchDetails}
				onPress={()=>navigation.navigate('MatchDetails',{slug:slug})}
			>
				<Text style={styles.buttonTextStyle}>
					ম্যাচ বিস্তারিত
				</Text>
			</Pressable>
        </View>
    </View>
)}

export default LiveScoreInfo;