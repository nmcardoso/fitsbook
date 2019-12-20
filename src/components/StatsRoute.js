import React from 'react';
import ModelsApi from '../api/ModelsApi';
import Chart from './Chart';
import HistoryParser from '../helpers/HistoryParser';
import SideModelInfo from './SideModelInfo';
import TrainingPanel from './TrainingPanel';
import io from 'socket.io-client';

class StatsRoute extends React.Component {
  constructor(params) {
    super(params);
    this.params = {
      id: params.match.params.id
    }
    this.state = {
      data: null
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
      data: parsedHistory
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
      data: { ...oldData }
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
    this.setState({ model });

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

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 mt-5">
            <Chart data={this.state.data} />
          </div>
          <div className="col-lg-3 h-100 pt-3">
            {renderTrainingPanel(this.state.model && !this.state.model.training_end)}
            <SideModelInfo model={this.state.model} />
          </div>
        </div>
      </div>
    );
  }
}

export default StatsRoute;