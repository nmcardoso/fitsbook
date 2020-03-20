class HistoryParser {
  constructor() {
    this.colors = [
      'rgb(75, 192, 192)',
      'rgb(255, 99, 132)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(54, 162, 235)',
      'rgb(201, 203, 207)'
    ];
    this.datasets = [];
  }

  createDatasetArray(keys) {
    return keys.map((key, i) => {
      return {
        label: key,
        data: [],
        borderColor: this.colors[i],
        backgroundColor: this.colors[i],
        fill: false,
        lineTension: 0
      };
    });
  }

  parse(data) {
    if (this.datasets.length === 0) {
      if (data.length > 0) {
        const keys = Object.keys(data[0].metrics);
        this.datasets = this.createDatasetArray(keys);
      } else {
        return;
      }
    }

    // { metric1: [ ... ], metric2: [ ... ], ... }
    const metricsObj = data.reduce((acc, curr) => {
      Object.keys(curr.metrics).forEach(metric => {
        if (metric in acc) {
          acc[metric].push(curr.metrics[metric]);
        } else {
          acc[metric] = [curr.metrics[metric]];
        }
      })
      return acc;
    }, {});

    const labels = data.map(r => {
      return r.epoch + 1;
    })

    this.datasets.forEach(dataset => {
      if (dataset.label in metricsObj) {
        dataset.data = metricsObj[dataset.label]
      }
    });

    return {
      labels: labels,
      datasets: this.datasets
    };
  }
}

export default HistoryParser;