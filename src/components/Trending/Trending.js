import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { styles } from './trending.styles';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = 'b93a64480573ce5248c28b200d79d029';

  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);

  return (
    <View style={{ marginTop: 10 }}>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {movies?.slice(0, 10).map((movie, id) => (
          <Pressable key={id} style={{ margin: 10 }}>
            <Text style={styles.textPost}>{id + 1}</Text>

            <Image
              style={styles.img}
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

export default Trending;
