/**
 * Splash Screen Container
 */
import IntroPage from '../pages/intro/IntroPage';
import * as UserActions from '../redux/actions/user-actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// What data from the store shall we send to the component?
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IntroPage);
