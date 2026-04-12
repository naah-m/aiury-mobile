import { StyleSheet } from "react-native";
import { Colors } from "./theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.purpleLight
  },

  block: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 15
  },

  tabBlock: {
    flex: 2,
    backgroundColor: Colors.tealDark,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },

  blockText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  middleBlock: {
    flex: 5,
    backgroundColor: Colors.purpleLight,
    overflow: 'hidden'
  },

  panicButton: {
    flex: 2,
    backgroundColor: Colors.tealDark,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginBottom: 0
  },

  panicText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  panicSubtext: {
    color: Colors.white,
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.8,
    marginTop: 5
  }
});