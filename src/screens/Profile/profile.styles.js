import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'ios' ? 0 : 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 6,
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 120,
    marginTop: 20,
  },
  content: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '600',
  },
  profiles: {
    marginHorizontal: 10,
    padding: 20,
    marginTop: 10,
  },
  imgProfiles: {
    width: 100,
    height: 110,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  textProfiles: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
  },
  textSignOut: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 15,
  },
});
