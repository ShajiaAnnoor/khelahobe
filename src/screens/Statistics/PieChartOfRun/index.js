import React from 'react';
import { View, StyleSheet } from 'react-native';
import BattingInningsOfTeam1 from './BattingInningsOfTeam1/index';
import BattingInningsOfTeam2 from './BattingInningsOfTeam2/index';

const PieChartOfRun = () => {
  return (
    <View>
      <BattingInningsOfTeam1 />
      <BattingInningsOfTeam2/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default PieChartOfRun;

