/**
 * Dashboard Container
 */
import DashboardPage from '../pages/dashboard/DashboardPage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user,
});
const mapDispatchToProps = dispatch => bindActionCreators(null, dispatch);

export default connect(mapStateToProps, null)(DashboardPage);
