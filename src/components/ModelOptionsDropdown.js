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

  async deleteModelHandler() {
    const api = new ModelsApi();
    await api.deleteModel(this.props.model.id);
    this.setState({ redirect: true });
  }

  async editModelDescHandler() {
    const desc = window.prompt('New description', this.props.model.description);

    if (desc !== null) {
      const api = new ModelsApi();
      await api.updateDescription(this.props.model.id, { description: desc });
      const model = await api.getModel(this.props.model.id);
      this.props.updateParent({ model });
    }
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/models" push={true} />
      );
    }

    if (this.props.model.id) {
      return (
        <div className="dropdown">
          <i className="material-icons btn" id="dropdownMenuButton" data-toggle="dropdown">more_vert</i>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item d-inline-flex align-items-center pl-2" onClick={() => this.editModelDescHandler()}>
              <i className="material-icons pr-1">edit</i> <span>Edit description</span>
            </button>
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