import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { styles } from './movierow.styles';

const MovieRow = ({ title, url }) => {
  const API_KEY = 'b93a64480573ce5248c28b200d79d029';
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movieData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>
        {title}
      </Text>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {movies.map((movie, id) => (
          <Pressable key={id}>
            <Image
              style={{
                width: 105,
                margin: 10,
                height: 152,
                borderRadius: 6,
                resizeMode: 'cover',
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieRow;