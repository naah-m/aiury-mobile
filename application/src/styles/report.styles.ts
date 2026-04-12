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
  scrollArea: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  title: {
    fontSize: 14,
    color: Colors.black,
    marginBottom: 12,
    marginTop: 20,
    fontWeight: '400',
    lineHeight: 18,
  },
  toggleGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toggleButton: {
    flex: 1,
    height: 40,
    borderRadius: 12, 
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  toggleButtonUnselected: {
    backgroundColor: Colors.inputTeal,
  },
  toggleButtonSelected: {
    backgroundColor: Colors.tealDark,
  },
  toggleButtonText: {
    fontSize: 13,
    fontWeight: '400',
  },
  toggleTextUnselected: {
    color: Colors.white, 
    opacity: 0.8,
  },
  toggleTextSelected: {
    color: Colors.white,
    fontWeight: '500',
  },
  imageContainer: {
    marginTop: 15,
    position: 'relative',
    alignItems: 'center',
  },
  previewText: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    color: Colors.black,
    fontSize: 13,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  removeImage: {
    position: 'absolute',
    top: 25,
    right: 10,
    backgroundColor: Colors.white,
    borderRadius: 15,
  }
});