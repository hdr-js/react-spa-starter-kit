import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

import Button from '@material-ui/core/Button';

const PageNotFound = ({ history }) => {
  return (
    <div className="page-root">
      <div className="background-overlay">
        <h1 className="ff-rubik enormous-404">404</h1>
      </div>
      <div className="not-found-content ">
        <h2 className="ff-rubik oops-title">PAGE NOT FOUND!</h2>
        <p className="ff-rubik oops-description">
          The page either does not exist or is unaccessible.
        </p>
        <div className="action-container">
          <Button
            variant="contained"
            color="primary"
            className="theme-btn"
            onClick={() => history.push('/login')}
          >
            <KeyboardBackspace />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

PageNotFound.propTypes = {
  history: propTypes.any,
};

export default withRouter(PageNotFound);
