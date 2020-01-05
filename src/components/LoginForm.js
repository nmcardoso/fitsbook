import React from 'react';
import Icon from '@mdi/react';
import { mdiAccount, mdiKey } from '@mdi/js';
import UsersApi from '../api/UsersApi';
import UserSingleton from '../helpers/UserSingleton';
import Alertbox from './Alertbox';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
      alertbox: null,
      redirect: null
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (this.state.loading) return;

    const { username, password } = this.state;
    const api = new UsersApi();

    if (username && password) {
      this.setState({ loading: true });
      const token = await api.auth(username, password);
      if (token.success) {
        const userSingleton = new UserSingleton();
        userSingleton.setUserId(token.userid);
        userSingleton.setToken(token.token);
        userSingleton.setTokenExpiration(token.valid_until);
        this.setState({ redirect: '/' });
      } else {
        this.setState({
          alertbox: <Alertbox type="danger" message={token.message} />,
          loading: false
        });
      }
    }
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect exact to={this.state.redirect} />
      );
    }

    const { username, password, alertbox, loading } = this.state;

    const LoadingButton = () => {
      return (
        <button className="btn btn-primary text-right" type="submit" disabled>
          <span className="spinner-border spinner-border-sm"></span> Loading...
        </button>
      );
    }
    const SubmitButton = () => {
      return (
        <button className="btn btn-primary text-right" type="submit">
          Submit
        </button>
      );
    }

    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        {alertbox}
        <div className="form-group mt-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text"><Icon path={mdiAccount} size={.8} /></div>
            </div>
            <input className="form-control"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => this.handleChange(e)} />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text"><Icon path={mdiKey} size={.8} /></div>
            </div>
            <input className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => this.handleChange(e)} />
          </div>
        </div>
        <div className="text-right">
          {loading ? <LoadingButton /> : <SubmitButton />}
        </div>
      </form>
    );
  }
}

export default LoginForm;