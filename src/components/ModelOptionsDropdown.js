import React from 'react';
import ModelsApi from '../api/ModelsApi';
import { Redirect } from 'react-router-dom';

class ModelOptionsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  deleteModelHandler() {
    const api = new ModelsApi();
    api.deleteModel(this.props.id);
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/models" push={true} />
      );
    }

    if (this.props.id) {
      return (
        <div className="dropdown">
          <i className="material-icons btn" id="dropdownMenuButton" data-toggle="dropdown">more_vert</i>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item d-inline-flex align-items-center pl-2" onClick={() => this.deleteModelHandler()}>
              <i className="material-icons pr-1">delete</i> <span>Delete this model</span>
            </button>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default ModelOptionsDropdown;