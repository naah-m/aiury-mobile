import { StyleSheet } from 'react-native';
import { Colors } from './theme/colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.purpleLight, 
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardView: {
    flex: 1,
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
  headerUserContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 5,
  },
  avatarIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.tealDark, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  messageList: {
    padding: 15,
    paddingBottom: 20,
  },
  encerradoContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: Colors.purpleDark + '90', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  encerradoTexto: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Colors.purpleLight, 
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: Colors.grayLighter,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: 100,
    fontSize: 15,
    color: Colors.grayDarker,
  },
  sendButton: {
    backgroundColor: Colors.tealDark, 
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 2,
  },
  sendButtonDisabled: {
    backgroundColor: Colors.tealDark + '90',
  },
  sendIcon: {
    marginLeft: 3, 
  }
});