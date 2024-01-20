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

import { styles } from './style';
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