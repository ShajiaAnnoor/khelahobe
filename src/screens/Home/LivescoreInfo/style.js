import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	pageContainer: {
		flex:1,
		flexDirection:'column',
		margin:5,
		paddingTop:5,
		justifyContent: 'space-evenly',
	},
   
	teamScoreItemContainer: {
		flex:1,
		flexDirection:'row',
		justifyContent: 'space-between',
		alignContent:'space-between',
		paddingLeft:15,
		width:'100%',
		height:"10%",
		flexWrap:'wrap',
	},

	itemContainer: {
		flexDirection:'column',
		justifyContent: 'space-evenly',
		alignItems:'flex-start',
		width:"100%",
		height:'25%',
		margin:1,
		padding:2,
		borderRadius:10,
		paddingTop:5,
		paddingBottom:5,
	},

	listItem: {
		margin: 2,
		marginTop:10,
		marginRight:8,
		padding:10,
		paddingBottom:2,
		paddingTop:2,
		backgroundColor:'white',
		height:'10%',
		width: '98%',
		flex:1,
		flexDirection: 'column',
		borderRadius: 10,
		borderBottomColor:'green',
		borderBottomWidth:2,
		borderLeftWidth:2,
		borderLeftColor:'green',
		alignItems:'flex-start',
		justifyContent: 'space-evenly',
		alignItems:'flex-start',
		alignContent:'space-around',
	},  

	buttonTextStyle:{
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize:10,
		flexWrap:'wrap',
		justifyContent:'center',
		padding:4,
	},

	scoreContainer:{
		height:35,        
		paddingLeft:30,
		marginLeft:10,
		flexDirection:"column",
		margin:2,
		padding:2,
		justifyContent:'center',
		alignSelf:'flex-end',
		alignContent:'flex-end',
		position:'relative',        
	},

	countryNameStyle:{
		height:35,
		margin:2,
			padding:2,
		justifyContent:'space-evenly',
		position:'relative',        
	},

	scoreTextStyle:{ 
		fontWeight: 'bold', 
		textAlign:"right",
		fontSize:12,
		backgroundColor:"white",
		justifyContent:'flex-end',
		alignItems:'flex-end',
	},

	countryNameTextStyle: {
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:12,
		backgroundColor:'white',
		justifyContent:'flex-start',
	},

	countryFlagStyle:{
		height:20,
		width:1,
		margin:5,
		marginRight:2,
		padding:2,
		paddingRight:3,
		flex:1,
		alignItems:'flex-end',
	},

	summaryContainer:{
		width:"100%",
		paddingLeft:2,
		margin:2,
		flexBasis:"2%",
		padding:2,
		flex:2,
		alignItems:"flex-start",
		flexWrap:'wrap',
	},

	summaryText:{
		fontWeight: 'bold',
		textAlign:"left",
		fontSize:12,
		color:"green",
		backgroundColor:'white',
		margin:2,
		padding:1,
		paddingLeft:4,
		alignItems:"center",
	},

	dateAndStatusContainer:{
		flexDirection:'row',
		padding:2,
		width:'100%',
	},

	manOfTheMatchContainer:{
		flexDirection:'row',
		width:'90%',
		padding:2,
		backgroundColor:'white'
	},

	statusText:{
		fontWeight:'bold', 
		margin:2,
		fontSize:12,
		textAlign:'left',
		color:'green',
	},

	dateTimeText:{
		fontWeight:'bold', 
		margin:2,
		fontSize:12,
		textAlign:'left',
		width:"100%",
	},

	manOfTheMatchText:{
		fontWeight:'bold', 
		margin:2,
		fontSize:12,
		textAlign:'left',
	},

	manOfTheMatchNameText:{
		fontWeight:'bold', 
		margin:2,
		fontSize:12,
		color:'green',
		textAlign:'left',
	},

	scrollView: {
		backgroundColor: 'white',
		marginHorizontal: 20,
	},

    buttonMatchDetails: {
        height: 40,
        width:100,
        borderRadius:10,
        backgroundColor:"green",
        padding:10,
        marginTop :1,
        marginBottom:5,
        elevation: 10,
    }
  }
);