import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : 50,
    backgroundColor: 'black',
    flex: 1,
  },
});
