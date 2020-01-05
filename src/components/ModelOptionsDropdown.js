import React from 'react';
import ModelsApi from '../api/ModelsApi';
import { Redirect } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiPencil, mdiDelete } from '@mdi/js';
import UnauthorizedAlert from '../helpers/UnauthorizedAlert';

class ModelOptionsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  async deleteModelHandler() {
    if (!window.confirm('Are you sure you want to delete this model?')) return;

    const api = new ModelsApi();
    const code = await api.deleteModel(this.props.model.id);
    if (code === 200) {
      this.setState({ redirect: true });
    } else {
      UnauthorizedAlert();
    }
  }

  async editModelDescHandler() {
    const desc = window.prompt('New description', this.props.model.description);

    if (desc !== null) {
      const api = new ModelsApi();
      const code = await api.updateDescription(this.props.model.id, { description: desc });
      if (code === 200) {
        const model = await api.getModel(this.props.model.id);
        this.props.updateParent({ model });
      } else {
        UnauthorizedAlert();
      }
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
          <div className="btn" id="dropdownMenuButton" data-toggle="dropdown">
            <Icon path={mdiDotsVertical} size={1} />
          </div>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item d-inline-flex align-items-center pl-2" onClick={() => this.editModelDescHandler()}>
              <span className="pr-1 align-middle"><Icon path={mdiPencil} size={.7} className="d-block" /></span> <span>Edit description</span>
            </button>
            <button className="dropdown-item d-inline-flex align-items-center pl-2" onClick={() => this.deleteModelHandler()}>
              <span className="pr-1"><Icon path={mdiDelete} size={.7} className="d-block" /></span> <span>Delete this model</span>
            </button>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default ModelOptionsDropdown;