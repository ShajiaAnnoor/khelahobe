import { 
    Text, 
    Pressable,
} from "react-native";

export const ButtonForHome = ({slug}) => {
	<Pressable 
		style ={{
			height: 40,
			width:90,
			borderRadius:5,
			backgroundColor : "#a6020d",
			padding:10,
			marginTop :5,
			marginBottom:5,
			elevation: 10,
		}}
	>
		<Text style={styles.buttonTextStyle}>
			ম্যাচ বিস্তারিত
		</Text>
	</Pressable>                    
}