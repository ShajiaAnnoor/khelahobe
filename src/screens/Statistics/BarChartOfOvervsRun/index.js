
import React from 'react';
import { View, Dimensions, ScrollView, Text } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryGroup } from 'victory-native';

const screenWidth = Dimensions.get('window').width;

const BarChartOfOvervsRun = () => {
  const team1Data = [
    { over: 1, runs: 5, wickets: 0 },
    { over: 2, runs: 8, wickets: 1 },
    { over: 3, runs: 10, wickets: 1 },
    { over: 4, runs: 15, wickets: 2 },
    { over: 5, runs: 20, wickets: 2 },
  ];

  const team2Data = [
    { over: 1, runs: 7, wickets: 0 },
    { over: 2, runs: 9, wickets: 1 },
    { over: 3, runs: 12, wickets: 1 },
    { over: 4, runs: 18, wickets: 2 },
    { over: 5, runs: 1, wickets: 2 },
  ];

  const formattedData = team1Data.map((item, index) => ({
    over: `Over ${item.over}`,
    team1Runs: item.runs,
    team2Runs: team2Data[index].runs,
    team1Wickets: item.wickets,
    team2Wickets: team2Data[index].wickets,
  }));

  return (
	<ScrollView>
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
			<VictoryChart domainPadding={20} width={screenWidth}>
				<VictoryAxis
					tickValues={formattedData.map(d => d.over)}
					style={{ tickLabels: { fontSize: 10, padding: 5 } }}
				/>
				<VictoryAxis
					dependentAxis
					style={{ tickLabels: { fontSize: 10, padding: 5 } }}
				/>

				<VictoryGroup offset={20} colorScale={["blue", "red"]}>
					<VictoryBar
						data={formattedData}
						x="over"
						y="team1Runs"
						barWidth={20}
						labels={({ datum }) => datum.team1Wickets}
						//labels={({ datum }) => `y: ${datum.team2Wickets}`}
						labelComponent={<VictoryLabel dy={0} style={{ fill: "blue", fontSize: 10 }} />}
					/>
					<VictoryBar
						data={formattedData}
						x="over"
						y="team2Runs"
						barWidth={20}
						//labels={({ datum }) => datum.team2Wickets}
						labels={({ datum }) => `${datum.team2Wickets}`}
						labelComponent={<VictoryLabel dy={0} style={{ fill: "red", fontSize: 10 }} />}
					/>
				</VictoryGroup>
  
			</VictoryChart>
		</View>
	</ScrollView>
  );
};

export default BarChartOfOvervsRun;
