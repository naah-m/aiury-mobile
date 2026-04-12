import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Colors } from './theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purpleDark
  },
  headerBox: {
    backgroundColor: Colors.tealDark,
    marginHorizontal: 20,
    marginTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 20, 
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle:{
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 1,
  },
  headerText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  articleWrapper: {
    marginBottom: 25, 
  },
  articleTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    marginLeft: 5, 
  },
  articleCard: {
    backgroundColor: Colors.tealDark,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  saibaMaisText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
  dateText: {
    color: Colors.tealLight + '80', 
  }
});