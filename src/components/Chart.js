import React from 'react';
import ChartJS from 'chart.js';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  componentDidMount() {
    const ctx = document.getElementById('react-chart');
    this.chartConfig = {
      type: 'line',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        aspectRatio: 1.75,
        responsive: true
      }
    };

    this.chartInstance = new ChartJS(ctx, this.chartConfig);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('this.props', this.props);

    if (this.props.data) {
      this.chartConfig.data.labels = this.props.data.labels;
      this.chartConfig.data.datasets = this.props.data.datasets;
      this.chartInstance.update();
    }
  }

  render() {
    return (
      <div style={{ width: this.props.width, height: this.props.height }}>
        <canvas id="react-chart" />
      </div>
    );
  }
}

export default Chart;