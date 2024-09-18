import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { VictoryPie, LineSegment } from 'victory-native';
import { VictoryBar, VictoryChart, VictoryAxis,VictoryTheme,VictoryLine, VictoryLabel, VictoryGroup } from 'victory-native';
import Partnership from './Partnership/index';

const AllPartnership = ({data}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>পার্টনারশিপের চার্ট</Text>
      {data[0]&&<>
        <Text style={styles.subHeadline}> {data[0].inningsName} পার্টনারশিপ</Text>
        <Partnership data={data[0]}/>
      </>}
      
      {data[1] && <>
        <Text style={styles.subHeadline}>{data[1].inningsName} পার্টনারশিপ</Text>
        <Partnership data={data[1]}/>
        </>
      }

      {data[2] && <>
        <Text style={styles.subHeadline}>{data[2].inningsName} পার্টনারশিপ</Text>
        <Partnership data={data[2]}/>
        </>
      }

      {data[3] && <>
        <Text style={styles.subHeadline}>{data[3].inningsName} পার্টনারশিপ</Text>
        <Partnership data={data[3]}/>
        </>
      }
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:'teal',
    borderTopWidth:1,
    //borderBottomWidth:6,
    //flexDirection:"row",
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'gray',
    //height:'10%'
  },

  headline: {
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    padding:12,
  },

  subHeadline: {
    textAlign:'center',
    fontSize:15,
    fontWeight:'800',
    paddingBottom:12,
    paddingTop:8
  }
});

export default AllPartnership;



