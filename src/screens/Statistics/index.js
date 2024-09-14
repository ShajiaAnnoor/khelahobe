// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View ,ScrollView} from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory';
import RunrateChart from './RunrateChart/index';
import RunChart from './RunChart/index';
import PieChartOfRun from './PieChartOfRun/index';
import Test from './Test/index';
import Example from "./ExampleVictory";
import BarChartOfOvervsRun from './BarChartOfOvervsRun';
import PartnershipChart from './Partnership/index';
import Pie from './Test2/index';
import PieChartOfWicket from './PieChartOfWicket';
import PieChartOfRunsByBowler from './PieChartOfRunsByBowler';
import PieChartOfRunsByBatters from './pieChartOfRunsByBatters';
import RunsVsOversChart from './RunsVsOversChart';
import Te from './Te';
import { getBattingInnings, getBowlerRunsGiven, getBowlingInnings, getBowlingInningsBar, getPartnerShipStats, getRunRate1, getRunsPerOver, getWorms1 } from '../../../redux/reducers';
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

const Statistics = ({slug}) => {
  const bowlinginnings = `\xa0বোলিং ইনিংস`; //To add space use \xa0
  const battinginningsString = `\xa0ব্যাটিং ইনিংস`; //To add space use \xa0

  const partnerships = useSelector(
      state => getPartnerShipStats(state, slug)
  );
  const battingInnings = useSelector(
      state => getBattingInnings(state, slug)
  );
  const runsGiven = useSelector(
      state => getBowlerRunsGiven(state, slug)
  );
  const bowlerPie = useSelector(
      state => getBowlingInnings(state, slug)
  );
  const bowlerBar = useSelector(
      state => getBowlingInningsBar(state, slug)
  );
  const runsPerover = useSelector(
      state => getRunsPerOver(state, slug)
  ).runsPerOver;
  const runRate = useSelector(
      state => getRunRate1(state, slug)
  ).runsPerOver;
  const worms = useSelector(
      state => getWorms1(state, slug)
  ).runsPerOver;

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
        <Pie/>
        <PieChartOfWicket data={bowlerPie}/>
        <PieChartOfRunsByBowler/>
        <PieChartOfRunsByBatters/>
        {/*<Te/>*/}
        <RunsVsOversChart/>
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
