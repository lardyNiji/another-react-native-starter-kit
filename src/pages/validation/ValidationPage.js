
import React from 'react';
import styles from './validation.styles';
import { AppStyles } from '../../theme';
import { Image } from 'react-native';
import { Text, View } from 'native-base';
import { translate } from '../../i18n/i18n';

class ValidationPage extends React.Component {
  render() {
    return (
      <View style={AppStyles.baseView}>
        <View style={[AppStyles.innerView, styles.view]}>
          <Text style={[AppStyles.h3Dark, AppStyles.marginBottom, AppStyles.textCenterAligned]}>{translate('validation.text')}</Text>
          <Image
            source={require('../../assets/icons/status/check.png')}
          />
        </View>
      </View>
    );
  }
}

export default ValidationPage;
