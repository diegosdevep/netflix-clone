import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import MovieRows from '../../components/Movies/MovieRows';
import Trending from '../../components/Trending/Trending';
import { styles } from './home.styles';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Trending />
      <MovieRows />
    </ScrollView>
  );
};

export default HomeScreen;
