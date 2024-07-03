import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { VictoryChart, VictoryBoxPlot, VictoryAxis, VictoryTheme } from 'victory-native';

const screenWidth = Dimensions.get('window').width;

const data = [
  {
    partnership: 'P1',
    batter1Runs: 30,
    batter2Runs: 20,
    batter1Name: 'Batter 1A',
    batter2Name: 'Batter 1B',
  },
  {
    partnership: 'P2',
    batter1Runs: 10,
    batter2Runs: 40,
    batter1Name: 'Batter 2A',
    batter2Name: 'Batter 2B',
  },
  {
    partnership: 'P3',
    batter1Runs: 50,
    batter2Runs: 25,
    batter1Name: 'Batter 3A',
    batter2Name: 'Batter 3B',
  },
  {
    partnership: 'P4',
    batter1Runs: 35,
    batter2Runs: 15,
    batter1Name: 'Batter 4A',
    batter2Name: 'Batter 4B',
  },
];

const formattedData = data.map((d) => ({
  partnership: d.partnership,
  x: `${d.batter1Name} & ${d.batter2Name}`,
  y: [0, d.batter1Runs, d.batter1Runs + d.batter2Runs, d.batter1Runs + d.batter2Runs],
}));

const PartnershipChart = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Run Partnerships</Text>
      <VictoryChart
        width={screenWidth - 32}
        height={200}
        domainPadding={{ x: [10, 10], y: 20 }}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, padding: 5 },
          }}
        />
        <VictoryBoxPlot
          horizontal
          data={formattedData}
          x="x"
          y="y"
          style={{
            min: { stroke: '#1f77b4' },
            max: { stroke: '#ff7f0e' },
            q1: { fill: '#1f77b4' },
            q3: { fill: '#ff7f0e' },
            median: { stroke: 'white', strokeWidth: 2 },
          }}
          whiskerWidth={20}
          boxWidth={20}
        />
      </VictoryChart>
      {data.map((item, index) => (
        <View key={index} style={styles.legendItem}>
          <Text style={styles.legendText}>{item.partnership}</Text>
          <Text style={[styles.legendText, { color: '#1f77b4' }]}>
            {item.batter1Name}: {item.batter1Runs}
          </Text>
          <Text style={[styles.legendText, { color: '#ff7f0e' }]}>
            {item.batter2Name}: {item.batter2Runs}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  legendText: {
    fontSize: 14,
  },
});

export default PartnershipChart;
