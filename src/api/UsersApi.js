import Api from './Api';

class UsersApi extends Api {
  auth(username, password) {
    return this.post('/auth/token', { username, password }).then(res => res.json());
  }
}

export default UsersApi;