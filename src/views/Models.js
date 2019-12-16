import React from 'react';
import ModelsApi from '../api/ModelsApi';
import { Link } from 'react-router-dom';
import ModelCard from '../components/ModelCard';

class Models extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  async componentDidMount() {
    const api = new ModelsApi();
    const models = await api.getModels();

    const cards = Object.keys(models).map(k => {
      return (
        <ModelCard key={k} id={k} model={models[k]} />
      );
    });

    this.setState({
      cards: cards
    });
  }

  render() {
    return (
      <div className="container mt-5">
        {this.state.cards}
      </div>
    );
  }
}

export default Models;