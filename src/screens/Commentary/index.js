import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';


const CricketCommentary = () => {
  

  const data = [
    { over: 22.1,status:'Four', text: 'Beautiful cover drive, no run.' },
    { over: 2.2, status:'2',text: 'Quick single to mid-off.' },
    { over: 2.3, status:'0',text: 'Bouncer! The batter ducks under it.' },
    { over: 2.4, status:'six', text: 'Edged, but safe! Single taken.' },
    { over: 3.1, status:'0', text: 'Full toss! Four runs.' },
    { over: 39.2,status:'1', text: 'Dot ball to end the over.' },
  ];

  // Function to add the next over commentary
  const addNextOver = () => {
    if (currentOver === 1) {
      setOvers([...overs, ...nextOverCommentary]);
      setCurrentOver(2); // Move to the next over
    }
  };

  return (
    <View style={styles.container1}>
      <Text style={styles.header}>Live Cricket Commentary</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
        
          <View style={styles.container}>
            <View style={styles.ballStat}>
               <Text style={styles.overStyle}>{item.over}</Text> 
               <Text style={styles.statStyle}>{item.status}</Text>
            </View>
            <Text>{item.text}</Text>
        </View>
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  overStyle:{
   // flex:2,
    //backgroundColor:'red',
    
    width:45,
    height:30,
    paddingHorizontal:8,
    textAlign:'center',
    //flexWrap:'wrap',
  },
  statStyle:{
    backgroundColor:'teal',
   // flex:2,
    textAlign:'center',
    fontSize:12,
    width:45,
    height:30,
    padding:5,
    //flexWrap:'noWrap'
    borderRadius:8,
    //paddingHorizontal:10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
   container: {
      //flex: 1,
      display:'flex',
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      //backgroundColor: 'pink',
      borderColor:'gray',
      //borderWidth:1,
      borderTopWidth:1,
      borderBottomWidth:1,
      padding:2,
      paddingVertical:6,
      //borderRadius:10,

      //backgroundColor:"#e9edc9",
    },

    ballStat: {
        display:'flex',
        //flex:1,
        flexDirection:"column",
        justifyContent:"flex-start",
        //backgroundColor:'pink',
        alignItems:'flex-start',
    },
  commentaryText: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default CricketCommentary;
