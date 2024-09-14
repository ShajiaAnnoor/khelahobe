import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { VictoryPie, LineSegment } from 'victory-native';
import { VictoryBar, VictoryChart, VictoryAxis,VictoryTheme,VictoryLine, VictoryLabel, VictoryGroup } from 'victory-native';
import BattingInningsOfTeam1 from './BattingInningsOfTeam1';
import BattingInningsOfTeam2 from './BattingInningsOfTeam2';

const PieChartOfRunsByBatters = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>রানের পাই চার্ট</Text>
      <Text style={styles.subHeadline}>পাকিস্তান ব্যাটিং ইনিংস</Text>
      <BattingInningsOfTeam1/>
      <Text style={styles.subHeadline}>বাংলাদেশ ব্যাটিং ইনিংস</Text>
      <BattingInningsOfTeam2/>
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

export default PieChartOfRunsByBatters;



