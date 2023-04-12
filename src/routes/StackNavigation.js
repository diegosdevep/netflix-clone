import LoginScreen from '../screens/Auth/Login/LoginScreen';
import RegisterScreen from '../screens/Auth/Register/RegisterScreen';
import PlansScreen from '../screens/Plans/PlansScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import Loading from '../components/Loading/Loading';
import HomeScreen from '../screens/Home/HomeScreen';

const {
  createNativeStackNavigator,
} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Plans' component={PlansScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Loading' component={Loading} />
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
