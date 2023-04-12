import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import StackNavigation from './src/routes/StackNavigation';
import Toast from 'react-native-toast-message';
import 'react-native-get-random-values';
import { ProfileContext } from './src/context/Context';

export default function App() {
  return (
    <ProfileContext>
      <NavigationContainer>
        <StackNavigation />
        <StatusBar style='light' />
      </NavigationContainer>
      <Toast />
    </ProfileContext>
  );
}
