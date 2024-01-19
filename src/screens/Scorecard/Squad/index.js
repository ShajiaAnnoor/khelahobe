import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import uuid from 'react-native-uuid';
import _ from "lodash"

export default function App({teams}) {

	const tableHeader = (teamname, alignDir,paddingL,paddingR) => {
		return (
			<View style={styles.tableHeader}>          
				<Text style={
					{
						...styles.tableHeaderText,
						color:'white',
						textAlign:alignDir,
						paddingLeft:paddingL,
						paddingRight:paddingR,
					}
				}>
					{teamname}
				</Text>
			</View>
		);
  	}
  
  	return (
		(teams[0] && teams[1]&&
			<View style={styles.container}>
				<FlatList 
					data={teams[0]}
					style={{flexDirection:'column',flex:2, width:"50%"}}
					keyExtractor={() => uuid.v4()}
					ListHeaderComponent={tableHeader(teams[0].name, "right",0,5)}
					renderItem={({item, index})=> {
						return (
						<View style={{...styles.eachTableRowView, backgroundColor: index % 2 == 1 ? "white" : "#F0FBFC"}}>
							<View style={styles.team1PlayerNames}>
								<Text numberOfLines={1} style={{...styles.team1PlayerNamesText, fontWeight:"bold",}}>{item}</Text>
							</View>
						</View>
						)
					}}
				/>

				<FlatList 
					data={teams[1]}
					style={{flexDirection:'column',flex:3,width:"50%"}}
					keyExtractor={() => uuid.v4()}
					ListHeaderComponent={tableHeader(teams[1].name, "left",5,0)}
					//stickyHeaderIndices={[0]}
					renderItem={({item, index})=> {
						return (
						<View style={{...styles.eachTableRowView, backgroundColor: index % 2 == 1 ? "white" : "#F0FBFC"}}>
							<View style={styles.team2PlayerNames}>
								<Text numberOfLines={1} style={{...styles.team2PlayerNamesText, fontWeight:"bold",}}>
									{item}
								</Text>
							</View>
						</View>
						)
					}}
				/>
				<StatusBar style="auto" />
			</View>
		)
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop:15,
		margin:2,
		padding:2,
		flexDirection:'row',
	},

	tableHeader: {
		backgroundColor:'green',
		borderTopEndRadius: 5,
		borderTopStartRadius: 5,

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


	team1PlayerNames: {
		width:'100%',
		alignItems:"flex-end",
		height:35,
		marginRight:2,
		paddingRight:5,
		margin:1,
		padding:1,
		flexWrap:"nowrap", 
		flex:2,
	},

	team1PlayerNamesText: {
		fontWeight: 'bold',
		textAlign:"right",
		fontSize:8,
		flexWrap:'nowrap', 
		padding:2,
		margin:2,
	},

	team2PlayerNames: {
		width:'100%',
		alignItems:"flex-start",
		paddingLeft:5,
		marginLeft:2,
		height:35,
		margin:1,
		padding:1,
		flexWrap:'nowrap',
		flex:2,
	},

	team2PlayerNamesText: {
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:8,
		padding:2,
		margin:2,
		flexWrap:'nowrap',   
	},

	eachTableRowView: {
		flex:2,
		flexDirection:'row',
		justifyContent:'center',
		flexWrap:'nowrap',
		height:"10%",
		width:"100%",
	},
});