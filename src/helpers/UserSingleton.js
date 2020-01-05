class UserSingleton {
  constructor() {
    if (!!UserSingleton.instance) {
      return UserSingleton.instance;
    }

    // autoload data from local storage
    this.token = localStorage.getItem('user_token');
    this.expiration = localStorage.getItem('user_token_expitarion');
    this.id = localStorage.getItem('user_id');
    this.loginListener = () => { };
    this.logoutListener = () => { };

    UserSingleton.instance = this;
    return this;
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('user_token', token);
    this.loginListener();
  }

  getTokenExpiration() {
    return this.expiration;
  }

  setTokenExpiration(expiration) {
    this.expiration = expiration;
    localStorage.setItem('user_token_expiration', expiration);
  }

  getUserId() {
    return this.id;
  }

  setUserId(id) {
    this.id = id;
    localStorage.setItem('user_id', id);
  }

  clearData() {
    this.id = null;
    this.expiration = null;
    this.token = null;
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_token_expiration');
    this.logoutListener();
  }

  addLoginListener(listener) {
    this.loginListener = listener;
  }

  addLogoutListener(listener) {
    this.logoutListener = listener;
  }
}

export default UserSingleton;
