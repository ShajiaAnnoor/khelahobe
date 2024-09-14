import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryLegend, VictoryScatter } from 'victory-native';

const RunVsOversChart = () => {
  // Sample data for Team A and Team B
  const teamAData = [
    { overs: 1, runs: 5 },
    { overs: 2, runs: 10 },
    { overs: 3, runs: 15 },
    { overs: 4, runs: 20 },
    { overs: 5, runs: 25 },
    // Add more data points for Team A as needed
  ];

  const teamBData = [
    { overs: 1, runs: 7 },
    { overs: 2, runs: 14 },
    { overs: 3, runs: 22 },
    { overs: 4, runs: 18 },
    { overs: 5, runs: 30 },
    // Add more data points for Team B as needed
  ];

  return (
    <View style={styles.container}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis
          tickFormat={(x) => `Over ${x}`}
          label="Overs"
          style={{
            axisLabel: { padding: 30 },
            tickLabels: { angle: -45, textAnchor: 'end' }
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(y) => `${y} Runs`}
          label="Runs"
          style={{
            axisLabel: { padding: 40 },
          }}
        />
        <VictoryLine
          data={teamAData}
          x="overs"
          y="runs"
          interpolation="natural" // Apply Bezier curve
          style={{
            data: { stroke: "#c43a31", strokeWidth: 2 },
            parent: { border: "1px solid #ccc" }
          }}
          labels={({ datum }) => datum.runs}
        />
        <VictoryLine
          data={teamBData}
          x="overs"
          y="runs"
          interpolation="natural" // Apply Bezier curve
          style={{
            data: { stroke: "#4a90e2", strokeWidth: 2 },
            parent: { border: "1px solid #ccc" }
          }}
          labels={({ datum }) => datum.runs}
        />
         <VictoryScatter
          data={teamAData}
          x="over"
          y="runs"
          size={5}
          style={{
            data: { fill: "#c43a31" }
          }}
        />
        <VictoryLegend
          x={125}
          y={30}
          orientation="horizontal"
          gutter={20}
          data={[
            { name: "Team A", symbol: { fill: "#c43a31" } },
            { name: "Team B", symbol: { fill: "#4a90e2" } }
          ]}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default RunVsOversChart;
