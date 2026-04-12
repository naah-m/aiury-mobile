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
    fontWeight: '400',
    color: Colors.black,
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  label: {
    fontSize: 14,
    color: Colors.black,
    marginBottom: 12,
    marginTop: 20,
    fontWeight: '400',
    lineHeight: 18,
  },
  
  // --- Botões de Toggle ---
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
  }
});