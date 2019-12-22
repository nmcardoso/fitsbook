import React from 'react';
import './Spinner.css';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.intervalId = setInterval(() => {
      this.setState({ show: true });
    }, 400);
  }

  componentWillUnmount() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      this.state.show && <div className="spinner"></div>
    );
  }
}

export default Spinner;