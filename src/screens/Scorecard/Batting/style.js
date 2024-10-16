import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection:"column",
	},

	tableHeader: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
		backgroundColor: "green",
		//borderTopEndRadius: 5,
		//borderTopStartRadius: 5,
		flex:1,
		flexWrap:'wrap',
		//height:"10%",
		//width:"100%",
	},

	columnRowNameText: {
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		flexWrap:'wrap',        
	},

	columnRowName: {
		alignItems:'center',
		marginLeft:8,
		padding:2,
		justifyContent:'center',
		flexWrap:"wrap", 
//		backgroundColor:'gray',
		flex:8,
	},

	columnRowDetailText: {
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		flexWrap:'wrap',
		padding:2,
	},

	columnRowDetail: {
		padding:2,
		justifyContent:'flex-start',
		alignItems:'flex-start',
		flex:6,
	},

	columnRowNumberItems: {
		height:35,
		//padding:2,
		justifyContent:'center',
		alignItems:"center",
		flex:3,
	},

	columnRowNumberItemsText: {
		fontWeight: 'bold',
		textAlign:'center',
		fontSize:10,  
		flexWrap:'wrap',
		//padding:2,
		flex:2,
	},

	strikeRate:{
		height:35,
		padding:2,
		justifyContent:'center',
		alignItems:"center",
		flex:4,
	},

	strikeRateText:{

	},

	eachTableRowView:{
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flex:1,
		flexWrap:'wrap',
		width:"100%",
	},

	inningsContainer: {
		flex:2,
		position:'relative',
		flexDirection:'column',
		alignItems: 'center',
		justifyContent:'center',
		margin:2,
		padding:4,
		width:'100%',
		flexGrow:0,
		flexBasis:"35%",
	},

	fallOfWicketRowView:{
		flexDirection:'column',
		padding:2,
		margin:2,
		justifyContent:'space-evenly',
		backgroundColor:'#FFFF',
		width:"100%",
	},

	fallOfWicketValue:{
		backgroundColor:'#FFFF',
		height:"90%",
		margin:2,
		padding:2,
		flexDirection:"row",
		justifyContent:'flex-start',
		flexWrap:"wrap", 
		flex:9,
	},

	fallOfWicketValueText:{
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		backgroundColor:'white',
		justifyContent:'center',
		alignContent:'center',
		flexWrap:'nowrap',
		padding:1,
		margin:1,
		alignItems:"center",
	},

	fallOfWicketTitle: {
		backgroundColor:'green',
		height:'10%',
		margin:1,
		padding:1,
		flexWrap:"nowrap", 
		flex:3,
	},

	fallOfWicketTitleText: {
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		backgroundColor:'white',
		justifyContent:'center',
		alignContent:'center',
		flexWrap:'wrap',  
		margin:1,
		padding:1,      
	},

	valueForExtra:{
		height:35,
		margin:2,
		padding:2,
		justifyContent:'flex-start',
		flexWrap:"nowrap", 
		flex:8,
	},

	valueForExtraText:{
		height:"100%",
		fontWeight: 'bold',
		textAlign:"right",
		fontSize:10,
		justifyContent:'center',
		flexWrap:'wrap',
		padding:4,
		margin:2,
		alignItems:"center",
	},

	titleForExtra: {
		height:35,
		margin:2,
		padding:2,
		justifyContent:'space-between',
		flexWrap:"wrap", 
		flex:2,
	},

	titleForExtraText: {
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		justifyContent:'center',
		flexWrap:'wrap',  
		padding:4,      
	},

	valueForRun:{
		height:35,
		margin:2,
		padding:2,
		justifyContent:'flex-start',
		flexWrap:"nowrap", 
		flex:8,
	},

	valueForRunText:{
		height:"100%",
		fontWeight: 'bold',
		textAlign:"right",
		fontSize:10,
		justifyContent:'center',
		flexWrap:'wrap',
		padding:4,
		margin:2,
		alignItems:"center",
	},

	titleForRun: {
		height:35,
		margin:2,
		padding:2,
		justifyContent:'space-between',
		flexWrap:"wrap", 
		flex:2,
	},

	titleForRunText: {
		width:"98%",
		height:"100%",
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		justifyContent:'center',
		flexWrap:'wrap',  
		margin:2,
		padding:4,      
	},

	yetToBatTitle:{
		padding:1,
		justifyContent:'space-between',
		flexWrap:"wrap", 
		flex:5,
	},

	yetToBatTitleText:{
		width:"98%",
		fontWeight: 'bold',
		textAlign:"right",
		fontSize:10,
		justifyContent:'center',
		flexWrap:'wrap',  
	},

	yetToBatValue: {
		justifyContent:'flex-start',
		flexWrap:"nowrap", 
		flex:8,
	},

	yetToBatValueText: {
		height:"100%",
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:10,
		justifyContent:'center',
		flexWrap:'wrap',
		padding:4,
		margin:2,
		alignItems:"center",      
	}, 
});