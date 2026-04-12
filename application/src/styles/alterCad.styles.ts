import { StyleSheet } from 'react-native';
import { Colors } from './theme/colors'; 

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purpleDark,
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    padding: 5,
    marginLeft: -5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  content: {
    paddingTop: 10,
    paddingBottom: 40,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.black + '90',
    textAlign: 'center',
    fontWeight: '500',
    marginHorizontal: 40,
    marginBottom: 30,
    lineHeight: 20,
  },
  formContainer: {
    paddingHorizontal: 35,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  }
});