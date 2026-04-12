import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Colors } from './theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purpleDark, 
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {
    backgroundColor: Colors.tealDark, 
    marginHorizontal: 20,
    marginTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  infoTitle: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 1,
  },
  infoText: {
    color: Colors.white,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  listSection: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
    marginBottom: 15,
  },
  listContainer: {
    paddingBottom: 20,
  },
  chatCard: {
    backgroundColor: Colors.purpleLight, 
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  chatCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.tealDark,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  chatCardTitle: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '500',
  },
  chatCardRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatCardTime: {
    fontSize: 12,
    color: Colors.grayDarker,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.grayLighter,
    textAlign: 'center',
    marginTop: 50,
  },
  errorText: {
    color: Colors.red,
    fontSize: 16,
  },
  bottomButtonContainer: {
    alignItems: 'center',
    paddingBottom: 30, 
  },
  newChatButton: {
    backgroundColor: Colors.tealDark, 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  newChatButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  }
});