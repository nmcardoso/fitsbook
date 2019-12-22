import React from 'react';
import { Link } from 'react-router-dom';
import TrainingLabel from './TrainingLabel';
import DateTimeHelper from './../helpers/DateTimeHelper';

function DurationLabel(props) {
  if (props.show) {
    return (
      <div className="d-inline">
        <span className="text-muted font-weight-bold text-uppercase"> Duration: </span>
        {props.duration}
      </div>
    );
  }
  return null;
}

class ModelCard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { id, model } = this.props;
    const dth = new DateTimeHelper();

    return (
      <Link to={`/stats/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className={`card ${this.props.className}`}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">
                {model.model.name}
              </h5>
              {!model.training_end && <TrainingLabel />}
            </div>
            <small className="d-block card-text">
              <span className="text-muted font-weight-bold text-uppercase">Started: </span>
              {dth.timeSince(model.training_start)} &#x2022;
              <DurationLabel show={model.training_end} duration={dth.elapsedTime(model.training_start, model.training_end)} />
            </small>
          </div>
        </div>
      </Link>
    );
  }
}

export default ModelCard;