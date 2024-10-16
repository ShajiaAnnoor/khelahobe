import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { VictoryPie, LineSegment } from 'victory-native';
import { VictoryBar, VictoryChart, VictoryAxis,VictoryTheme,VictoryLine, VictoryLabel, VictoryGroup } from 'victory-native';

const BowlingInningsOfteam1 = ({data}) => {
  // Sample data for the pie chart
  /*
  const data = [
    { x: 'Sakib Al Hasan', y: 1 },
    { x: 'Tarif Ezaz', y: 1 },
    { x: 'Taskin Ahmed', y: 2 },
    { x: 'Mustafizur Rahman', y: 2 },
    { x: 'Rubel Hossain', y: 2 },
    { x: 'Mashrafi Bin Mortaza', y: 1 },
    { x: 'Ebadot Hossain', y: 2 },
    
  ];
  */

  console.log(data);
  return (
    <View style={styles.container}>
      <VictoryPie
        radius={70}
        data={data.bowling}
        labelPosition = {"centroid"}
        labelPlacement={({ index }) => index
            ? "parallel"
            : "vertical"
        }
        labelIndicator={<LineSegment style = {{stroke:"black", strokeDasharray:1,fill: "none",}}/>}
        labelIndicatorInnerOffset={5}
        labelIndicatorOuterOffset={10}
        
        labels={({ datum }) => `${datum.name}(${datum.run} রান)`}
        labelComponent={<VictoryLabel angle={0} textAnchor="middle"/>}
        //labelPosition={"centroid"}
        colorScale={["#ff9999", "#66b3ff", "#99ff99"]}
        style={{
          labels: {
            
            fontSize: 10,
            //fill: '#000',
          },
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
    //backgroundColor: 'teal',
    borderColor:'#d3d3d3',
    borderBottomWidth:1,
    height:250,
  },
});

export default BowlingInningsOfteam1;



