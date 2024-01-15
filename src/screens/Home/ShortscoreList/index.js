import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Divider } from "react-native-elements";

import LiveScoreInfo from '../LivescoreInfo';

const flag = 1;

const ShortscoreList = ({ navigation, livescores }) => { 
    return (
        <View style={styles.container}>
            <FlatList
                data={livescores}
                renderItem={({ item }) => <LiveScoreInfo slug={item.slug[0]} flag={flag} />}
                keyExtractor={item => item.slug[0]}
            />
        </View>
    )
    /*
    return (
        <View style={styles.container}>
        {
			livescores.map( 
			    (l, index) => (
                        l.slug[0]&&<LiveScoreInfo
						    slug={l.slug[0]}
						    flag={flag}
					    />                    
                )
            )   
        }
        </View>
  );*/
};

export const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#F7F7F7',
        marginTop:10,
        marginBottom:5,
      },
});

export default ShortscoreList;
