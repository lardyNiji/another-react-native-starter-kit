import AppRoutes from '../app/app.routes';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {AppStyles} from '../theme';
import {Reducer, Router} from 'react-native-router-flux';
import {View} from 'react-native';
import {connect} from 'react-redux';

class CustomRouter extends Component {
  reducerCreate = (params) => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
      this.props.dispatch(action);
      return defaultReducer(state, action);
    };
  };

  render() {
    return (
      <Router scenes={AppRoutes} createReducer={this.reducerCreate} style={AppStyles.appContainer} >
        {this.props.children}
      </Router>
    );
  }
}

CustomRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node,
};

CustomRouter.defaultProps = {
  children: <View />,
};

export default connect()(CustomRouter);
