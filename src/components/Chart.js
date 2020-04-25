import React from 'react';
import ChartJS from 'chart.js';
import './Chart.css';
import 'chartjs-plugin-zoom';

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
          text: 'Metrics per Epoch'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
              fontColor: '#333'
            },
            scaleLabel: {
              display: false,
              labelString: 'Metric'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: '#333'
            },
            scaleLabel: {
              display: true,
              labelString: 'Epoch'
            }
          }]
        },
        elements: {
          point: {
            radius: 1,
            hoverRadius: 4,
            hitRadius: 5
          }
        },
        tooltips: {
          intersect: false,
          mode: 'index',
          axis: 'x',
          position: 'nearest'
        },
        aspectRatio: 1.75,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x',
              rangeMin: {
                x: 0
              },
              rangeMax: {
                x: null
              },
              speed: 10
            },
            zoom: {
              enabled: true,
              drag: false,
              mode: 'x',
              rangeMin: {
                x: 0
              },
              rangeMax: {
                x: null
              },
              speed: 5,
              sensitivity: 3
            }
          }
        }
      }
    };

    this.chartInstance = new ChartJS(ctx, this.chartConfig);
    ctx.addEventListener('dblclick', () => this.chartInstance.resetZoom())
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
      <div className="ChartWrapper">
        <canvas id="react-chart" />
      </div>
    );
  }
}

export default Chart;
