import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  img: {
    marginTop: 20,
    width: 120,
    height: 50,
  },
  form: {
    flexDirection: 'column',
    width: '80%',
    marginTop: 40,
  },
  input: {
    width: '80%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'grey',
    color: 'white',
  },
  containerBtn: {
    width: '75%',
  },
  btn: {
    backgroundColor: 'transparent',
    borderWidth: 1.4,
    borderColor: 'white',
    padding: 15,
  },
  btnSuccess: {
    backgroundColor: 'red',
    padding: 15,
    borderWidth: 1.4,
    borderColor: 'red',
  },
  titleBtn: {
    color: 'white',
    fontWeight: '600',
  },
  text: {
    color: 'white',
    marginTop: 20,
    fontSize: 17,
  },
  span: {
    fontWeight: 'bold',
  },
});
