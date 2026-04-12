import { StyleSheet } from "react-native";
import { Colors } from "./theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purpleDark,
    justifyContent: 'center', 
    alignItems: 'center'  
  },

  statusText: {
    color: Colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 40
  },

  loadingIcon: {
    width: 60,
    height: 60,
    tintColor: Colors.white
  },

  activityIndicator: {
    marginTop: 10
  }
});