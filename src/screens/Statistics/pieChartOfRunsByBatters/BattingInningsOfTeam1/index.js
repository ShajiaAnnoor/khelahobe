import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryPie, LineSegment } from 'victory-native';
import { VictoryLabel } from 'victory-native';

const BattingInningsOfTeam1 = ({data}) => {
  
  console.log(data);

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
        colorScale={["#ff9999", "#66b3ff", "#99ff99"]}
        style={{
          labels: {            
            fontSize: 10,
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
    borderColor:'#d3d3d3',
    borderBottomWidth:1,
    height:250,
  },
});

export default BattingInningsOfTeam1;



