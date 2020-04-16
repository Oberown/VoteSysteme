import React from 'react';

class Vote extends React.Component {
  render() {
    const { color, label } = this.props.vote;
    return (
      <button type="button" className="btn btnVote"
      style={{ backgroundColor: color }}
      onClick={() => this.props.onClick(this.props.vote, color)}>
        {label}
        </button>
    );
  }
}

export default Vote;