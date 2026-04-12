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
    paddingTop: 80,
    alignItems: 'center'
  },

  goBack: {
    position: 'absolute',
    top: 50,
    left: 15,
    zIndex: 10
  },

  headerText: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10
  },

  subHeaderText: {
    color: Colors.white,
    fontSize: 14,
    marginBottom: 40,
    textAlign: 'center'
  }
});