import PropTypes from 'prop-types';
import React from 'react';
import ScrollView from '../../components/ScrollView';
import { ActionConst, Actions } from 'react-native-router-flux';
import { AppColors, AppStyles } from '../../theme';
import { Text, View } from 'react-native';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loadingError: false,
    };
  }

  render() {
    return (
      <View style={AppStyles.baseView}>
        <ScrollView loading={this.state.loading} loadingError={this.state.loadingError} onRetry={() => this.getData()}>
          <Text>Dashboard page</Text>
        </ScrollView>
      </View>
    );
  }
}

DashboardPage.propTypes = {
};

DashboardPage.defaultProps = {
};

export default DashboardPage;
