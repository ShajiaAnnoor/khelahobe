import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@ui-kitten/components';
import { SafeAreaView, View } from 'react-native';

import { styles } from "./News.style";

const NewsScreenComponent = ({ navigation }) => {

    return (
        <SafeAreaView style={style.container}>
        </SafeAreaView>
  );
};

const NewsScreen = withStyles(NewsScreenComponent, styles);
export default NewsScreen;
