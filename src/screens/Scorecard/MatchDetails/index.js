import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import _ from "lodash"
import uuid from 'react-native-uuid';

import { styles } from './style';

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
			Value:""
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
				keyExtractor={(item, index) => uuid.v4()}
				ListHeaderComponent={tableHeader}
				renderItem={({item, index})=> {
					return (
						<View style={{...styles.eachTableRowView, backgroundColor: index % 2 == 1 ? "white" : "#F0FBFC"}}>
							<View style={styles.rowItemName}>
								<Text style={{...styles.rowItemNameText, fontWeight:"bold",}}>
									{item.Name}
								</Text>
							</View>
							<View style={styles.rowItemValue}>
								<Text style={styles.rowItemValueText}>
									{item.Value}
								</Text>
							</View>						
						</View>
					)
				}}
			/>
			<StatusBar style="auto" />
		</View>
  );
}