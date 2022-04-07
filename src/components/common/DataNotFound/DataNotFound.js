import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import './data-not-found.scss';

const DataNotFound = ({ history, code, title, message, navigation: { label, path } }) => {
  return (
    <div className="module-root align-loader">
      <div className="background-overlay">
        <h1 className="ff-rubik enormous-404">{code}</h1>
      </div>
      <div className="not-found-content ">
        <h2 className="ff-rubik oops-title">{title}</h2>
        <p className="ff-rubik oops-description">{message}</p>
        <div className="action-container">
          <Button className="btn-small redirect-btn" onClick={() => history.push(path)}>
            <KeyboardBackspace />
            {label}
          </Button>
        </div>
      </div>
    </div>
  );
};

DataNotFound.propTypes = {
  history: propTypes.any,
  code: propTypes.string,
  title: propTypes.string,
  message: propTypes.string,
  navigation: propTypes.object,
};

export default withRouter(DataNotFound);
