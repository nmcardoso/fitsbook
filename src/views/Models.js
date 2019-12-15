import React from 'react';
import ModelsApi from '../api/ModelsApi';
import { Link } from 'react-router-dom';

class Models extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + date.getMonth()).slice(-2);
    const year = ('0' + date.getFullYear()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
  }

  elapsedTime(start, end) {
    const delta = Math.abs((end - start) / 1000);
    const days = Math.floor(delta / 86400);
    const hours = Math.floor(delta / 3600) % 24;
    const minutes = Math.floor(delta / 60) % 60;
    const seconds = delta % 60;

    let s = days > 0 ? days + ' days, ' : '';
    s += hours > 0 ? hours + 'h, ' : '';
    s += minutes > 0 ? minutes + 'min, ' : '';
    s += seconds > 0 ? seconds + 's' : '';
    return s;
  }

  async componentDidMount() {
    const api = new ModelsApi();
    const models = await api.getModels();
    console.log(models);

    const cards = Object.keys(models).map(k => {
      return (
        <Link to={`/stats/${k}`} key={k} style={{ color: 'inherit', textDecoration: 'none' }}>
          <div className="card">
            <div className="card-body">
              <h5 className="title">
                {models[k].model.name}
              </h5>
              <small className="d-block card-text mb-0 pb-0">
                Start: {this.formatDate(models[k].training_start)} &#x2022;
              End: {this.formatDate(models[k].training_end)}
              </small>
              <small className="d-block card-text">
                Elapsed Time: {this.elapsedTime(models[k].training_start, models[k].training_end)}
              </small>
            </div>
          </div>
        </Link>
      );
    });

    this.setState({
      cards: cards
    });
  }

  render() {
    return (
      <div className="container mt-5">
        {this.state.cards}
      </div>
    );
  }
}

export default Models;