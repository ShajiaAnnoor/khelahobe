import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop:15,
	},

	tableHeader: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor:'green',
		flex:1,
		flexWrap:'wrap',
		height:"10%",
		width:"100%",
	},

	tableRow: {
		flexDirection: "row",
		height: 40,
		alignItems:"center",
		flexWrap:"wrap",
	},

	columnHeader: {
		width: "15%",
		justifyContent: "center",
		alignItems:"center",
		backgroundColor:'white',  
	},

	columnHeaderText: {
		color: "white",
		fontWeight:"bold",
		textAlign:'left',
		backgroundColor:'red',
	},

	columnRowText: {
		width:"20%",
		textAlign:"center",
		justifyContent: "center",
		alignItems:"center",
		flex:1,
	},

	columnRowNameText: {
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		justifyContent:'center',
		flexWrap:'wrap',        
	},

	columnRowName: {
		alignItems:"center",
		marginLeft:8,
		padding:2,
		justifyContent:'center',
		flexWrap:"wrap", 
		flex:5,
	},

	columnRowNumberItems: {
		height:35,
		padding:2,
		justifyContent:'center',
		alignItems:"center",
		flex:3,
	},

	columnRowNumberItemsText: {
		fontWeight: 'bold',
		textAlign:'center',
		fontSize:10,  
		flexWrap:'wrap',
		padding:4,
		flex:2,
	},

	eachTableRowView: {
		flex:1,
		flexDirection:'row',
		justifyContent: 'space-between',
		flexWrap:'nowrap',
		height:"10%",
		width:"100%", 
	},
});