
import Button from '../components/Button';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AppStyles } from '../theme';
import { Image, Text } from 'react-native';
import { View } from 'native-base';
import { translate } from '../i18n/i18n';

const styles = {
  view: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

class ErrorComponent extends Component {

  render() {
    return (
      <View style={AppStyles.container}>
        <View style={[AppStyles.innerView, styles.view]}>
          <Text style={[AppStyles.h3Dark, AppStyles.marginBottom, AppStyles.textCenterAligned]}>{translate('errors.networkText')}</Text>
          <Image
            source={require('../assets/icons/status/warning.png')}
          />
          {(this.props.onRetry !== null) &&
            <View style={AppStyles.marginTop}>
              <Button translate="common.retry" onPress={this.props.onRetry} />
            </View>
          }
        </View>
      </View>
    );
  }
}

ErrorComponent.propTypes = {
  onRetry: PropTypes.func,
};

ErrorComponent.defaultProps = {
  onRetry: null,
};

export default ErrorComponent;
