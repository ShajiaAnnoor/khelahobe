import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const RunrateChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        data: [4, 3, 5, 6, 8, 6, 8, 2, 10, 12],
        
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional

      },
      {
        data: [7, 1, 9, 2, 15, 9, 1, 20, 10, 22],
         color: (opacity = 1) => `rgba(110, 87, 24, ${opacity})` // optional
      },
    ],
  };

  return (
    <View >
      <LineChart
        data={data}
        width={350}
        height={220}
        withOuterLines={true}
        
        withVerticalLines={false}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          //labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: '3',
            strokeWidth: '7',
            //stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RunrateChart;
