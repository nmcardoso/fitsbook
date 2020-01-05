import React from 'react';
import ModelsApi from '../api/ModelsApi';
import ModelCard from './ModelCard';
import Spinner from './Spinner';
import Navbar from './Navbar';

class ModelsRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      showSpinner: true
    };
  }

  createTable(cards) {
    const rows = [];

    for (let i = 0; i < Math.ceil(cards.length / 2.0); i++) {
      const cols = [];

      for (let j = 0; j < 2 && 2 * i + j < cards.length; j++) {
        cols.push(
          <div key={`e-${i}-${j}`} className="col-md-6">
            {cards[2 * i + j]}
          </div>
        );
      }

      rows.push(
        <div key={`e-${i}`} className="row">
          {cols}
        </div>
      );
    }

    return rows;
  }

  async componentDidMount() {
    const api = new ModelsApi();
    const models = await api.getModels();

    const cards = models.map(model => {
      return (
        <ModelCard key={model.id} id={model.id} model={model} className="mb-2" />
      );
    });

    this.setState({
      cards: cards,
      showSpinner: false
    });
  }

  render() {
    if (this.state.showSpinner) {
      return (
        <>
          <Navbar />
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center" style={{ marginTop: '-42px' }}>
          <Spinner />
        </div>
        </>
      );
    }

    return (
      <>
        <Navbar />
      <div className="container mt-5">
        {this.createTable(this.state.cards)}
      </div>
      </>
    );
  }
}

export default ModelsRoute;