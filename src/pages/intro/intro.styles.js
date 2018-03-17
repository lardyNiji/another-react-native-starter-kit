import {AppColors, AppFonts} from '../../theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  biggestview: {
    paddingTop: '50%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  bigview: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  view: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  bigtext: {
    fontSize: AppFonts.t24.size,
    color: 'white',
    textAlign: 'center',
    paddingBottom: 30,
    width: 240,
  },
  bigtextbutton: {
    fontSize: AppFonts.t14.size,
    color: AppColors.secondary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: AppFonts.t14.size,
    color: 'white',
    textAlign: 'center',
  },
  link: {
    fontSize: AppFonts.t14.size,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    width: 250,
    height: 45,
    justifyContent: 'center',
  },
});
