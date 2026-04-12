import { StyleSheet } from "react-native";
import { Colors } from "./theme/colors";

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
    paddingHorizontal: 35,
    paddingTop: 30,
    alignItems: 'center', 
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.black + '90',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 40,
  },
  formContainer: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: Colors.black,
    marginBottom: 10,
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.tealDark + '80',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 45,
  },
  input: {
    flex: 1,
    color: Colors.white, 
    fontSize: 15,
  },
  confirmButton: {
    backgroundColor: Colors.tealDark,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20, 
    minWidth: 160,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonDisabled: {
    opacity: 0.6, 
  },
  confirmButtonText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  }
});