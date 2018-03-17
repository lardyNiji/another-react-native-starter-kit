import PropTypes from 'prop-types';
import React from 'react';
import { AppColors, AppStyles } from '../theme';
import { Button as RButton, View } from 'react-native';
import { translate } from '../i18n/i18n';

class Button extends React.Component {
  render() {
    return (
      <View style={AppStyles.marginBottomSml}>
        <RButton disabled={this.props.disabled} onPress={this.props.onPress} color={AppColors.primary} title={translate(this.props.translate)} />
      </View>
    );
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  translate: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
