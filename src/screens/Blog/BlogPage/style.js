import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
	image: {
		width: Dimensions.get('screen').width,
		height: 200
	},
	content: {
		fontSize: 18,
		fontFamily: "'Roboto Slab', serif",
		letterSpacing: 0.1,
		flex: 1,  
		flexWrap: 'wrap',
		marginHorizontal: 20,
	},
	primaryContainer: {
		backgroundColor: 'white',
		flex: 1,
	},
})