import React from 'react';
import ModelsApi from '../api/ModelsApi';
import Chart from '../components/Chart';
import HistoryParser from '../helpers/HistoryParser';
import io from 'socket.io-client';

class Stats extends React.Component {
  constructor(params) {
    super(params);
    this.params = {
      id: params.match.params.id
    }
    this.state = {
      data: null
    }
    this.socket = null;
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

  componentDidMount() {
    this.socket = io('http://localhost:8000');
    this.socket.on(`history-${this.params.id}`, (data) => {
      console.log('socket data', data);
      this.socketUpdate(data);
    });

    this.drawChart();
  }

  render() {
    return (
      <div className="container mt-5">
        <Chart data={this.state.data} />
      </div>
    );
  }
}

export default Stats;