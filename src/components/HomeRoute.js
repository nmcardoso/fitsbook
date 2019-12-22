import React from 'react';
import './HomeRoute.css';

class HomeRoute extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  // Bootstrap tooltips
  loadTooltips() {
    Object.keys(this.refs).forEach(key => {
      window.$(this.refs[key]).tooltip();
    })
  }

  componentDidMount() {
    this.loadTooltips();
  }

  render() {
    const root = process.env.PUBLIC_URL;

    return (
      <div className="HomeRoute container mt-5">
        <div className="d-flex justify-content-center align-items-center">
          <img src={root + '/img/data_science_icon_square_black.svg'} height="65px" alt="" />
          <span className="display-4 font-weight-bold ml-3">Fitsbook</span>
        </div>

        <div className="mt-5 pt-3 description d-flex">
          <span class="text-center">
            Tool for generating real-time machine learning training statistics and storing model histories.
            Direct integration with Keras Framework.
          </span>
        </div>

        <div className="mt-5 pt-3">
          <h3>Created With</h3>
          <div className="alert alert-secondary logos d-flex flex-row flex-wrap justify-content-around align-items-center mt-2 py-2">
            <a href="https://reactjs.org/" ref="0" data-toggle="tooltip" title="React">
              <img className="mx-3 my-2" src={root + '/img/logo_react.svg'} alt="React" />
            </a>
            <a href="https://getbootstrap.com/" ref="1" data-toggle="tooltip" title="Bootstrap">
              <img className="mx-3 my-2" src={root + '/img/logo_bootstrap4.svg'} alt="Bootstrap" />
            </a>
            <a href="https://www.sqlite.org/index.html" ref="2" data-toggle="tooltip" title="SqLite">
              <img className="mx-3 my-2" src={root + '/img/logo_sqlite.svg'} alt="Sqlite" />
            </a>
            <a href="https://expressjs.com/" ref="3" data-toggle="tooltip" title="Express">
              <img className="mx-3 my-2" src={root + '/img/logo_express.svg'} alt="Express" />
            </a>
            <a href="https://socket.io/" ref="7" data-toggle="tooltip" title="Socket.io">
              <img className="mx-3 my-2" src={root + '/img/logo_socketio.svg'} alt="Socket.io" />
            </a>
            <a href="https://keras.io/" ref="6" data-toggle="tooltip" title="Keras">
              <img className="mx-3 my-2" src={root + '/img/logo_keras.jpg'} alt="Keras" />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3>Powered By</h3>
          <div className="alert alert-secondary logos d-flex flex-row flex-wrap justify-content-around align-items-center mt-2 py-2">
            <a href="https://pages.github.com/" ref="4" data-toggle="tooltip" title="Github Pages">
              <img className="mx-3 my-2" src={root + '/img/logo_ghpages.png'} alt="Github Pages" />
            </a>
            <a href="https://glitch.com/" ref="5" data-toggle="tooltip" title="Glitch.me">
              <img className="mx-3 my-2" src={root + '/img/logo_glitch.svg'} alt="Glitch.me" />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3>Open Source</h3>
          <div className="alert alert-secondary repos d-flex flex-row flex-wrap justify-content-around align-items-center mt-2">
            <a className="d-flex flex-row align-items-center" href="https://github.com/nmcardoso/fitsbook">
              <img className="pr-2" width="30px" height="30px" src={root + '/img/logo_github.svg'} alt="Github" /> WebApp Repo
            </a>
            <a className="d-flex flex-row align-items-center" href="https://github.com/nmcardoso/fitsbook-server">
              <img className="pr-2" width="30px" height="30px" src={root + '/img/logo_github.svg'} alt="Github" /> API Repo
            </a>
            <a className="d-flex flex-row align-items-center" href="https://github.com/nmcardoso/fitsbook-python">
              <img className="pr-2" width="30px" height="30px" src={root + '/img/logo_github.svg'} alt="Github" /> Python Library Repo
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeRoute;