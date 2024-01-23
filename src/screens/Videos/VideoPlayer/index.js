import React, { useState, useCallback } from "react";
import { View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Player() {  
  const [playing, setPlaying] = useState(false);

	const onStateChange = useCallback((state) => {    
		if (state === "ended") {      
			setPlaying(false);      
			Alert.alert("video has finished playing!");    
		}  
		}, []
	);

	return (    
		<View>      
			<YoutubePlayer        
			height={300}        
			play={playing}        
			videoId={"2qdtkUmedUw"}        
			onChangeState={onStateChange}      
			/>      
		</View>  
	);
}