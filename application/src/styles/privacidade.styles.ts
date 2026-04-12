import { StyleSheet } from "react-native";
import { Colors } from "./theme/colors";

export default StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.purpleDark 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingBottom: 20 
  },
  backButton: { 
    padding: 5, 
    marginLeft: -5 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: Colors.black 
  },
  content: { 
    paddingHorizontal: 30, 
    paddingTop: 20 
  },
  optionRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginBottom: 35 
  },
  textContainer: { 
    flex: 1, 
    paddingRight: 20 
  },
  optionTitle: { 
    fontSize: 16, 
    fontWeight: '500', 
    color: Colors.black, 
    marginBottom: 4 
  },
  optionSubtitle: { 
    fontSize: 12, 
    color: Colors.black + '90', 
    lineHeight: 16 
  }
});