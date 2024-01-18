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
  StyleSheet, 
  Text, 
  View,
} from "react-native";
import 
    { useNavigation
} from '@react-navigation/native';

import { 
  getMatch, 
  getShortScore, 
  getTeamsScore,
} from "../../../../redux/reducers";
import { fetchMatchWithInnings } from "../../../../redux/complex-actions/scoreboard";
import { dfs } from "../../../API/utils";
//import ScorecardScreen from "../../Scorecard/ScorecardScreen";

const months = {
  'January': 'জানুয়ারি',
  'February': 'ফেব্রুয়ারি',
  'March': 'মার্চ',
  'April': 'এপ্রিল',
  'May': 'মে',
  'June': 'জুন',
  'July': 'জুলাই',
  'August': 'আগস্ট',
  'September': 'সেপ্টেম্বর',
  'October': 'অক্টোবর',
  'November': 'নভেম্বর',
  'December': 'ডিসেম্বর',
  'January,': 'জানুয়ারি,',
  'February,': 'ফেব্রুয়ারি,',
  'March,': 'মার্চ,',
  'April,': 'এপ্রিল,',
  'May,': 'মে,',
  'June,': 'জুন,',
  'July,': 'জুলাই,',
  'August,': 'আগস্ট,',
  'September,': 'সেপ্টেম্বর,',
  'October,': 'অক্টোবর,',
  'November,': 'নভেম্বর,',
  'December,': 'ডিসেম্বর,',
};

function getTime(start_time, day) {

  let today = new Date();
  let [days, month, year] = day[0].split(" ");
  let todayOrNotToday = (today.getDate()) === days ? ('আজ ' + days) : days;
  let ffff = new Date(start_time);
  let h = '', test = '', st = '';
  let blabla = day[0].split(" ");

  if (blabla[2]) {
      for (let i in blabla) {
          if (months[blabla[i]]) {
              test += months[blabla[i]] + ' ';
          }
          else {
              test += blabla[i] + ' ';
          }
      }
  }
  else {

  }

  if (
      (
          ffff.getHours() >= 0 && ffff.getHours() < 3
      )
      ||
      (
          ffff.getHours() >= 20 && ffff.getHours() <= 24
      )
  ) {
      h = 'রাত';
  }
  else if (ffff.getHours() === 0) {
      h = 'রাত';
  }
  else if (ffff.getHours() < 7 && ffff.getHours() > 3) {
      h = 'ভোর';
  }
  else if (ffff.getHours() > 7 && ffff.getHours() < 11) {
      h = 'সকাল';
  }
  else if (ffff.getHours() >= 11 && ffff.getHours() <= 12) {
      h = 'বেলা';
  }
  else if (ffff.getHours() >= 12 && ffff.getHours() <= 15) {
      h = 'দুপুর';
  }
  else if (ffff.getHours() > 15 && ffff.getHours() < 18) {
      h = 'বিকাল';
  }
  else if (ffff.getHours() >= 18 && ffff.getHours() <= 20) {
      h = 'সন্ধ্যা';
  }

  h += ' ' + (
      dfs(
          ffff.getHours() > 12
              ?
              (
                  ffff.getHours() - 12
              )
              :
              (
                  (
                      ffff.getHours() === 0
                      &&
                      '12'
                  )
                  ||
                  ffff.getHours()
              )
      )
  ) + '.' + dfs(
      (
          ffff.getMinutes() > 0
              ?
              ffff.getMinutes()
              :
              (
                  '0' + ffff.getMinutes()
              )
      )
  ) + 'টায়';

  test = test.slice(0, -1);

  st = (test !== '' && `${test}, ${h}`) || (`${todayOrNotToday} ${months[month]} ${year}, ${h}`);
  return st;
}
const LiveScoreInfo = ({
    slug, flag
}) => {
	
    const data = useSelector(
		state => getMatch(state, slug) || ''
	);

//  console.log(slug);
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
				data.matchState
				&&
				data.matchState === 'POST'
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
//			data.matchState
		]
	);

    useEffect(
      () => {
        if (
          flag === 0
          ||
          (
              data.matchStatus
              &&
              data.matchStatus === 'স্টাম্পস'
          )
          ||
          (
              data.matchStatus
              &&
              data.matchStatus === 'সরাসরি কাভারেজ নেই'
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
//          data.matchState,
//          data.matchStatus,
      ]
    );
	
	if (!data || isEmpty(data)) {
		return (<Fragment></Fragment>);
	}

	let team1 = '',
		team2 = '',
		test1 = 110,
		test2 = 110,
		test3 = 110,
		test4 = 110;

	if (
		data.matchType === 'T20'
		||
		data.matchType === 'ODI'
		||
		data.matchType === 'HUNDRED_BALL'
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
		data.matchType === 'TEST' //only test
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
  const st = getTime(data.start_time, data.days);

	if (!data) return '';
	let over = teamscore[0] && teamscore[0].over || ''
	let out = teamscore[0] && teamscore[0].out || ''

	if ( out !== '১০' ) { out = `/${out}`}
  else { out = "" }

	let over1 = teamscore[1] && teamscore[1].over || '';
	let out1 = teamscore[1] && teamscore[1].out || '';

	if ( out1 !== '১০' ) { out1 = `/${out1}`}
  else { out1 = "" };

  //const Stack = createNativeStackNavigator();
  const navigation=useNavigation()
    return (
		  <View style={styles.listItem}>
        <View style={ styles.itemContainer}>
          <View style={styles.dateAndStatusContainer}>
            
            <Text style={styles.statusText}> 
              {data.matchStatus} 
            </Text>

            <Text style={styles.dateTimeText} >  
              {st}
            </Text>
            
            <Text style={styles.dateTimeText} >  
            `${data.series}, ${data.stadium}`
            </Text>

          </View>

          <View style={styles.manOfTheMatchContainer}>
            
            <Text style={styles.manOfTheMatchText}>
              ম্যাচ সেরা খেলোয়াড়
            </Text>

            <Text style={styles.manOfTheMatchNameText} > 
              {data.manOfTheMatch.name} 
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
                {(data.matchType !== "TEST" && teamscore[0] && teamscore[0].total) ||''}
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
                {(data.matchType === "TEST" && teamscore[test1] && teamscore[test1].total) || ''}
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
                {(data.matchType === "TEST" && teamscore[test3] && "এবং " + teamscore[test3].total) || ''}
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
                {(data.matchType !== "TEST" && teamscore[1] && teamscore[1].total) ||''}
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
                {(data.matchType === "TEST" && teamscore[test2] && teamscore[test2].total) || ''}
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
                {(data.matchType === "TEST" && teamscore[test4] && "এবং " + teamscore[test4].total) || ''}
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
                data.result 
                  ? data.result : (
                  (
                    teamscore.length === 0 && data.scoreboards === ''
                  ) 
                    ? 
                    data.toss 
                    : 
                    l
                  )
              )
            }
          </Text>
        </View>

        <View style={{paddingLeft:1,padding:2,flex:2}}>
          <Pressable 
            style ={{
              height: 40,
              width:100,
              borderRadius:10,
              backgroundColor:"green",
              padding:10,
              marginTop :1,
              marginBottom:5,
              elevation: 10,
            }}
            onPress={()=>navigation.navigate('ScorecardScreen',{slug:slug})}
          >
            <Text style={styles.buttonTextStyle}>
              ম্যাচ বিস্তারিত
            </Text>
          </Pressable>
        </View>
      </View>
    )
}

export const styles = StyleSheet.create({
    pageContainer: {
      flex:1,
      flexDirection:'column',
      margin:5,
      paddingTop:5,
      justifyContent: 'space-evenly',
    },
   
    teamScoreItemContainer: {
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignContent:'space-between',
      paddingLeft:15,
      width:'100%',
      height:"10%",
      flexWrap:'wrap',
    },

    itemContainer: {
      flexDirection:'column',
      justifyContent: 'space-evenly',
      alignItems:'flex-start',
      width:"100%",
      height:'25%',
      margin:1,
      padding:2,
      borderRadius:10,
      paddingTop:5,
      paddingBottom:5,
    },

    listItem: {
      margin: 2,
      marginTop:10,
      marginRight:8,
      padding:10,
      paddingBottom:2,
      paddingTop:2,
      backgroundColor:'white',
      height:'10%',
      width: '98%',
      flex:1,
      flexDirection: 'column',
      borderRadius: 10,
      borderBottomColor:'green',
      borderBottomWidth:2,
      borderLeftWidth:2,
      borderLeftColor:'green',
      alignItems:'flex-start',
      justifyContent: 'space-evenly',
      alignItems:'flex-start',
      alignContent:'space-around',
    },  
   
    buttonTextStyle:{
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize:10,
      flexWrap:'wrap',
      justifyContent:'center',
      padding:4,
    },

      scoreContainer:{
        height:35,        
        paddingLeft:30,
        marginLeft:10,
        flexDirection:"column",
        margin:2,
        padding:2,
        justifyContent:'center',
        alignSelf:'flex-end',
        alignContent:'flex-end',
        position:'relative',        
      },

      countryNameStyle:{
       height:35,
        margin:2,
         padding:2,
       justifyContent:'space-evenly',
       position:'relative',        
      },

      scoreTextStyle:{ 
        fontWeight: 'bold', 
        textAlign:"right",
        fontSize:12,
        backgroundColor:"white",
        justifyContent:'flex-end',
        alignItems:'flex-end',
      },

    countryNameTextStyle: {
      fontWeight: 'bold',
      textAlign:"left",
      fontSize:12,
      backgroundColor:'white',
      justifyContent:'flex-start',
    },

    countryFlagStyle:{
      height:20,
      width:1,
      margin:5,
      marginRight:2,
      padding:2,
      paddingRight:3,
      flex:1,
      alignItems:'flex-end',
    },

    summaryContainer:{
      width:"100%",
      paddingLeft:2,
      margin:2,
      flexBasis:"2%",
      padding:2,
      flex:2,
      alignItems:"flex-start",
      flexWrap:'wrap',
    },

    summaryText:{
      fontWeight: 'bold',
      textAlign:"left",
      fontSize:12,
      color:"green",
      backgroundColor:'white',
      margin:2,
      padding:1,
      paddingLeft:4,
      alignItems:"center",
    },

    dateAndStatusContainer:{
      flexDirection:'row',
      padding:2,
      width:'100%',
    },

    manOfTheMatchContainer:{
      flexDirection:'row',
      width:'90%',
      padding:2,
      backgroundColor:'white'
    },

    statusText:{
      fontWeight:'bold', 
      margin:2,
      fontSize:12,
      textAlign:'left',
      color:'green',
    },

    dateTimeText:{
      fontWeight:'bold', 
      margin:2,
      fontSize:12,
      textAlign:'left',
      width:"100%",
    },

    manOfTheMatchText:{
      fontWeight:'bold', 
      margin:2,
      fontSize:12,
      textAlign:'left',
    },

    manOfTheMatchNameText:{
      fontWeight:'bold', 
      margin:2,
      fontSize:12,
      color:'green',
      textAlign:'left',
    },
  
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
  }
);

export default LiveScoreInfo;