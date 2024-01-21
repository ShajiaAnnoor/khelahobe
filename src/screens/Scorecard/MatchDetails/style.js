import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		//paddingTop:15,
		//margin:2,
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
//		height:35,
		//margin:2,
		//padding:4,
		justifyContent:'center',
		flexWrap:"nowrap", 
		flex:3,
		//flexShrink:1,
	},

	rowItemNameText: {
		width:"100%",
		//height:"100%",
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		//paddingLeft:8,
		//justifyContent:'center',
		flexWrap:'nowrap',
		//alignContent:'center',
		//flexDirection:'column',     
	},

	rowItemValue: {
		flexDirection:'row',
		alignItems:"center",
		//height:35,
		//margin:2,
		//padding:2,
		justifyContent:'center',
		flexWrap:"nowrap", 
		flex:7,
		//flexShrink:1,
	},

	rowItemValueText: {
		width:"100%",
		//height:"100%",
		fontWeight: 'bold',
		textAlign:"center",
		fontSize:10,
		//justifyContent:'center',
		flexWrap:'nowrap',
		//alignContent:'center',
		//flexDirection:'column',     
	},

	eachTableRowView: {
		flex:2,
		flexDirection:'row',
		padding:8,
		//justifyContent:'center',
		//alignItems:'center',
		//flexWrap:'wrap',
		//height:"10%",
		//width:"100%",
	},
});