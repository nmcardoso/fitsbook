import React from 'react';
import { Redirect } from 'react-router-dom';
import UserSingleton from '../helpers/UserSingleton';

class LogoutRoute extends React.Component {
  constructor(props) {
    super(props);
    const userSingleton = new UserSingleton();
    userSingleton.clearData();
  }

  render() {
    return (
      <Redirect exact to="/" />
    );
  }
}

export default LogoutRoute;