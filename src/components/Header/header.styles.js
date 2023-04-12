import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imgBG: {
    width: '100%',
    height: 480,
    position: 'relative',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  logo: {
    width: 120,
    height: 50,
  },
  profile: {
    width: 30,
    height: 30,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    gap: 20,
  },
  textNavbar: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    gap: 20,
  },
  content: {
    alignItems: 'center',
    gap: 5,
  },
  playIcon: {
    backgroundColor: 'white',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: 120,
  },
  textIcon: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
