import { StatusBar } from 'expo-status-bar';
import React, { 
  useState,  
} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
} from 'react-native';
import _ from "lodash";
import uuid from 'react-native-uuid';
import { dfs } from '../../../API/utils';

export default function App({
	batting,
	didnotbat,
	extras,
	total,
	fow,
	out,
	over,
}) {
  
  const [ columns ] = [
    "ব্যাটার",
    "বিস্তারিত​",
    "রান",
    "বল",
    "চার",
    "ছক্কা",
    "স্ট্রাইক রেট",
  ];

  const tableHeader = () => (
    <View style={styles.tableHeader}>
        <View style={{...styles.columnRowName,}}>
            <Text style={{...styles.columnRowNameText}}>{columns[0]}</Text>
        </View>
        <View style={{...styles.columnRowDetail}}>
            <Text style={styles.columnRowDetailText}>{columns[1]}​</Text>
        </View>
        <View style={styles.columnRowNumberItems}>
            <Text style={styles.columnRowNumberItemsText}>{columns[2]}</Text>
        </View>
        <View style={styles.columnRowNumberItems}>
            <Text style={styles.columnRowNumberItemsText}>{columns[3]}</Text>
        </View>
        <View style={styles.columnRowNumberItems}>
            <Text style={styles.columnRowNumberItemsText}>{columns[4]}</Text>
        </View>
        <View style={styles.columnRowNumberItems}>
            <Text style={styles.columnRowNumberItemsText}>{columns[5]}</Text>
        </View>
        <View style={styles.columnRowNumberItems}>
            <Text style={styles.columnRowNumberItemsText}>{columns[6]}</Text>
        </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={batting}
        style={{width:"100%",flex:1,flexDirection:'column',backgroundColor:'green'}}
        keyExtractor={(item, index) => uuid.v4()}
        ListHeaderComponent={tableHeader}
        renderItem={({item, index})=> {
          return (
            <View style={{...styles.eachTableRowView, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white"}}>
              <View style={styles.columnRowName}>
                <Text style={{...styles.columnRowNameText, fontWeight:"bold"}}>
                  {item.name}
                </Text>
              </View>
              <View style={styles.columnRowDetail}>
                <Text style={styles.columnRowDetailText}>
                  {(item.notout && 'নট আউট') || item.wicketText || 'আউট'}
                </Text>
              </View>
              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {item.runs}
                </Text>
              </View>
              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {item.balls}
                </Text>
              </View>
              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {item.fours}
                </Text>
              </View>
              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {item.sixes}
                </Text>
              </View>
              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {item.sr === '-১' ? '-' : `${item.sr}`}
                </Text>
              </View>
            </View>
            
          )
        }}
      />

<View style={styles.inningsContainer}>


<View style={styles.fallOfWicketRowView}>

 <View style={styles.fallOfWicketTitle}>
    <Text style={{...styles.fallOfWicketTitleText, fontWeight:"bold"}}>উইকেটের পতন:</Text>
 </View>
 
  <View style={styles.fallOfWicketValue}>
    {
      fow
      &&
      fow.map(
        (
          f, index
        ) => {
          let invalidOver = (f.over === 'None' && true) || false;
          let name = ""
          name = (index > 0 && !invalidOver && `,(${f.name}, ${dfs(f.over)} ওভার)`) || `(${f.name})`;
          if( index == 0 ) {
            name = (!invalidOver && `(${f.name}, ${dfs(f.over)} ওভার)`) || `(${f.name})`;
          } else {
            name = (!invalidOver && `,(${f.name}, ${dfs(f.over)} ওভার)`) || `(${f.name})`;
          }
          return (
            <Text
              style={styles.fallOfWicketValueText}
              key={uuid.v4()}
            >
            {index > 0 ? ',' : ''}{f.wicket}-{dfs(f.run)} {name}
            </Text>
          )
        }
      )
	  }
  </View>
</View>

<View style={{...styles.eachTableRowView, backgroundColor:'#FFFF'}}>
  <View style={styles.titleForExtra}>
    <Text style={{...styles.titleForExtraText, fontWeight:"bold"}}>অতিরিক্ত</Text>
  </View>
  <View style={styles.valueForExtra}>
    <Text style={styles.valueForExtraText}>{extras}</Text>
  </View>
</View>

<View style={{...styles.eachTableRowView, backgroundColor:'#FFFF',}}>
  <View style={styles.titleForRun}>
    <Text style={{...styles.titleForRunText, fontWeight:"bold"}}>মোট রান</Text>
  </View>
  <View style={styles.valueForRun}>
    <Text style={styles.valueForRunText}>{total}{out === '১০' ? ' অল আউট' : `/${out}`} ({over} ওভার)</Text>
  </View>
</View> 

 <View style={{...styles.eachTableRowView, backgroundColor:'#FFFF'}}>
  <View style={styles.yetToBatTitle}>
    <Text style={{...styles.yetToBatTitleText, fontWeight:"bold"}}>এখনো ব্যাট করেন নি:</Text>
  </View>
  <View style={styles.yetToBatValue}>
    <Text style={styles.yetToBatValueText}>{
							didnotbat
							&&
							didnotbat.map(
								(
									d, index
								) => (
									<Text key={uuid.v4()}>
										{index > 0 ? ', ' : ''}{d}
									</Text>
								)
							)
						}</Text>
  </View>
</View>   
</View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column",
  },

  tableHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    flex:1,
    flexWrap:'wrap',
    height:"10%",
    width:"100%",
  },
  
  columnRowNameText: {
    fontWeight: 'bold',
    textAlign:"left",
    fontSize:10,
    justifyContent:'center',
    flexWrap:'wrap',        
  },

  columnRowName: {
    alignItems:"center",
    marginLeft:8,
    padding:2,
    justifyContent:'space-evenly',
    flexWrap:"wrap", 
    flex:8,
  },

  columnRowDetailText: {
   fontWeight: 'bold',
   textAlign:"left",
   fontSize:10,
   flexWrap:'wrap',
   padding:2,
  },

  columnRowDetail: {
    padding:2,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    flex:6,
  },

  columnRowNumberItems: {
    height:35,
    padding:2,
    justifyContent:'center',
    alignItems:"center",
    flex:3,
  },

  columnRowNumberItemsText: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:10,  
    flexWrap:'wrap',
    padding:4,
    flex:2,
  },

  eachTableRowView:{
  flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex:1,
    flexWrap:'wrap',
    width:"100%",
  },

  inningsContainer: {
    flex:2,
    position:'relative',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
    margin:2,
    padding:4,
    width:'100%',
    flexGrow:0,
    flexBasis:"35%",
  },
  
 fallOfWicketRowView:{
    flexDirection:'column',
    padding:2,
    margin:2,
    justifyContent:'space-evenly',
    backgroundColor:'#FFFF',
    width:"100%",
  },
  
  fallOfWicketValue:{
    backgroundColor:'#FFFF',
    height:"90%",
    margin:2,
    padding:2,
    flexDirection:"row",
    justifyContent:'flex-start',
    flexWrap:"wrap", 
    flex:9,
  },
  

  fallOfWicketValueText:{
   fontWeight: 'bold',
   textAlign:"left",
   fontSize:10,
   backgroundColor:'white',
   justifyContent:'center',
   alignContent:'center',
   flexWrap:'nowrap',
   padding:1,
   margin:1,
   alignItems:"center",
  },

  fallOfWicketTitle: {
    backgroundColor:'green',
    height:'10%',
    margin:1,
    padding:1,
    flexWrap:"nowrap", 
    flex:3,
  },

  fallOfWicketTitleText: {
    fontWeight: 'bold',
    textAlign:"left",
    fontSize:10,
    backgroundColor:'white',
    justifyContent:'center',
    alignContent:'center',
    flexWrap:'wrap',  
    margin:1,
    padding:1,      
  },

  valueForExtra:{
    height:35,
    margin:2,
    padding:2,
    justifyContent:'flex-start',
    flexWrap:"nowrap", 
    flex:8,
  },
  
  valueForExtraText:{
    height:"100%",
    fontWeight: 'bold',
    textAlign:"right",
    fontSize:10,
    justifyContent:'center',
    flexWrap:'wrap',
    padding:4,
    margin:2,
    alignItems:"center",
  },

  titleForExtra: {
    height:35,
    margin:2,
    padding:2,
    justifyContent:'space-between',
    flexWrap:"wrap", 
    flex:2,
  },

  titleForExtraText: {
    fontWeight: 'bold',
    textAlign:"left",
    fontSize:10,
    justifyContent:'center',
    flexWrap:'wrap',  
    padding:4,      
  },

  valueForRun:{
    height:35,
    margin:2,
    padding:2,
    justifyContent:'flex-start',
    flexWrap:"nowrap", 
    flex:8,
  },
  
  valueForRunText:{
    height:"100%",
   fontWeight: 'bold',
   textAlign:"right",
   fontSize:10,
   justifyContent:'center',
   flexWrap:'wrap',
   padding:4,
   margin:2,
   alignItems:"center",
  },

  titleForRun: {
    height:35,
    margin:2,
    padding:2,
    justifyContent:'space-between',
    flexWrap:"wrap", 
    flex:2,
  },

  titleForRunText: {
    width:"98%",
    height:"100%",
    fontWeight: 'bold',
    textAlign:"left",
    fontSize:10,
    justifyContent:'center',
    flexWrap:'wrap',  
    margin:2,
    padding:4,      
  },

  yetToBatTitle:{
    padding:1,
    justifyContent:'space-between',
    flexWrap:"wrap", 
    flex:5,
  },
  
  yetToBatTitleText:{
     width:"98%",
    fontWeight: 'bold',
    textAlign:"right",
    fontSize:10,
    justifyContent:'center',
    flexWrap:'wrap',  
  },

  yetToBatValue: {
    justifyContent:'flex-start',
    flexWrap:"nowrap", 
    flex:8,
  },

  yetToBatValueText: {
    height:"100%",
   fontWeight: 'bold',
   textAlign:"left",
   fontSize:10,
   justifyContent:'center',
   flexWrap:'wrap',
   padding:4,
   margin:2,
   alignItems:"center",      
  }, 

});