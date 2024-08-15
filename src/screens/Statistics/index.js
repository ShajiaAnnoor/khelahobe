// App.js
import React from 'react';
import { StyleSheet, View ,ScrollView} from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory';
import RunrateChart from './RunrateChart/index';
import RunChart from './RunChart/index';
import PieChartOfRun from './PieChartOfRun/index';
import Test from './Test/index';
import Example from "./ExampleVictory";
import BarChartOfOvervsRun from './BarChartOfOvervsRun';
import PartnershipChart from './Partnership/index';
// Sample data for runs scored per over
const runRateData = [
  { over: 1, runs: 4 },
  { over: 2, runs: 3 },
  { over: 3, runs: 5 },
  { over: 4, runs: 6 },
  { over: 5, runs: 7 },
  { over: 6, runs: 2 },
  { over: 7, runs: 8 },
  { over: 8, runs: 5 },
  { over: 9, runs: 10 },
  { over: 10, runs: 12 }
];

const Statistics = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      
         <RunrateChart/>
          <RunChart/>
          <Test/>
    <PieChartOfRun/>
{/*      <Example />*/}
        <BarChartOfOvervsRun />
        <PartnershipChart/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Statistics;
