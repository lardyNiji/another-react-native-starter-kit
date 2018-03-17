import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './login.styles';
import { ActionConst, Actions } from 'react-native-router-flux';
import { Button, Container, Icon, Input, Item, Text, View } from 'native-base';
import { ScrollView } from 'react-native';
import { translate } from '../../i18n/i18n';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login() {
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });

    Actions.dashboard({
      type: ActionConst.RESET,
    });
  }

  render() {
    return (
      <ScrollView>
        <Container style={styles.container}>
          <View style={styles.biggestview}>

            <View style={styles.bigview}>
              <View style={styles.view}>
                <View style={styles.iconinview}>
                  <Icon style={styles.icon} ios="ios-contact" android="md-contact" />
                </View>
                <Item style={styles.iteminview}>
                  <Input style={styles.bigtext} placeholder={translate('login.identifier')} placeholderTextColor="white" onChangeText={text => this.setState({ email: text })} />
                </Item>
              </View>

              <View style={styles.view}>
                <View style={styles.iconinview}>
                  <Icon style={styles.icon} ios="ios-lock" android="md-lock" />
                </View>
                <Item style={styles.iteminview}>
                  <Input style={styles.bigtext} secureTextEntry placeholder="**********" placeholderTextColor="white" onChangeText={text => this.setState({ password: text })} />
                </Item>
              </View>
            </View>

            <View style={styles.view}>
              <Button light style={styles.button} onPress={() => this.login()}>
                <Text style={styles.bigtextbutton}>{translate('login.authenticate')}</Text>
              </Button>
            </View>

            <View style={styles.view}>
              <Text style={styles.text}>{translate('login.lostPassword')} ?</Text>
            </View>

            <View style={styles.view}>
              <Text style={styles.text}>{translate('login.noAccountYet')} ? </Text>
              <Text style={styles.link}>{translate('login.signUp')}</Text>
            </View>

          </View>
        </Container>
      </ScrollView>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginPage;
