import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@ui-kitten/components';
import { SafeAreaView, View } from 'react-native';

import { styles } from "./News.style";

const NewsScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
  );
};

export default NewsScreen;
