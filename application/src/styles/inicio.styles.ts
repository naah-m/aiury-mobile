import { StyleSheet } from "react-native";
import { Colors } from "./theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purpleDark,
    paddingHorizontal: 40,
    justifyContent: 'space-around', 
    alignItems: 'center'
  },

  topSection: {
    alignItems: 'center',
    marginTop: 80
  },

  logo: {
    width: 250, 
    height: 200,
    marginBottom: 10
  },

  subtitle: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500'
  },

  bottomSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50
  },

  text: {
    color: Colors.white,
    fontSize: 15,
    marginBottom: 15
  }
});