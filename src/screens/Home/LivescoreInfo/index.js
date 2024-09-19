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
	const first_innings = 0 ; 
	const second_innings = 1 ; 
	const third_innings = 2 ;
	const fourth_innings = 3 ;

	useEffect(
		() => {
			dispatch(
				fetchMatchWithInnings(slug)
			);
			if (flag === 0 || ( //what does flag = 0 indicate?
				match.matchState
				&&
				match.matchState === 'POST'
			)) return;
			const interval = setInterval(
				() => dispatch(
					fetchMatchWithInnings(slug)
				),
				100000 //wait for 100 seconds to see the match update
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
          flag === 0 //TO-DO: What is the purpose of this flag? 
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
                      fetchMatchWithInnings(slug)
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
			teamscore[first_innings].team.toLowerCase() === teamscore[third_innings].team.toLowerCase()
		) {
			// some sort of indexing 
			test3 = 2;
			test4 = 3;
		}
		else {
			test3 = 3;
			test4 = 2;
		}
	}

//	console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ");
	console.log(match.matchType);
//	console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");

	const l = `${shortScoreCard.remainingball} বলে ${shortScoreCard.remainingrun} রান দরকার`;
	const st = getTime(match.start_time, match.days);

	if (!match) return '';
	
	let over_first_innings = teamscore[first_innings] && teamscore[first_innings].over || ''
	let out_first_innings = teamscore[first_innings] && teamscore[first_innings].out || ''

	if ( out_first_innings !== '১০' ) { out_first_innings = `/${out_first_innings}`}
	else { out_first_innings = "" }

	let over_second_innings = teamscore[second_innings] && teamscore[second_innings].over || '';
	let out_second_innings = teamscore[second_innings] && teamscore[second_innings].out || '';

	if ( out_second_innings !== '১০' ) { out_second_innings = `/${out_second_innings}`}
	else { out_second_innings = "" };

	let over_third_innings = teamscore[third_innings] && teamscore[third_innings].over || '';
	let out_third_innings = teamscore[third_innings] && teamscore[third_innings].out || '';

	if ( out_third_innings !== '১০' ) { out_third_innings = `/${out_third_innings}`}
	else { out_third_innings = "" };

	let over_fourth_innings = teamscore[fourth_innings] && teamscore[fourth_innings].over || '';
	let out_fourth_innings = teamscore[fourth_innings] && teamscore[fourth_innings].out || '';

	if ( out_fourth_innings !== '১০' ) { out_fourth_innings = `/${out_fourth_innings}`}
	else { out_fourth_innings = "" };

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
						{( teamscore[first_innings] && teamscore[first_innings].total) ||''}
						{
							(
								(over_first_innings !== "০")
							?
								(
								`${out_first_innings} (${over_first_innings} ওভার)`
//									null
								)
								:
								null							
							)
						}
						{/*
						{(match.matchType == "TEST" && teamscore[test1] && teamscore[test1].total) || ''}
						{
							(
								((teamscore[test1] && dfs(teamscore[test1].over) !== "০")
								?
								(
									`${(out) || '০' } (${over} ওভার)`
								)
								:
									null

								)
							)
						}
						*/}
						{(teamscore[test3] && "এবং " + teamscore[test3].total) || ''}
						{
							(
								((teamscore[test3] && dfs(teamscore[test3].over) !== "০")
								?
									(
									`${(out_second_innings) || '০' } (${(over_second_innings)} ওভার)`
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
						{(teamscore[1] && teamscore[1].total) ||''}
						{
							(
								(over_second_innings !== "০")
								?
								(
									`${out_second_innings} (${over_second_innings} ওভার)`
								)
								:
									null              
							)
						}
						{/*
						{( teamscore[test2] && teamscore[test2].total) || ''}
						{
							(
								((teamscore[test2] && dfs(teamscore[test2].over) !== "০")
								?
								(
									`${(out1) || '০' } (${(over1)} ওভার)`
								)
								:
									null

								)
						)
						}
						*/}
						{( teamscore[test4] && "এবং " + teamscore[test4].total) || ''}
						{
							(
								((teamscore[test4] && dfs(teamscore[test4].over) !== "০")
								?
									(
									`${(out_fourth_innings) || '০' } (${(over_fourth_innings)} ওভার)`
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