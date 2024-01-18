import React from 'react';
import { FlatList, View } from 'react-native';

import { styles } from "./style";
import LiveScoreInfo from '../LivescoreInfo';

const flag = 1;

const ShortscoreList = ({ livescores }) => { 
    return (
        <View style={styles.container}>
            <FlatList
                data={livescores}
                renderItem={({ item }) => <LiveScoreInfo slug={item.slug[0]} flag={flag} />}
                keyExtractor={item => item.slug[0]}
            />
        </View>
    )
};

export default ShortscoreList;
