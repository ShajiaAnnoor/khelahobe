import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import BattingInningsOfTeam1 from './BattingInningsOfTeam1';

const PieChartOfRunsByBatters = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>রানের পাই চার্ট</Text>
      {data[0] && <>   
        <Text style={styles.subHeadline}>{data[0].inningsName} ব্যাটিং ইনিংস</Text>
        <BattingInningsOfTeam1 data={data[0]}/>
      </>
      }
      {data[1] && <>   
        <Text style={styles.subHeadline}>{data[1].inningsName} ব্যাটিং ইনিংস</Text>
        <BattingInningsOfTeam1 data={data[1]}/>
      </>
      }
      {data[2] && <>   
        <Text style={styles.subHeadline}>{data[2].inningsName} ব্যাটিং ইনিংস</Text>
        <BattingInningsOfTeam1 data={data[2]}/>
      </>
      }
      {data[3] && <>   
        <Text style={styles.subHeadline}>{data[3].inningsName} ব্যাটিং ইনিংস</Text>
        <BattingInningsOfTeam1 data={data[3]}/>
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

export default PieChartOfRunsByBatters;



