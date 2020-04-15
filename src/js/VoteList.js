import React from 'react';
import Vote from './Vote';

const VoteList = props => {
    return (
      <div>
        {props.voteTypes.map(vote => (
          <Vote key={vote.id} vote={vote} onClick={props.onClick} />
        ))}
      </div>
    );
  };

export default VoteList;