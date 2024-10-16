import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';


const BattingInningsOfTeam2 = ()=> {
  // Sample data for the chart
  const data = [
    {
      name: 'Bitcoin',
      population: 63,
      color: 'orange'
    },
    {
      name: 'Dogecoin',
      population: 9,
      color: 'gold'
    },
    {
      name: 'Ethereum',
      population: 19,
      color: 'darkblue'
    },
    {
      name: 'Tether',
      population: 6,
      color: 'green'
    },
    {
      name: 'Polygon',
      population: 3,
      color: 'purple'
    },
];

  return (
    <View >
       <PieChart
            data={data}
             width={390}
            height={200}
            chartConfig={{
                color: (opacity = 3) => `rgba(255, 255, 255, ${opacity})`
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
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

export default BattingInningsOfTeam2;
