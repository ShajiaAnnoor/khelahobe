import React from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryLine, VictoryScatter, VictoryLegend, VictoryTheme } from 'victory-native';

const RunComparisonChart = ( 
  {data}
) => {
  console.log(data);
  const dataA = [
    { over: 1, runs: 6 },
    { over: 2, runs: 2 },
    { over: 3, runs: 8 },
    { over: 4, runs: 25 },
    { over: 5, runs: 30 },
    { over: 6, runs: 37 },
    { over: 7, runs: 40 },
    { over: 8, runs: 47 },
    { over: 9, runs: 52 },
    { over: 10, runs: 60 }
  ];
  
  const dataB = [
    { over: 1, runs: 5 },
    { over: 2, runs: 10 },
    { over: 3, runs: 15 },
    { over: 4, runs: 23 },
    { over: 5, runs: 28 },
    { over: 6, runs: 35 },
    { over: 7, runs: 38 },
    { over: 8, runs: 42 },
    { over: 9, runs: 48 },
    { over: 10, runs: 55 }
  ];
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <VictoryChart
        theme={VictoryTheme.material}
        domain={{ x: [0, Math.max(...dataA.map(d => d.over), ...dataB.map(d => d.over))], y: [0, Math.max(...dataA.map(d => d.runs), ...dataB.map(d => d.runs))] }}
      >
        {/* Legend */}
        <VictoryLegend 
          x={100} 
          y={10}
          orientation="horizontal"
          gutter={20}
          data={[
            { name: "Team A", symbol: { fill: "#c43a31" } },
            { name: "Team B", symbol: { fill: "#2a9df4" } }
          ]}
        />

        {/* Line Chart for Team A */}
        <VictoryLine
          data={dataA}
          x="over"
          y="runs"
          interpolation="natural"
          style={{
            data: { stroke: "#c43a31", strokeWidth: 2 },
          }}
        />

        {/* Scatter Plot for Team A */}
        <VictoryScatter
          data={dataA}
          x="over"
          y="runs"
          interpolation="natural"
          size={5}
          style={{
            data: { fill: "#c43a31" }
          }}
        />

        {/* Line Chart for Team B */}
        <VictoryLine
          data={dataB}
          x="over"
          y="runs"
          style={{
            data: { stroke: "#2a9df4", strokeWidth: 2 },
          }}
        />

        {/* Scatter Plot for Team B */}
        <VictoryScatter
          data={dataB}
          x="over"
          y="runs"
          size={5}
          style={{
            data: { fill: "#2a9df4" }
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default RunComparisonChart;
