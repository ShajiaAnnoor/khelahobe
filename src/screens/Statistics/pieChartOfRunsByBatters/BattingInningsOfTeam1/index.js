import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { VictoryPie, LineSegment } from 'victory-native';
import { VictoryBar, VictoryChart, VictoryAxis,VictoryTheme,VictoryLine, VictoryLabel, VictoryGroup } from 'victory-native';


const BattingInningsOfTeam1 = ({data}) => {
  
  console.log(data);
  // Sample data for the pie chart
  /*
  const data = [
    { x: 'Sakib Al Hasan', y: 35 },
    { x: 'Tarif Ezaz', y: 40 },
    { x: 'Mushfiqur Rahim', y: 125 },
    { x: 'Mahmudullah Riad', y: 105 },
    { x: 'Nazmul Hossain Shanto', y: 95 },
    { x: 'Tamim Iqbal', y: 50 },
    { x: 'Taskin Ahmed', y: 50 },
    { x: 'Mustafizur Rahman', y: 5 },
    { x: 'Rubel Hossain', y: 50 },
    { x: 'Mashrafi Bin Mortaza', y: 50 },
    { x: 'Ebadot Hossain', y: 50 },
  ];
  */
  return (
    <View style={styles.container}>
      <VictoryPie
        radius={70}
        data={data.batting}
        
        labelPosition = {"centroid"}
        labelPlacement={({ index }) => index
  ? "parallel"
  : "vertical"
}
      labelIndicator={<LineSegment style = {{stroke:"black", strokeDasharray:1,fill: "none",}}/>}
      labelIndicatorInnerOffset={5}
      labelIndicatorOuterOffset={10}
      
        labels={({ datum }) => `${datum.x}(${datum.y} runs)`}
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
    //backgroundColor: 'gray',
    
  },
});

export default BattingInningsOfTeam1;



