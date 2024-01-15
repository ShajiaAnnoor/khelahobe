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
  
  const [ columns, setColumns ] = useState([
    "ব্যাটার",
    "বিস্তারিত​",
    "রান",
    "বল",
    "চার",
    "ছক্কা",
    "স্ট্রাইক রেট",
  ]);
  /*
  const [ batting, setBatting ] = useState([
    {
      Name: "পাথুম নিশঙ্কা",
      Detail:"কট ওয়ার্নার",
      Run: 70,
      Ball:90,
      Four:10,
      Six:1,
      StrikeRate:177.78,
    },
    {
        Name: "পাথুম থুম নিশঙ্কা",
        Detail:"কট ডেভিড ওয়ার্নার বোল্ড প্যাট কামিন্স",
        Run: 107,
        Ball:90,
        Four:12,
        Six:2,
        StrikeRate:127.78,
    },
    {
        Name: "পাথুম নিশঙ্কা",
        Detail: "বোল্ড প্যাট কামিন্স",
        Run: 7,
        Ball:9,
        Four:1,
        Six:0,
        StrikeRate:77.78,
    },
    {
        Name: "পাথুম নিশঙ্কা",
        Detail: "বোল্ড প্যাট কামিন্স",
        Run: 7,
        Ball:9,
        Four:1,
        Six:0,
        StrikeRate:77.78,
    },
    {
        Name: "পাথুম নিশঙ্কা",
        Detail: "বোল্ড প্যাট কামিন্স",
        Run: 7,
        Ball:9,
        Four:1,
        Six:0,
        StrikeRate:77.78,
    },
  ])
  */

  const tableHeader = () => (
    <View style={styles.tableHeader}>
        <View style={{...styles.columnRowName,}}>
            <Text style={{...styles.columnRowNameText}}>ব্যাটার</Text>
        </View>
        <View style={{...styles.columnRowDetail}}>
            <Text style={styles.columnRowDetailText}>বিস্তারিত​ বিস্তারিত বিস্তারিত</Text>
        </View>
        <View style={styles.columnRowNumberItems}>
            <Text style={styles.columnRowNumberItemsText}>রান</Text>
        </View>
        <View style={styles.columnRowNumberItems}>
            <Text style={styles.columnRowNumberItemsText}>বল</Text>
        </View>
        <View style={styles.columnRowNumberItems}>
            <Text style={styles.columnRowNumberItemsText}>চার</Text>
        </View>
        <View style={styles.columnRowNumberItems}>
            <Text style={styles.columnRowNumberItemsText}>ছক্কা</Text>
        </View>
        <View style={styles.columnRowNumberItems}>
            <Text style={styles.columnRowNumberItemsText}>স্ট্রাইক রেট</Text>
        </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={batting}
        style={{width:"100%",flex:1,flexDirection:'column',backgroundColor:'green'}}
        keyExtractor={(item, index) => index+""}
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
              key={index}
            >
            {index > 0 ? ',' : ''}{f.wicket}-{dfs(f.run)} {name}
            </Text>
          )
        }
      )
	  }
   {/* <Text style={styles.fallOfWicketValueText}> ১-১২ (ক্রেগ স্পিয়ারম্যান, None ওভার), ২-১০৮ (স্টিফেন ফ্লেমিং, None ওভার), ৩-১৪১ (রজার টোজ, None ওভার), ৪-১৯৬ (ক্রিস কেয়ার্নস, None ওভার), ৫-২০৪ (নাথান অ্যাসলে, None ওভার), ৬-২১২ (ক্রিস হ্যারিস, None ওভার)</Text>*/}
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
									<Text key={index}>
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
   // backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop:80,
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
    //width:"98%",
    //height:"100%",
    fontWeight: 'bold',
    textAlign:"left",
    fontSize:10,
    //backgroundColor:'white',
    justifyContent:'center',
    flexWrap:'wrap',        
  },

  columnRowName: {
    //width:50,
    alignItems:"center",
   // backgroundColor:'green',
    height:35,
    margin:4,
    padding:4,
    justifyContent:'space-evenly',
    flexWrap:"wrap", 
    flex:3,
  },

  columnRowDetailText: {
   //height:"100%",
   fontWeight: 'bold',
   textAlign:"left",
   fontSize:8,
   //backgroundColor:'white',
   justifyContent:'center',
   flexWrap:'wrap',
   padding:2,
   alignItems:"center",
  },

  columnRowDetail: {
    //backgroundColor:'green',
    height:35,
    margin:4,
    padding:4,
    justifyContent:'flex-start',
    alignItems:'center',
    //flexWrap:"nowrap", 
    flex:6,
  },

  columnRowNumberItems: {
    //alignItems:"center",
    //backgroundColor:'yellow',
    height:35,
    //marginLeft:2,
    //marginRight:2,
    margin:3,
    padding:4,
    justifyContent:'center',
    //flexWrap:"wrap",
    alignItems:"center",
    flex:3,
  },

  columnRowNumberItemsText: {
   // width:"98%",
    //height:"100%",
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:8,
   // backgroundColor:'pink',
   // justifyContent:'center',
  
    flexWrap:'wrap',
    padding:4,
   // marginLeft:5,
    flex:2,
  },

  eachTableRowView:{
  /*flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    flexWrap:'wrap',
    height:"20%",
  width:"100%",*/
  flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
    flex:1,
    flexWrap:'wrap',
    height:"10%",
    width:"100%",
  },

  //////////////////////////////////

  inningsContainer: {
    flex:2,
   // top:1,
    //left:1,
    position:'relative',
    //backgroundColor: 'gray',
    flexDirection:'column',
    alignItems: 'center',
     justifyContent:'center',
    //paddingTop:15,
    margin:2,
    padding:4,
    width:'100%',
    flexGrow:0,
    //flexShrink: 8,
    flexBasis:"35%",
  },
  
 fallOfWicketRowView:{
    //flex:2,
    flexDirection:'column',
    //borderBottomEndRadius:20,
    //borderBottomStartRadius:20,
    padding:2,
    margin:2,
    justifyContent:'space-evenly',
    //alignSelf:"flex-end",
    backgroundColor:'#FFFF',

    //height:120,
    width:"100%",
  },

  /*eachTableRowView:{
    //flex:2,
    flexDirection:'row',
    //borderBottomEndRadius:20,
    //borderBottomStartRadius:20,
    padding:1,
    margin:2,
    justifyContent:'space-evenly',
    //alignItems:"flex-start",
    backgroundColor:'powderblue',

    height:"13%",
    width:"100%",
  },*/

  
  fallOfWicketValue:{
    backgroundColor:'#FFFF',
    height:"90%",
    margin:2,
    padding:2,
    //paddingBottom:9,
    flexDirection:"row",
    justifyContent:'flex-start',
    //alignContent:"center",
    flexWrap:"wrap", 
    flex:9,
   // flexBasis:'0%',
  },
  

  fallOfWicketValueText:{
   //height:'95%',
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
   // width:50,
    backgroundColor:'green',
    height:'10%',
    margin:1,
    padding:1,
    //justifyContent:'space-between',
    flexWrap:"nowrap", 
    flex:3,
  },

  fallOfWicketTitleText: {
    //width:"98%",
    //height:"90%",
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
    //backgroundColor:'green',
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
   //backgroundColor:'white',
   justifyContent:'center',
   flexWrap:'wrap',
   padding:4,
   margin:2,
   alignItems:"center",
  },

  titleForExtra: {
   // width:50,
    //backgroundColor:'green',
    height:35,
    margin:2,
    padding:2,
    justifyContent:'space-between',
    flexWrap:"wrap", 
    flex:2,
  },

  titleForExtraText: {
    //width:"98%",
    //height:"100%",
    fontWeight: 'bold',
    textAlign:"left",
    fontSize:10,
    //backgroundColor:'white',
    justifyContent:'center',
    flexWrap:'wrap',  
    //margin:2,
    padding:4,      
  },

  valueForRun:{
    //backgroundColor:'green',
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
   //backgroundColor:'white',
   justifyContent:'center',
   flexWrap:'wrap',
   padding:4,
   margin:2,
   alignItems:"center",
  },

  titleForRun: {
   // width:50,
    //backgroundColor:'green',
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
   // backgroundColor:'red',
    justifyContent:'center',
    flexWrap:'wrap',  
    margin:2,
    padding:4,      
  },


yetToBatTitle:{
    // width:50,
    //backgroundColor:'green',
    height:35,
    margin:2,
    padding:2,
    justifyContent:'space-between',
    flexWrap:"wrap", 
    flex:5,
  },
  

  yetToBatTitleText:{
     width:"98%",
    height:"100%",
    fontWeight: 'bold',
    textAlign:"right",
    fontSize:10,
    //backgroundColor:'white',
    justifyContent:'center',
    flexWrap:'wrap',  
    margin:2,
    padding:4, 
  },

  yetToBatValue: {
  //backgroundColor:'green',
    height:35,
    margin:2,
    padding:2,
    justifyContent:'flex-start',
    flexWrap:"nowrap", 
    flex:8,
  },

  yetToBatValueText: {
    height:"100%",
   fontWeight: 'bold',
   textAlign:"left",
   fontSize:10,
   //backgroundColor:'white',
   justifyContent:'center',
   flexWrap:'wrap',
   padding:4,
   margin:2,
   alignItems:"center",      
  }, 

});