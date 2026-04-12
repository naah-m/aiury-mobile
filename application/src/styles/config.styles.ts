import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Colors } from './theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purpleDark, 
  },
  headerSection: {
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 30 : 40,
    marginBottom: 40,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.tealDark, 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
    overflow: 'hidden',
    marginBottom: 15,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30, 
  },
  userName: {
    fontSize: 22,
    fontWeight: '400', 
    color: Colors.black, 
  },
  nameInput: {
    fontSize: 22,
    color: Colors.black,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
    minWidth: 150,
    textAlign: 'center',
    padding: 0,
  },
  editIcon: {
    marginLeft: 8,
  },
  menuList: {
    flex: 1,
    paddingHorizontal: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  iconContainer: {
    width: 40, 
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  menuTitle: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '500',
  },
  menuSubtitle: {
    fontSize: 11,
    color: Colors.grayDark, 
    marginTop: 3,
    lineHeight: 14,
  }
});