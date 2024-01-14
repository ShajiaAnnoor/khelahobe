import { StatusBar } from 'expo-status-bar';
import React, { 
  useState, 
  useEffect,
} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash";
import { dfs } from '../../../API/utils';

export default function App({
	bowling,
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
  /*
  const [ pets, setPets ] = useState([
    {
      BowlerName: "মিচেল স্টার্ক",
      Over:4.0,
      Meiden:0,
      Run:27,
      Wicket:2,
      Wide:1,
      NoBall:0,
      Economy:6.75,
    },
    {
      BowlerName: "প্যাট প্যাট কামিন্স প্যাট ",
      Over:4.0,
      Meiden:0,
      Run:37,
      Wicket:2,
      Wide:2,
      NoBall:1,
      Economy:8.5,
    },
    {
      BowlerName: "প্যাট কামিন্স",
      Over:4.0,
      Meiden:0,
      Run:37,
      Wicket:2,
      Wide:2,
      NoBall:1,
      Economy:8.5,
    },
    {
      BowlerName:"গ্লেন ম্যাক্সওয়েল",
      Over:1.0,
      Meiden:0,
      Run:16,
      Wicket:0,
      Wide:1,
      NoBall:0,
      Economy:16,
    },
    {
      BowlerName: "মার্কাস স্টোইনিস",
      Over:1.0,
      Meiden:0,
      Run:16,
      Wicket:0,
      Wide:1,
      NoBall:0,
      Economy:16,
    },    
  ])
  */
  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc" 
    const sortedData = _.orderBy(pets, [column],[newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setPets(sortedData)
  }

  const tableHeader = () => (
    <View style={styles.tableHeader}>  
      <View style={{...styles.columnRowName}}>
          <Text style={{...styles.columnRowNameText,color:'white',}}>বোলার</Text>
      </View>
      <View style={{...styles.columnRowNumberItems}}>
          <Text style={{...styles.columnRowNumberItemsText,color:'white',}}>ওভার</Text>
      </View>
      <View style={styles.columnRowNumberItems}>
        <Text style={{...styles.columnRowNumberItemsText,color:'white',}}>মেইডেন</Text>
      </View>
      <View style={styles.columnRowNumberItems}>
        <Text style={{...styles.columnRowNumberItemsText,color:'white',}}>রান</Text>
      </View>
      <View style={styles.columnRowNumberItems}>
        <Text style={{...styles.columnRowNumberItemsText,color:'white',}}>উইকেট</Text>
      </View>
      <View style={styles.columnRowNumberItems}>
        <Text style={{...styles.columnRowNumberItemsText,color:'white',}}>ওয়াইড</Text>
      </View>
      <View style={styles.columnRowNumberItems}>
        <Text style={{...styles.columnRowNumberItemsText,color:'white',}}>নোবল</Text>
      </View>

      <View style={styles.columnRowNumberItems}>
        <Text style={{...styles.columnRowNumberItemsText,color:'white',}}> ইকোনমি</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={bowling}
        style={{width:"100%",height:"100%",flex:1,flexDirection:'column'}}
        keyExtractor={(item, index) => index+""}
        ListHeaderComponent={tableHeader}
        renderItem={({item, index})=> {
          return (
            <View style={{...styles.eachTableRowView, backgroundColor: index % 2 == 1 ? "white" : "#F0FBFC"}}>
              <View style={styles.columnRowName}>
                <Text numberOfLines={0} style={{...styles.columnRowNameText, fontWeight:"bold",}}>
                  {item.name}
                </Text>
              </View>

              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {dfs(item.over)}
                </Text>
              </View>

              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {item.maidens}
                </Text>
              </View>

              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {item.runs}
                </Text>
              </View>

              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {item.wickets}
                </Text>
              </View>

              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {item.wides}
                </Text>
              </View>

              <View style={styles.columnRowNumberItems}>
                <Text style={styles.columnRowNumberItemsText}>
                  {item.noballs}
                </Text>
              </View>

              <View style={styles.columnRowNumberItems}>
                  <Text style={styles.columnRowNumberItemsText}>
                    {item.economy}
                  </Text>
              </View>
              </View>
            )
          }
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:15,
    
  },

  tableHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   // backgroundColor: "#37C2D0",
   backgroundColor:'red',
    //borderTopEndRadius: 5,
    //borderTopStartRadius: 5,
   // height: 50,

    flex:1,
    flexWrap:'wrap',
    height:"10%",
    width:"100%",
  },

  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems:"center",
    flexWrap:"wrap",
  },

  columnHeader: {
    width: "15%",
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:'white',  
  },

  columnHeaderText: {
    color: "white",
    fontWeight:"bold",
    textAlign:'left',
    backgroundColor:'red',
  },

  columnRowText: {
    width:"20%",
    textAlign:"center",
    justifyContent: "center",
    alignItems:"center",
    flex:1,
  },

  columnRowName: {
    alignItems:"center",
    height:35,
    margin:2,
    padding:2,
    justifyContent:'space-evenly', 
    flexWrap:"nowrap", 
    flex:3,
    //flexShrink:1,
  },

  columnRowNameText: {
    //width:"100%",
    //height:"100%",
    fontWeight: 'bold',
    textAlign:"left",
    fontSize:8,
    justifyContent:'center',
    flexWrap:'wrap',
    //alignContent:'center',
    //flexDirection:'column',   

  
  },
  
  /*columnRowNumberItems: {
    alignItems:"center",
    padding:1,
    justifyContent:'center', 
    flexWrap:"nowrap",
    flex:3, 
  },

  columnRowNumberItemsText: {
    width:"100%",
    height:"100%",
    fontWeight:'bold',
    textAlign:"center",
    fontSize:10,
    justifyContent:'center',
    flexWrap:'nowrap',
    padding:1,
  },*/

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

  eachTableRowView: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    flexWrap:'nowrap',
    height:"10%",
    width:"100%",

    
  },
});