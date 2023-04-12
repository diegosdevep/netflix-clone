import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    paddingTop: 50,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  containerSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 6,
  },
  planSelected: {
    height: 165,
    borderRadius: 7,
    borderWidth: 0.5,
    margin: 10,
    padding: 15,
    borderColor: '#E50914',
  },
  planNotSelected: {
    height: 165,
    borderRadius: 7,
    borderWidth: 2.5,
    margin: 10,
    padding: 15,
    borderColor: '#E50914',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentPlan: {
    padding: 10,
    width: 120,
    borderRadius: 7,
    backgroundColor: '#E50914',
  },
  textPlan: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  videoQuality: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
  },
  resolution: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 3,
  },
  btnSelected: {
    backgroundColor: '#E50914',
    padding: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
  },
  textBtn: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  priceBtn: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
});
