import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import { MovieItem } from '../../context/Context';
import { styles } from './header.styles';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Header = () => {
  const { profile, setProfile } = useContext(MovieItem);
  const navigation = useNavigation();
  const API_KEY = 'b93a64480573ce5248c28b200d79d029';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length - 1);
      const randomMovie = data.results[randomIndex];
      setMovies(randomMovie);
    };

    getMovieData();
  }, []);

  return (
    <View>
      <ImageBackground
        style={styles.imgBG}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movies?.poster_path}`,
        }}
      >
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png',
            }}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <AntDesign size={24} color='white' name='search1' />
            <Pressable onPress={() => navigation.navigate('Profile')}>
              <Image style={styles.profile} source={{ uri: profile.image }} />
            </Pressable>
          </View>
        </View>

        <View style={styles.navbar}>
          <Text style={styles.textNavbar}>Show de TV</Text>
          <Text style={styles.textNavbar}>Peliculas</Text>
          <Text style={styles.textNavbar}>Categorias</Text>
        </View>
      </ImageBackground>

      <View style={styles.iconContainer}>
        <View style={styles.content}>
          <AntDesign size={24} color='white' name='plus' />
          <Text style={styles.textIcon}>Mi lista</Text>
        </View>
        <View style={styles.playIcon}>
          <Entypo size={24} color='black' name='controller-play' />
          <Text style={[styles.textIcon, { color: 'black' }]}>Play</Text>
        </View>
        <View style={styles.content}>
          <AntDesign size={24} color='white' name='infocirlceo' />
          <Text style={styles.textIcon}>Info</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
