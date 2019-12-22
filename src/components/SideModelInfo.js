import React from 'react';
import './SideModelInfo.css';
import ModelOptionsDropdown from './ModelOptionsDropdown';
import DateTimeHelper from '../helpers/DateTimeHelper';

class SideModelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.model
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.model !== this.props.model) {
      this.setState({ model: this.props.model });
    }
  }

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

  parseModelData(model) {
    const dth = new DateTimeHelper();

    if (model && Object.keys(model).length > 0) {
      return {
        'Name': model.model.name,
        'Description': model.description,
        'Training Start': new Date(model.training_start).toLocaleString(),
        'Training End': model.training_end ? new Date(model.training_end).toLocaleString() : null,
        'Duration': model.training_end ? dth.elapsedTime(model.training_start, model.training_end) : null
      };
    }
    return {};
  }

  parseOptimizerData(model) {
    if (model && Object.keys(model).length > 0) {
      return {
        'Name': model.optimizer.name,
        'Learning Rate': model.optimizer.config.learning_rate || model.optimizer.config.lr,
        'Rho': model.optimizer.config.rho,
        'Decay': model.optimizer.config.decay,
        'Epsilon': model.optimizer.config.epsilon
      };
    }
    return {};
  }

  parseLayersData(model) {
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

  updateProps(props) {
  }

  render() {
    const { model } = this.state;
    return (
      <div className="sideModelInfo mt-1">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h5 className="mb-0">Model</h5>
          <ModelOptionsDropdown model={model ? model : {}} updateParent={s => this.setState(s)} />
        </div>
        {this.createTable(this.parseModelData(model), 'model')}

        <h5 className="mt-3">Layers</h5>
        {this.drawLayers(this.parseLayersData(model), 'layers')}

        <h5 className="mt-3">Optimizer</h5>
        {this.createTable(this.parseOptimizerData(model), 'optimizer')}
      </div>
    );
  }
}

export default SideModelInfo;
