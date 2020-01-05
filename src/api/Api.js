import UserSingleton from "../helpers/UserSingleton";

class Api {
  // API_ROOT = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
  // 'https://localhost:8000/api' : 'https://fitsbook.glitch.me/api';

  constructor() {
    // this.API_ROOT = 'https://fitsbook.glitch.me/api';
    this.API_ROOT = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
      'http://localhost:8000/api' : 'https://fitsbook.glitch.me/api';
    this.SOCKET_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
      'http://localhost:8000' : 'https://fitsbook.glitch.me';
  }

  _getAuthHeaders() {
    const userSingleton = new UserSingleton();
    return {
      'X-Fitsbook-Token': userSingleton.getToken(),
      'X-Fitsbook-UID': userSingleton.getUserId()
    };
  }

  get(route) {
    const init = {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow',
      headers: this._getAuthHeaders()
    };

    return fetch(`${this.API_ROOT}${route}`, init);
  }

  post(route, body = {}) {
    const init = {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        ...this._getAuthHeaders()
      },
      body: JSON.stringify(body)
    };

    return fetch(`${this.API_ROOT}${route}`, init);
  }

  delete(route) {
    const init = {
      method: 'DELETE',
      mode: 'cors',
      redirect: 'follow',
      headers: this._getAuthHeaders()
    }

    return fetch(`${this.API_ROOT}${route}`, init);
  }

  ping() {
    fetch(`${this.API_ROOT}/ping`).then(res => res.text()).then(txt => {
      if (txt) return true;
      else return false;
    });
  }
}

export default Api;