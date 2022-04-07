import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeNotification } from '../../../redux/actions/notification';

import Notification from './Notification';

const mapStateToProps = ({ notification }) => ({
  notifications: notification.list,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeNotification,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Notification));
