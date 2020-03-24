import React, { useState, useEffect } from 'react';
import Vote from './Vote';

//https://codesandbox.io/s/react-hooks-demo-u7xd9
const VoteList = props => {
    //console.log(props);
    return (
      <div>
        {props.voteTypes.map(vote => (
          <Vote key={vote.id} vote={vote} onClick={props.onClick} />
        ))}
      </div>
    );
  };

export default VoteList;