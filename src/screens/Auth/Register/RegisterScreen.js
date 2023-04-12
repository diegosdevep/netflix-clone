import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  View,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { styles } from './register.styles';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

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
          title='Registrate'
          containerStyle={styles.containerBtn}
          buttonStyle={password.length > 4 ? styles.btnSuccess : styles.btn}
          titleStyle={styles.titleBtn}
          onPress={() =>
            navigation.navigate('Plans', {
              email: email,
              password: password,
            })
          }
        />
        <Text style={styles.text} onPress={() => navigation.navigate('Login')}>
          Ya tienes cuenta? <Text style={styles.span}>Logueate aqui</Text>
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
