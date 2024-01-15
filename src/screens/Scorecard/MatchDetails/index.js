import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"

export default function App({
	days,
	matchStatus,
	matchType,
	matchnumber,
	playerOfTheMatch,
	reserve,
	result,
	season,
	series,
	stadium,
	toss,
	tvUmpires,
	umpires,
}) {
  const [ columns, setColumns ] = useState([
    "বোলার",	
    "ওভার",	
    "মেইডেন",	
    "রান",	
    "উইকেট",	
    "ওয়াইড",	
    "নোবল",	
    "ইকোনমি",
  ])
  
  const [ direction, setDirection ] = useState(null)
  const [ selectedColumn, setSelectedColumn ] = useState(null)
  const [ details, setDetails ] = useState([
    {
      Name: "সিরিজ",
      Value:series,
     
    },
    {
        Name:"স্টেডিয়াম",
        Value:stadium,
    },
    {
        Name:"টস",
        Value:toss
    },
    {
        Name:"ম্যাচ সেরা খেলোয়াড়",
        Value: playerOfTheMatch
    },
    {
        Name:"ম্যাচ ফলাফল",
        Value:result
    },
    {
        Name:"ম্যাচ সংখ্যা",
        Value:matchnumber
    },
    {
        Name:"মৌসুম	",
        Value:season,
    },
    {
        Name:"খেলার সময়",
        Value:days,
    },
    {
        Name:"ম্যাচ দিন",
        Value:"১ নভেম্বর, ২০২১"
    },
    {
        Name:"ডেব্যু",
        Value:"",
    },
    {
        Name:"আম্পায়ার",
        Value:umpires,
    },
    {
        Name:"রিসার্ভ আম্পায়ার",
        Value:reserve,
    },
    {
        Name:"টিভি আম্পায়ার",
        Value:tvUmpires,
    },
  ])

  const tableHeader = () => (
    <View style={styles.tableHeader}>
                
          <Text style={{...styles.tableHeaderText,color:'white',}}>ম্যাচ বিবরণ</Text>
            
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={details}
        style={{width:"100%",flex:1,flexDirection:'column'}}
        keyExtractor={(item, index) => index+""}
        ListHeaderComponent={tableHeader}
        //stickyHeaderIndices={[0]}
        renderItem={({item, index})=> {
          return (
            <View style={{...styles.eachTableRowView, backgroundColor: index % 2 == 1 ? "white" : "#F0FBFC"}}>
                <View style={styles.rowItemName}>
                    <Text style={{...styles.rowItemNameText, fontWeight:"bold",}}>{item.Name}</Text>
                </View>
                <View style={styles.rowItemValue}>
                    <Text style={styles.rowItemValueText}>{item.Value}</Text>
                </View>
               
            </View>
          )
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:15,
    margin:2,
    padding:10,
    
  },
  tableHeader: {
    backgroundColor:'green',
    //borderTopEndRadius: 5,
   // borderTopStartRadius: 5,
    
    flexWrap:'nowrap',
    height:"10%",
    width:"100%",
   paddingTop:10,
   paddingBottom:10,
   paddingLeft:2,
    flex:3,
  },

  tableHeaderText:{
    color: "white",
    fontWeight:"bold",
    textAlign:'center',
  },

  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems:"center",
    flexWrap:"wrap",
  },

   rowItemName: {
    //flexDirection:'row',
    alignItems:"center",
    height:35,
    margin:2,
    padding:2,
    justifyContent:'center',
    flexWrap:"nowrap", 
    flex:3,
    flexShrink:1,
  },

  rowItemNameText: {
    width:"100%",
    height:"100%",
    fontWeight: 'bold',
    textAlign:"left",
    fontSize:10,
    paddingLeft:8,
    justifyContent:'center',
    flexWrap:'nowrap',
    alignContent:'center',
    flexDirection:'column',     
},

rowItemValue: {
    alignItems:"center",
    height:35,
    margin:2,
    padding:2,
    justifyContent:'center',
    flexWrap:"nowrap", 
    flex:7,
    flexShrink:1,
  },

  rowItemValueText: {
    width:"100%",
    height:"100%",
    fontWeight: 'bold',
    textAlign:"center",
    fontSize:10,
    justifyContent:'center',
    flexWrap:'nowrap',
    alignContent:'center',
    flexDirection:'column',     
},

  eachTableRowView: {
    flex:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    flexWrap:'wrap',
    height:"10%",
    width:"100%",
  },
});