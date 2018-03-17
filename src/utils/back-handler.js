import { ActionConst, Actions } from 'react-native-router-flux';
import { Alert, BackHandler } from 'react-native';
import { translate } from '../i18n/i18n';


export default function androidBackHandler() {

  if (Actions.state.index === 0) {
    // no previous screen
    console.log('Android BackHandler : no previous screen, let the user decide to quit the app or not');
    Alert.alert(
      translate('common.closing'),
      translate('common.closingMsg'),
      [
        {
          text: translate('common.no'),
          onPress: () => {
            console.log('user wants to keep using the app...');
          },
          style: 'cancel',
        },
        {
          text: translate('common.yes'),
          onPress: () => {
            console.log('user wants to close the app...');
            Actions.intro({ type: ActionConst.RESET }); // important to let app restart from start
            BackHandler.exitApp();
          },
        },
      ],
      { cancelable: false }
    );
  } else {
    // return to previous screen
    console.log('Android BackHandler : send the user to previous screen');
    Actions.pop();
  }
  // returning true is needed to tell BackHandler that you are overriding
  // the default action and that it should not close the app
  return true;
}
