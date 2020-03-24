import React from 'react';

class Vote extends React.Component {
  render() {
    const { color, label } = this.props.vote;
    return (<div style={{ backgroundColor: color }} onClick={() => this.props.onClick(this.props.vote, color)}>
      {label}
    </div>);
  }
}

export default Vote;