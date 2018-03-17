import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import styles from './intro.styles';
import { ActionConst, Actions } from 'react-native-router-flux';
import { ActivityIndicator, Image, Platform, TouchableOpacity } from 'react-native';
import { AppStyles } from '../../theme';
import { Button, Container, Text, View } from 'native-base';
import { translate } from '../../i18n/i18n';

class IntroPage extends Component {

  static getDerivedStateFromProps(nextProps, prevProps) {
    // Redirect to dashboard when user is authenticated
    if (nextProps.user.isAuthenticated) {
      console.log('IntroPage : user isAuthenticated, going to dashboard');
      Actions.dashboard({
        type: ActionConst.RESET,
      });

      return {
        loadingInfos: false,
      };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      loadingInfos: true,
    };
  }

  componentDidMount() {
    console.log('IntroPage : componentWillMount -> getUserInfos()');
    this.props.getUserInfos(); // catch is already handled in getUserInfos

    // Hide splash on Android
    if (Platform.OS === 'android') {
      console.log('IntroPage : hide Android SplashScreen');
      SplashScreen.hide();
    }
  }

  goToLogin = () => {
    Actions.login({
      type: ActionConst.RESET,
    });
  }

  /**
   * Render component
   * @returns {*}
   */
  render() {
    return (
      <View style={[AppStyles.container]}>

        <Image source={require('../../assets/images/intro.jpeg')} style={styles.background} />

        <Container style={styles.container}>
          <View style={styles.biggestview}>

            <View style={styles.view}>
              <Text style={styles.bigtext}>{translate('intro.welcome')}</Text>
            </View>

            <ActivityIndicator animating={this.state.loadingInfos} size="large" color="#ffffff" />

            {!this.state.loadingInfos && (
              <View style={styles.view}>
                <Button light style={styles.button} onPress={this.goToLogin}>
                  <Text style={styles.bigtextbutton}>{translate('login.authenticate').toUpperCase()}</Text>
                </Button>
              </View>
            )}

            {!this.state.loadingInfos && (
              <TouchableOpacity style={styles.view}>
                <Text style={styles.text}>{translate('login.noAccountYet')} ? </Text>
                <Text style={styles.link}>{translate('login.signUp')}</Text>
              </TouchableOpacity>
            )}

          </View>
        </Container>
      </View>
    );
  }
}

IntroPage.propTypes = {
  user: PropTypes.object.isRequired,
  getUserInfos: PropTypes.func.isRequired,
};

export default IntroPage;
