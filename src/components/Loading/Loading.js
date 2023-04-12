import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Loading = () => {
  const navigate = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate.replace('Home');
    }, 1000);
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        flex: 1,
      }}
    >
      <Text>Loading...</Text>
      <ActivityIndicator size='large' color='#E50914' />
    </View>
  );
};

export default Loading;
