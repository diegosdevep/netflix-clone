import React from 'react';
import { View } from 'react-native';
import movies from '../../utils/movies';
import MovieRow from './MovieRow';

const MovieRows = () => {
  return (
    <View>
      {movies.map((movie, index) => (
        <MovieRow key={index} title={movie.name} url={movie.url} />
      ))}
    </View>
  );
};

export default MovieRows;
