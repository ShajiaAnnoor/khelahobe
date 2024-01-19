
import React, { useState, useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

import { fetchHighlights } from "../../../../redux/complex-actions/highlights";
import { getHighlights } from "../../../../redux/reducers/index";

export default function App() {

	const dispatch = useDispatch();
  
	useEffect(
		() => {
				dispatch(
					fetchHighlights(0, 5)
				);
			
			},
		[]
	)

	const highlights = useSelector(
		state => getHighlights(state)
	) || [];

	const [playing, setPlaying] = useState(false);

	const onStateChange = useCallback((state) => {    
		if (state === "ended") {      
			setPlaying(false);      
			Alert.alert("video has finished playing!");    
		}  
	}, []);

	return (
		<View style={styles.container}>
			<FlatList 
				data={highlights}
				style={{width:"100%",flex:1,flexDirection:'column'}}
				keyExtractor={(index) => index+""}
				renderItem={({item})=> {
					return (
						<View>      
							<YoutubePlayer        
								height={200}        
								play={playing}        
								videoId={item.youtube_id}        
								onChangeState={onStateChange}      
							/>  
							<Text style={styles.headline}>{item.description.substring(0,100)}</Text>    
						</View> 
					)
				}}
			/>  
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop:15,
		margin:2,
		padding:10,
	},

	headline: {
		fontSize:20,
		fontWeight:'bold',
		paddingTop:2,
		marginTop:0,
		marginBottom:30,
	}
});