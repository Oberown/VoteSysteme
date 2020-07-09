import React from 'react';
import Vote from './Vote';

const VoteList = props => {
  var empty ={"id":"","label":"Annuler","rank":"999","color":"Blue","category":"X"};
 
    return (
      <div>
        {props.voteTypes.map(vote => (
          <Vote key={vote.id} vote={vote} onClick={props.onClick} />
        ))}
         <Vote key={empty.id} vote={empty} onClick={props.onClick} />
      </div>
    );
  };

export default VoteList;