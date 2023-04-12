import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import {
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  View,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from './login.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Profile');
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Usuario o contraseña incorrecto',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.content}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png',
            }}
          />
        </View>

        <View style={styles.form}>
          <Input
            placeholder='Email'
            keyboardType='email-address'
            style={styles.input}
            placeholderTextColor='white'
            inputContainerStyle={{ borderBottomWidth: 0 }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor='white'
            inputContainerStyle={{ borderBottomWidth: 0 }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Button
          title='Iniciar Sesion'
          containerStyle={styles.containerBtn}
          buttonStyle={password.length > 4 ? styles.btnSuccess : styles.btn}
          titleStyle={styles.titleBtn}
          onPress={handleLogin}
        />
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('Register')}
        >
          Nuevo en Netflix? <Text style={styles.span}>Registrate aqui</Text>
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
