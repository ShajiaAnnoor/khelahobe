/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@ui-kitten/components';
import { SafeAreaView, View } from 'react-native';

import { styles } from './Ranking.style';

const RankingScreenComponent = ({ eva: { style }, navigation }) => {

  return (
    <SafeAreaView style={style.container}>

    </SafeAreaView>
  );
};

export default RankingScreenComponent;
