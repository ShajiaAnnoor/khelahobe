import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import BattingInningsOfTeam1 from './BattingInningsOfTeam1';

const PieChartOfRunsByBatters = ({data}) => {
  const first_innings = 0 ; 
  const second_innings = 1 ; 
  const third_innings = 2 ; 
  const fourth_innings = 3 ; 

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>রানের পাই চার্ট</Text>
      {data[first_innings] && <>   
        <Text style={styles.subHeadline}>{data[first_innings].inningsName} ব্যাটিং ইনিংস</Text>
        <BattingInningsOfTeam1 data={data[first_innings]}/>
      </>
      }
      {data[second_innings] && <>   
        <Text style={styles.subHeadline}>{data[second_innings].inningsName} ব্যাটিং ইনিংস</Text>
        <BattingInningsOfTeam1 data={data[second_innings]}/>
      </>
      }
      {data[third_innings] && <>   
        <Text style={styles.subHeadline}>{data[third_innings].inningsName} ব্যাটিং ইনিংস</Text>
        <BattingInningsOfTeam1 data={data[third_innings]}/>
      </>
      }
      {data[fourth_innings] && <>   
        <Text style={styles.subHeadline}>{data[fourth_innings].inningsName} ব্যাটিং ইনিংস</Text>
        <BattingInningsOfTeam1 data={data[fourth_innings]}/>
      </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:'#d3d3d3',
    borderTopWidth:1,
   // marginBottom:10
    backgroundColor:'#FFFF'
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

export default PieChartOfRunsByBatters;