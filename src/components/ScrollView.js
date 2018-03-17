import ErrorComponent from './NetworkError';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ActivityIndicator, ScrollView as ScrollViewNative, View } from 'react-native';
import { AppColors, AppStyles } from '../theme';

const styles = {
  container: {
    flex: 1,
  },
};

class ScrollView extends Component {

  render() {
    return (
      <View style={styles.container}>
        {!this.props.loading && !this.props.loadingError && (
          <ScrollViewNative>
            <View style={{ marginBottom: 80 }}>
              {this.props.children}
            </View>
          </ScrollViewNative>
        )}

        {this.props.loading && (
          <ActivityIndicator
            color={AppColors.primary}
            size="large"
            style={AppStyles.activityIndicatorStyle}
          />
        )}

        {this.props.loadingError && <ErrorComponent onRetry={this.props.onRetry} />}
      </View>
    );
  }
}

ScrollView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  loading: PropTypes.bool,
  loadingError: PropTypes.bool,
  onRetry: PropTypes.func,
};

ScrollView.defaultProps = {
  children: [],
  loading: false,
  loadingError: false,
  onRetry: null,
};

export default ScrollView;
