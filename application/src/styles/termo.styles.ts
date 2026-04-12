import { StyleSheet } from "react-native";
import { Colors } from "./theme/colors";

export default StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: Colors.purpleDark
},
header: {
    marginTop: 40,
    paddingTop: 20,
},
title: {
    color: Colors.black,
    fontSize: 22,
    fontWeight:'bold',
    textAlign: 'center'
},
scroll: {
    flex: 1
},
scrollContent: {
    padding: 20,
    paddingBottom: 30
},
sectionTitle: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 5
},
body: {
    color: Colors.black + '90',
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 10,
    paddingRight: 5
},
footer: {
    padding: 20,
    alignItems: 'center'
}
});