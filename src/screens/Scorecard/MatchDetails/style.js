import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop:10,    
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

	rowItemName: {
		alignItems:"center",
		flexDirection:'row',
		justifyContent:'center',
		flexWrap:"nowrap", 
		flex:3,
	},

	rowItemNameText: {
		width:"100%",
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		flexWrap:'nowrap',
	},

	rowItemValue: {
		flexDirection:'row',
		alignItems:"center",
		justifyContent:'center',
		flexWrap:"nowrap", 
		flex:7,
	},

	rowItemValueText: {
		width:"100%",
		fontWeight: 'bold',
		textAlign:"center",
		fontSize:10,
		flexWrap:'nowrap',
	},

	eachTableRowView: {
		flex:2,
		flexDirection:'row',
		padding:8,
	},
});