import React from 'react';

class Alertbox extends React.Component {
  render() {
    const type = this.props.type ? `alert-${this.props.type}` : '';
    const classes = this.props.className || '';
    return (
      <div className={`alert ${type} ${classes}`}>
        {this.props.message}
      </div>
    );
  }
}

export default Alertbox;