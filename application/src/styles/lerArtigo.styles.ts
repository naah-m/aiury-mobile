import { StyleSheet } from 'react-native';
import { Colors } from './theme/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.purpleDark, 
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 15,
    backgroundColor: Colors.purpleDark,
  },
  headerIcon: {
    padding: 5,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.purpleDark, 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  articleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.tealDark,
    marginBottom: 20,
    lineHeight: 28,
  },
  articleBody: {
    fontSize: 16,
    color: Colors.grayLighter,
    lineHeight: 26,
    marginBottom: 40,
  }
});