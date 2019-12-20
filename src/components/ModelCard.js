import React from 'react';
import { Link } from 'react-router-dom';

class ModelCard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
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

  timeSince(timestamp) {
    const yearInSeconds = 31536000;
    const monthInSeconds = 2592000;
    const dayInSeconds = 86400;
    const hourInSeconds = 3600;
    const minuteInSeconds = 60;
    const seconds = Math.floor((Date.now() - timestamp) / 1000);

    let interval = Math.floor(seconds / yearInSeconds);
    if (interval > 1) {
      return interval + ' years ago';
    }

    interval = Math.floor(seconds / monthInSeconds);
    if (interval > 1) {
      return interval + ' months ago';
    }

    interval = Math.floor(seconds / dayInSeconds);
    if (interval > 1) {
      return interval + ' days ago';
    }

    interval = Math.floor(seconds / hourInSeconds);
    if (interval > 1) {
      return interval + ' hours ago';
    }

    interval = Math.floor(seconds / minuteInSeconds);
    if (interval > 1) {
      return interval + ' minutes ago';
    }

    return Math.floor(seconds) + ' seconds ago';
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

  render() {
    const { id, model } = this.props;

    return (
      <Link to={`/stats/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className={`card ${this.props.className}`}>
          <div className="card-body">
            <h5 className="title">
              {model.model.name}
            </h5>
            <small className="d-block card-text mb-0 pb-0">
              Start: {this.formatDate(model.training_start)} &#x2022;
              End: {this.formatDate(model.training_end)}
            </small>
            <small className="d-block card-text">
              Elapsed Time: {this.elapsedTime(model.training_start, model.training_end)}
            </small>
          </div>
        </div>
      </Link>
    );
  }
}

export default ModelCard;