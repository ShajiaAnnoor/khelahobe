import React from 'react';
import { Text, Image,  StatusBar, ScrollView,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from './style';

export default function BlogPage({}) {
	return (
		<ScrollView style={styles.primaryContainer}>
			<TouchableOpacity>
				<Ionicons 
					name='arrow-back-circle-sharp'
					size={32}
					color='white'
					style={{ 
						position: 'absolute',
						top: 40,
						left: 20,
						zIndex: 1,
					}}						
				/>
    		</TouchableOpacity>
    		<StatusBar />
                    
			<Image 
					style={styles.image}
					source={{  uri: 'https://picsum.photos/700' }}
			/>
            
			<Text
			style={{
				fontSize: 36,
				fontFamily: 'Nunito-Black',
				color: 'black',
				textAlign:'left',
				//display:'flex',
				//justifyContent:"flex-s
				margin: 20
			}}
			>
				Headline
			</Text>
        	<Text style={styles.content}>
				Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (NSAttributedString on iOS, SpannableString on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.
			</Text>
      	</ScrollView>
	)
}
