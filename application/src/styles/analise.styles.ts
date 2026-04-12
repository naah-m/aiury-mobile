import { StyleSheet } from 'react-native';
import { Colors } from './theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purpleDark,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 15,
    color: Colors.black,
    textAlign: 'center',
    lineHeight: 22,
  }
});