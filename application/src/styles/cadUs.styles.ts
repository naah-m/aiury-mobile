import { StyleSheet } from "react-native";
import { Colors } from "./theme/colors";

export default StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: Colors.purpleDark
  },

  container: {
    flexGrow: 1, 
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center'
  },

  headerText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    lineHeight: 32
  },

  formContainer: {
    width: '100%',
    marginBottom: 40
  },

  termos: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
    marginBottom: 20
  },

  termosText: {
    color: Colors.white,
    fontSize: 12,
    marginLeft: 10
  },

  link: {
    color: Colors.tealDark,
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});