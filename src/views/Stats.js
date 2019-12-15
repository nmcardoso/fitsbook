import React from 'react';
import ModelsApi from '../api/ModelsApi';
import Chart from '../components/Chart';
import HistoryParser from '../helpers/HistoryParser';

class Stats extends React.Component {
  constructor(params) {
    super(params);
    this.params = {
      id: params.match.params.id
    }
    this.state = {
      data: null
    }
  }

  async componentDidMount() {
    const api = new ModelsApi();
    const history = await api.getHistory(this.params.id);
    const parser = new HistoryParser();
    const parsedHistory = parser.parse(history);

    this.setState({
      data: parsedHistory
    });

    // const data = {
    //   labels: [0, 1, 2, 3],
    //   datasets: [{
    //     label: 'Line',
    //     data: [100, 200, 250, 300],
    //     fill: false,
    //     borderColor: 'rgb(75, 192, 192)',
    //     backgroundColor: 'rgb(75, 192, 192)',
    //     lineTension: 0
    //   }]
    // };

    // setInterval(() => {
    //   data.labels.push(data.labels[data.labels.length - 1] + 1);
    //   data.datasets[0].data.push(Math.random() * 150);
    //   this.setState({
    //     data: data
    //   });
    // }, 1000);
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