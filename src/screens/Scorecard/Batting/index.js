import { StatusBar } from 'expo-status-bar';
import { 
	FlatList, 
	Text, 
	View, 
} from 'react-native';
import _ from "lodash";
import uuid from 'react-native-uuid';

import { styles } from "./style";
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
  
const columns  = [
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
			<View style={styles.columnRowName}>
				<Text style={{...styles.columnRowNameText,color:'white'}}>
					{columns[0]}
				</Text>
			</View>
			<View style={{...styles.columnRowDetail}}>
				<Text style={{...styles.columnRowDetailText,color:'white'}}>
					{columns[1]}
				​</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white'}}>
					{columns[2]}
				</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white'}}>
					{columns[3]}
				</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white'}}>
					{columns[4]}
				</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white'}}>
					{columns[5]}
				</Text>
			</View>
			<View style={styles.columnRowNumberItems}>
				<Text style={{...styles.columnRowNumberItemsText,color:'white'}}>
					{columns[6]}
				</Text>
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

				<View style={{...styles.eachTableRowView, backgroundColor:'#FFFF',}}>
					<View style={styles.titleForRun}>
    					<Text style={{...styles.titleForRunText, fontWeight:"bold"}}>
							মোট রান
						</Text>
					</View>
					<View style={styles.valueForRun}>
						<Text style={styles.valueForRunText}>
							{total}{out === '১০' ? ' অল আউট' : `/${out}`} ({over} ওভার)
						</Text>
					</View>
				</View>

				<View style={{...styles.eachTableRowView, backgroundColor:'#FFFF'}}>
					<View style={styles.titleForExtra}>
						<Text style={{...styles.titleForExtraText, fontWeight:"bold"}}>
							অতিরিক্ত
						</Text>
					</View>
					<View style={styles.valueForExtra}>
    					<Text style={styles.valueForExtraText}>
							{extras}
						</Text>
  					</View>
				</View>

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
							) => 
							{
								let invalidOver = (f.over === 'None' && true) || false;
								let name = ""
								if( index == 0 ) {
									name = (!invalidOver && `(${f.name}, ${dfs(f.over)} ওভার)`) || `(${f.name})`;
								} else {
									name = (!invalidOver && `, (${f.name}, ${dfs(f.over)} ওভার)`) || `, (${f.name})`;
								}
								return (
								<Text
									style={styles.fallOfWicketValueText}
									key={uuid.v4()}
								>
								{index > 0 ? '' : ''}{f.wicket}-{dfs(f.run)} {name}
								</Text>
								)
							}
							)
						}
					</View>
				</View> 

				<View style={{...styles.eachTableRowView, backgroundColor:'#FFFF'}}>
					<View style={styles.yetToBatTitle}>
						<Text style={{...styles.yetToBatTitleText, fontWeight:"bold"}}>
							এখনো ব্যাট করেন নি:
						</Text>
					</View>
					<View style={styles.yetToBatValue}>
    					<Text style={styles.yetToBatValueText}>
							{
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
							}
						</Text>
					</View>
				</View>   
			</View>
    		<StatusBar style="auto" />
    	</View>
  	);
}

