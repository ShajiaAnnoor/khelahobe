import { StatusBar } from 'expo-status-bar';
import React, { 
	useState, 
} from 'react';
import { 
	FlatList, 
	StyleSheet, 
	Text, 
	View, 
} from 'react-native';
import uuid from 'react-native-uuid';
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
  
	const tableHeader = () => (
		<View style={styles.tableHeader}>  
			<View style={{...styles.columnRowName}}>
				<Text style={{...styles.columnRowNameText,color:'white',}}>
					বোলার
				</Text>
			</View>
			<View style={{...styles.columnRowNumberItems}}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white',}}>
					ওভার
				</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white',}}>
					মেইডেন
				</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white',}}>
					রান
				</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white',}}>
					উইকেট
				</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white',}}>
					ওয়াইড
				</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white',}}>
					নোবল
				</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white',}}>
					ইকোনমি
				</Text>
			</View>
		</View>
	)

	return (
		<View style={styles.container}>
			<FlatList 
				data={bowling}
				style={{width:"100%",height:"100%",flex:1,flexDirection:'column'}}
				keyExtractor={() => uuid.v4()}
				ListHeaderComponent={tableHeader}
				renderItem={({item, index})=> {
					return (
						<View style={{...styles.eachTableRowView, backgroundColor: index % 2 == 1 ? "white" : "#F0FBFC"}}>
							<View style={styles.columnRowName}>
								<Text numberOfLines={0} style={{...styles.columnRowNameText, fontWeight:"bold"}}>
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
				)}
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
		backgroundColor:'green',
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
	},

	columnRowNameText: {
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:8,
		justifyContent:'center',
		flexWrap:'wrap',
	},

	columnRowNumberItems: {
		height:35,
		margin:3,
		padding:4,
		justifyContent:'center',
		alignItems:"center",
		flex:3,
	},

	columnRowNumberItemsText: {
		fontWeight: 'bold',
		textAlign:'center',
		fontSize:8,  
		flexWrap:'wrap',
		padding:4,
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