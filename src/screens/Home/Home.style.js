import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	listitemcontainer: {
		margin: 10,
		padding: 10,
		paddingLeft:40,
		backgroundColor: '#a7d1c9',
		width: '95%',
		flex:1,
		alignSelf: 'center',
		flexDirection: 'column',
		borderRadius: 5,
		alignItems:'flex-start',
		justifyContent: 'space-between',
	},
	
	pageContainer: {
    	flex:1,
    	paddingTop:5,
    	justifyContent: 'center',
		backgroundColor: '#a7f9c9',
  	},

	flatlistcontainer: {
		flex: 10,
		backgroundColor: '#F7F7F7',
		marginTop:10,
		marginBottom:5,
	},

	container: {
		flex: 1,
		marginTop:5,
		backgroundColor:'teal',
		alignItems:'center',
		justifyContent:'space-evenly',
		alignContent:"center",		
	},

	scrollView: {
		backgroundColor: '#d1d1d1',
		marginHorizontal: 2,
	},
});