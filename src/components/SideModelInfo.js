import React from 'react';
import './SideModelInfo.css';

class SideModelInfo extends React.Component {
  createTable(data, keyPrefix) {
    if (!data) return;
    const rows = Object.keys(data).map((k, i) => {
      if (!data[k]) return null;

      return (
        <tr key={keyPrefix + '-' + i}>
          <td>{k}</td>
          <td>{data[k]}</td>
        </tr>
      );
    });

    return (
      <table className="table table-sm table-borderless table-responsive mb-0">
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

  drawLayers(data, keyPrefix) {
    const rows = data.map((layer, i) => {
      return (
        <div className="mt-2 px-1" key={`${keyPrefix}-${i}`}>
          <div className="d-flex justify-content-center">
            <a className={`btn btn-block btn-outline-${layer.info.Trainable ? 'primary' : 'secondary'}`}
              data-toggle="collapse"
              href={`#collapse-${keyPrefix}-${i}`}>
              {layer.className}
            </a>
          </div>
          <div className="collapse" id={`collapse-${keyPrefix}-${i}`}>
            <div className="card card-body p-1 mt-2">
              {this.createTable(layer.info, `collapse-${keyPrefix}-${i}-info`)}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {rows}
      </div>
    );
  }

  parseModelData() {
    const model = this.props.model;

    if (model && Object.keys(model).length > 0) {
      return {
        'Name': model.model.name,
        'Training Start': new Date(model.training_start).toLocaleString(),
        'Training End': new Date(model.training_end).toLocaleString(),
        'Duration': 'TODO'
      };
    }
    return {};
  }

  parseOptimizerData() {
    const model = this.props.model;

    if (model && Object.keys(model).length > 0) {
      return {
        'Name': model.optimizer.name,
        'Learning Rate': model.optimizer.config.learning_rate,
        'Rho': model.optimizer.config.rho,
        'Decay': model.optimizer.config.decay,
        'Epsilon': model.optimizer.config.epsilon
      };
    }
    return {};
  }

  parseLayersData() {
    const model = this.props.model;

    if (model && Object.keys(model).length > 0) {
      return model.model.config.layers.map(layer => {
        return {
          'className': layer.class_name,
          'info': {
            'Trainable': String(layer.config.trainable),
            'Data Type': layer.config.dtype,
            'Units': layer.config.units,
            'Activation': layer.config.activation,
            'Input Shape': layer.config.batch_input_shape ? `(${String(layer.config.batch_input_shape)})` : null
          }
        };
      });
    }
    return [];
  }

  render() {
    return (
      <div className="sideModelInfo mt-1">
        <h5 className="mt-3">Model</h5>
        {this.createTable(this.parseModelData(), 'model')}

        <h5 className="mt-3">Layers</h5>
        {this.drawLayers(this.parseLayersData(), 'layers')}

        <h5 className="mt-3">Optimizer</h5>
        {this.createTable(this.parseOptimizerData(), 'optimizer')}
      </div>
    );
  }
}

export default SideModelInfo;