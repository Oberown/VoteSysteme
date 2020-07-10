import React, { useState, useEffect, useCallback } from 'react';
import VoteList from './VoteList';
import Postulant from './Postulant';
import ChangePostulantButton from './ChangePostulantButton';
import { useFetch } from './useFetch';
import axios from 'axios';
import { useSwipeable } from 'react-swipeable'
var querystring = require('querystring');
//https://www.npmjs.com/package/react-swipeable


const  App = () => {
  const [backgroundVote, setBackgroundVote] = useState("");
  const [postulantIndex, setPostulantIndex] = useState(0);
  const params = new URLSearchParams(window.location.search)
const idParam = params.get('id');

  var dataAjaxVoteTypes = useFetch("https://improparis.com/gestion/postulant/AjaxLevelAppreciation.php");
  var dataAjaxPostulants = useFetch("https://improparis.com/gestion/postulant/AjaxPostulants.php?id="+idParam);



const postulantData = dataAjaxPostulants ?? [{}];

 let state = {
    postulant:  postulantData[postulantIndex],
    voteTypes:  dataAjaxVoteTypes ?? []
  };

  const onVoteClick = (vote, background) => {
    state.postulant.vote = vote;
    setBackgroundVote(background);
   
    axios.post('https://improparis.com/gestion/postulant/AjaxPostulantVote.php', querystring.stringify({
      idPostulant: state.postulant.id,
      idlevelappreciation: vote.id
    }))
    .then(function (response) {
      
    })
    .catch(function (error) {

    });
  };

  const onChangePostulant = async index => {
    var newIndex = getNewPostulantIndex(index);
    setPostulantIndex(newIndex);
  };

  const getNewPostulantIndex = indexChangement => {
    const newIndex = postulantIndex + indexChangement;
    if (postulantData.length <= newIndex) {
      return 0;
    } else if (newIndex < 0) {
      return postulantData.length - 1;
    }
    return newIndex;
  };

  const previousPostulant = postulantData[getNewPostulantIndex(-1)];
  const nextPostulant = postulantData[getNewPostulantIndex(1)];

  const handlers = useSwipeable({
    onSwipedLeft: () => onChangePostulant(1),
    onSwipedRight: () => onChangePostulant(-1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

function moveFunction(event) {
    if(event.keyCode === 37) {
    }
    else if(event.keyCode === 39) {
      console.log('droite', postulantData);
      //onChangePostulant(1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", moveFunction, false);

    return () => {
      document.removeEventListener("keydown", moveFunction, false);
    };
  }, []);

  return (
    <div {...handlers} style={{ backgroundColor: state.postulant.vote === undefined || state.postulant.vote === null ? '' : state.postulant.vote.color}}>
        <Postulant profile={state.postulant} />
        <VoteList voteTypes={state.voteTypes} onClick={onVoteClick} />
        <ChangePostulantButton
          onClick={onChangePostulant}
          indexChange={-1}
          postulant={previousPostulant}
        />
        <ChangePostulantButton
          onClick={onChangePostulant}
          indexChange={1}
          postulant={nextPostulant}
        />
    </div>
  );
};
export default App;
