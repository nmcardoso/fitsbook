import React from 'react';
import ModelsApi from '../api/ModelsApi';
import Chart from './Chart';
import HistoryParser from '../helpers/HistoryParser';
import SideModelInfo from './SideModelInfo';
import TrainingPanel from './TrainingPanel';
import io from 'socket.io-client';
import './StatsRoute.css';
import Spinner from './Spinner';
import Navbar from './Navbar';

class StatsRoute extends React.Component {
  constructor(params) {
    super(params);
    this.params = {
      id: params.match.params.id
    }
    this.state = {
      data: null,
      showSpinner: true
    }
    this.socket = null;
    this.model = null;
  }

  async drawChart() {
    const api = new ModelsApi();
    const history = await api.getHistory(this.params.id);
    const parser = new HistoryParser();
    const parsedHistory = parser.parse(history);

    this.setState({
      data: parsedHistory,
      showSpinner: false
    });
  }

  socketUpdate(newData) {
    const oldData = this.state.data;
    if (!oldData) {
      this.drawChart();
      return;
    }

    const keys = Object.keys(newData.metrics);

    oldData.datasets.forEach(dataset => {
      if (keys.includes(dataset.label)) {
        dataset.data.push(newData.metrics[dataset.label]);
      }
    });

    oldData.labels.push(newData.epoch);

    this.setState({
      data: { ...oldData },
      showSpinner: false
    });
  }

  async componentDidMount() {
    this.socket = io(new ModelsApi().SOCKET_URL);
    this.socket.on(`history-${this.params.id}`, (data) => {
      console.log('socket data', data);
      this.socketUpdate(data);
    });
    this.socket.on(`training-${this.params.id}`, async (data) => {
      if (data === 'end') {
        const api = new ModelsApi();
        const model = await api.getModel(this.params.id);
        this.setState({ model });
      }
    });

    const api = new ModelsApi();
    const model = await api.getModel(this.params.id);
    this.setState({ model, showSpinner: false });

    this.drawChart();
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    const renderTrainingPanel = (condition) => {
      if (condition) {
        return <TrainingPanel id={this.params.id} />;
      }
    }

    if (this.state.showSpinner) {
      return (
        <>
          <Navbar />
          <div className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center" style={{ marginTop: '-42px' }}>
            <Spinner />
          </div>
        </>
      );
    }

    return (
      <>
        <Navbar />
        <div className="StatsRoute container-fluid flex-grow-1">
          <div className="row h-100">
            <div className="col-lg-9 mt-2 mt-lg-0 d-flex align-items-center justify-content-center">
              <Chart data={this.state.data} />
            </div>
            <div className="sidebar col-lg-3 pr-lg-0 d-none d-lg-block d-xl-block"> {/* for desktop */}
              <div className="py-3">
                {renderTrainingPanel(this.state.model && !this.state.model.training_end)}
                <SideModelInfo model={this.state.model} />
              </div>
            </div>
            <div className="col-lg-3 d-lg-none d-xl-none py-3"> {/* for mobile */}
              {renderTrainingPanel(this.state.model && !this.state.model.training_end)}
              <SideModelInfo model={this.state.model} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StatsRoute;