/**
 * Splash Screen Container
 */

// The component we're mapping to
import LoginPage from '../pages/login/LoginPage';
import * as UserActions from '../redux/actions/user-actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// What data from the store shall we send to the component?
const mapStateToProps = (state) => {
  return {
    email: state.user.email,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
