import React, { useContext } from 'react';
import { View, Text, SafeAreaView, Pressable, Image } from 'react-native';
import { styles } from './profile.styles';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { profiles } from '../../utils/profiles';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message';
import { getAuth, signOut } from 'firebase/auth';
import { MovieItem } from '../../context/Context';

const ProfileScreen = () => {
  const { profile, setProfile } = useContext(MovieItem);
  const navigation = useNavigation();

  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);

      navigation.replace('Login');
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error al cerrar sesion',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header}>
        <Ionicons name='arrow-back' size={24} color='white' />
        <Text style={styles.textHeader}>Perfiles y mas</Text>
      </Pressable>

      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png',
          }}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Cual es tu Perfil?</Text>

        <FlatList
          numColumns={2}
          data={profiles}
          renderItem={(profile) => (
            <Pressable
              style={styles.profiles}
              key={profile.item.id}
              onPress={() => {
                setProfile(profile.item), navigation.navigate('Loading');
              }}
            >
              <Image
                style={styles.imgProfiles}
                source={{ uri: profile.item.image }}
              />
              <Text style={styles.textProfiles}>{profile.item.name}</Text>
            </Pressable>
          )}
        />
      </View>

      <Pressable onPress={() => logout()}>
        <Text style={styles.textSignOut}>Cerrar Sesion</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;
