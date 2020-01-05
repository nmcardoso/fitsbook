import React from 'react';
import TrainingLabel from './TrainingLabel';
import ModelsApi from '../api/ModelsApi';
import UnauthorizedAlert from '../helpers/UnauthorizedAlert';

function StopSignalNotification(props) {
  return (
    <div className={`alert alert-success ${props.show ? '' : 'd-none'}`}>
      Stop signal sent. The training will end at the end of the current epoch.
    </div>
  );
}

class TrainingPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showStopSignalNotification: false
    }
  }

  async stopTrainingClickHandler() {
    const api = new ModelsApi();
    const code = await api.stopTraining(this.props.id);
    if (code === 200) {
      this.setState({ showStopSignalNotification: true });
    } else {
      UnauthorizedAlert();
    }
  }

  createModal() {
    return (
      <div className="modal fade" id="training-panel-modal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm</h5>
              <button type="button" className="close" data-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              Do you really want to stop training?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => this.stopTrainingClickHandler()}>
                Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="alert alert-secondary">
          <div className="d-flex justify-content-between align-items-center">
            <TrainingLabel />
            <button
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#training-panel-modal"
              disabled={this.state.showStopSignalNotification}>
              Stop Training
            </button>
          </div>
        </div>

        <StopSignalNotification show={this.state.showStopSignalNotification} />

        {this.createModal('btn btn-primary')}
      </div>
    );
  }
}

export default TrainingPanel;