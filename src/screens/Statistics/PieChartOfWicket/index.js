import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { VictoryPie, LineSegment } from 'victory-native';
import { VictoryBar, VictoryChart, VictoryAxis,VictoryTheme,VictoryLine, VictoryLabel, VictoryGroup } from 'victory-native';
import BowlingInningsOfteam1 from './BowlingInningsOfTeam1';
import BowlingInningsOfteam2 from './BowlingInningsOfTeam2';

const PieChartOfWicket = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>উইকেটের পাই চার্ট</Text>
      <Text style={styles.subHeadline}>ওয়েস্ট ইন্ডিজ বোলিং ইনিংস</Text>
      <BowlingInningsOfteam1 data={data[0]}/>
      <Text style={styles.subHeadline}>দক্ষিণ আফ্রিকা বোলিং ইনিংস</Text>
      <BowlingInningsOfteam2 data={data[0]}/>
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



