class Api {
  // API_ROOT = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
  // 'https://localhost:8000/api' : 'https://fitsbook.glitch.me/api';

  constructor() {
    // this.API_ROOT = 'https://fitsbook.glitch.me/api';
    this.API_ROOT = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
      'http://localhost:8000/api' : 'https://fitsbook.glitch.me/api';
  }

  get(route) {
    const init = {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow'
    };

    return fetch(`${this.API_ROOT}${route}`, init).then(res => res.json());
  }

  post(route, body) {
    const init = {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      body
    };

    return fetch(`${this.API_ROOT}${route}`, init).then(res => res.json());
  }

  basePost(route, body) {
    const init = {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      body
    };

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