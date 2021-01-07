import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  storesContainer: {
    width: '100%',
    height: '100%',
  },
  storeTitles: {
    marginTop: '30%',
    width: '100%',
    // alignSelf: 'center',
    alignItems: 'center',
  },
  storeTitle: {
    fontSize: 30,
    fontWeight: '500',
  },
  storeSubTitle: {
    fontSize: 10,
    color: 'gray',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
});

export default styles;
