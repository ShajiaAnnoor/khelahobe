import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop:10,
		flexDirection:'row',
	},

	tableHeader: {
		backgroundColor:'green',
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
		width:'100vw',
		alignItems:"flex-end",
		justifyContent:'center',
		padding:10,
		flexWrap:"nowrap", 
		flex:2,
	},

	team1PlayerNamesText: {
		fontWeight: 'bold',
		textAlign:"right",
		fontSize:10,
		flexWrap:'nowrap', 
	},

	team2PlayerNames: {
		width:'100%',
		alignItems:"flex-start",
		justifyContent:'center',
		padding:10,
		flexWrap:'nowrap',
		flex:2,
	},

	team2PlayerNamesText: {
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		flexWrap:'nowrap',   
	},
});