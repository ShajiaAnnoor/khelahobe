import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import _ from "lodash"

import { styles } from "./style";

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
								<Text numberOfLines={1} style={{...styles.team1PlayerNamesText, fontWeight:"bold"}}>
									{item}
								</Text>
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