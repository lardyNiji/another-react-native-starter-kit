import { AppColors } from '../../../src/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  biggestview: {
    paddingTop: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.primary,
  },
  bigview: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  view: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
  },
  iconinview: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iteminview: {
    width: 200,
    height: 50,
  },
  icon: {
    fontSize: 35,
    color: 'white',
  },
  bigtext: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
  },
  bigtextbutton: {
    fontSize: 15,
    color: AppColors.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
  },
  link: {
    fontSize: 13,
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
