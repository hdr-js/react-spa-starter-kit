import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Root = () => {
  const { loggedIn } = useSelector(state => state.auth);
  console.log('loggedIn', loggedIn);
  if (loggedIn) {
    return <Redirect to="/login" />;
  }
  return <Redirect to="/dashboard" />;
};

export default Root;
