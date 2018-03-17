import CustomRouter from './utils/custom-router';
import React, { Component } from 'react';
import androidBackHandler from './utils/back-handler';
import store from './redux/store';
import { AppColors, AppStyles } from './theme';
import { BackHandler, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

export default class App extends Component {
  componentDidMount() {
    console.log('App : componentDidMount');
    BackHandler.addEventListener('hardwareBackPress', androidBackHandler); // Listen for the hardware back button on Android to be pressed
  }

  componentWillUnmount() {
    console.log('App : componentWillUnmount');
    BackHandler.removeEventListener('hardwareBackPress', androidBackHandler); // Remove listener
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <View style={AppStyles.baseView}>
            <StatusBar
              backgroundColor={AppColors.blue400}
              barStyle="light-content"
            />
            <CustomRouter />
          </View>
        </Root>
      </Provider>
    );
  }
}
