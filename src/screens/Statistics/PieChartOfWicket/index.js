import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { VictoryPie, LineSegment } from 'victory-native';
import { VictoryBar, VictoryChart, VictoryAxis,VictoryTheme,VictoryLine, VictoryLabel, VictoryGroup } from 'victory-native';
import BowlingInningsOfteam1 from './BowlingInningsOfTeam1';
import BowlingInningsOfteam2 from './BowlingInningsOfTeam2';

const PieChartOfWicket = ({data}) => {
  //{data[0].inningsName}
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>উইকেটের পাই চার্ট</Text>
      {data[0]&&<>
        <Text style={styles.subHeadline}> {data[0].inningsName} বোলিং ইনিংস</Text>
        <BowlingInningsOfteam1 data={data[0]}/>
      </>}
      {data[1] && <>
        <Text style={styles.subHeadline}>{data[1].inningsName} বোলিং ইনিংস</Text>
        <BowlingInningsOfteam2 data={data[1]}/>
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:'teal',
    borderTopWidth:1,
    //borderBottomWidth:6,
    //flexDirection:"row",
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'gray',
    //height:'10%'
  },

  headline: {
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    padding:12,
  },

  subHeadline: {
    textAlign:'center',
    fontSize:15,
    fontWeight:'800',
    paddingBottom:12,
    paddingTop:8
  }
});

export default PieChartOfWicket;



