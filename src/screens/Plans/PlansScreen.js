import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from './plans.styles';
import { Feather, Entypo, Fontisto } from '@expo/vector-icons';
import { plans } from '../../utils/plans';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const PlansScreen = () => {
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState();
  const route = useRoute();
  const { email, password } = route.params;
  const navigation = useNavigation();

  const handlePlanSelection = async () => {
    try {
      // Crear usuario con email y password
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Obtener el UID del usuario creado
      const { uid } = userCredential.user;
      const createdAt = new Date();

      // Crear un documento con los datos del usuario en la colección "users"
      const userDocRef = doc(db, 'users', uid);
      await setDoc(userDocRef, {
        email,
        price,
        selected,
        createdAt,
      });
      navigation.navigate('Profile');
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error al crear Usuario',
      });
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Selecciona el mejor plan para ti</Text>

          <View style={styles.containerSubtitle}>
            <Feather name='check' size={24} color='red' />
            <Text style={styles.text}>Mira todo lo que quieras gratis</Text>
          </View>
          <View style={styles.containerSubtitle}>
            <Feather name='check' size={24} color='red' />
            <Text style={styles.text}>Las mejores recomendaciones para ti</Text>
          </View>
          <View style={styles.containerSubtitle}>
            <Feather name='check' size={24} color='red' />
            <Text style={styles.text}>Cancela el plan cuando quieras</Text>
          </View>

          {plans.map((plan, index) => (
            <Pressable
              key={index}
              style={
                selected.includes(plan.name)
                  ? styles.planNotSelected
                  : styles.planSelected
              }
              onPress={() => {
                setSelected(plan.name);
                setPrice(plan.price);
              }}
            >
              <View style={styles.content}>
                <View style={styles.contentPlan}>
                  <Text style={styles.textPlan}>{plan.name}</Text>
                </View>

                <Text style={styles.price}>Precio: ${plan.price}</Text>
              </View>

              <View style={styles.description}>
                <View>
                  <Text style={styles.videoQuality}>
                    Calidad de Vide: {plan.videoQuality}
                  </Text>
                  <Text style={styles.resolution}>
                    Resolucion: {plan.resolution}
                  </Text>
                </View>

                <Fontisto
                  name='netflix'
                  size={28}
                  color='black'
                  style={{ marginRight: 6 }}
                />
              </View>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 16 }}>Dispositivos disponibles: </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}
                >
                  {plan.devices.map((device) => (
                    <Entypo
                      key={device.id}
                      size={27}
                      name={device.name}
                      style={{ marginRight: 6 }}
                      color='#E50914'
                    />
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      {selected.length > 0 ? (
        <TouchableOpacity
          style={styles.btnSelected}
          onPress={handlePlanSelection}
        >
          <Text style={styles.textBtn}>Seleccionado el plan: {selected}</Text>
          <Text style={styles.priceBtn}>Paga: ${price}</Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default PlansScreen;
