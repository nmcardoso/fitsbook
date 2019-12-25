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
        title: {
          display: true,
          text: 'Metrics per Epoch Chart'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            },
            scaleLabel: {
              display: false,
              labelString: 'Percentage'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Epoch'
            }
          }]
        },
        aspectRatio: 1.75,
        responsive: true,
        maintainAspectRatio: false
      }
    };

    this.chartInstance = new ChartJS(ctx, this.chartConfig);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data) {
      this.chartConfig.data.labels = this.props.data.labels;
      this.chartConfig.data.datasets = this.props.data.datasets;
      this.chartInstance.update();
    }
  }

  render() {
    return (
      <div style={{
        width: this.props.width,
        height: this.props.height,
        minWidth: this.props.minWidth,
        minHeight: this.props.minHeight
      }}>
        <canvas id="react-chart" />
      </div>
    );
  }
}

export default Chart;