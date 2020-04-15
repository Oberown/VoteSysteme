import React, { useState } from 'react';
import VoteList from './VoteList';
import Postulant from './Postulant';
import ChangePostulantButton from './ChangePostulantButton';
import { useFetch } from './useFetch';
import axios from 'axios';
var querystring = require('querystring');
//https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.3/axios.min.js

/*
const voteDataFake = [
  { id: "1", label: "Oui", color: "#00FF00" },
  { id: "2", label: "Neutre", color: "#999999" },
  { id: "3", label: "Non", color: "#FF0000" }
];*/

const  App = () => {
  const [backgroundVote, setBackgroundVote] = useState("");
  const [postulantIndex, setPostulantIndex] = useState(0);
  var dataAjaxVoteTypes = useFetch("https://improparis.com/gestion/postulant/AjaxLevelAppreciation.php");
  var dataAjaxPostulants = useFetch("https://improparis.com/gestion/postulant/AjaxPostulants.php");

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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const onChangePostulant = async index => {
    var newIndex = getNewPostulantIndex(index);
    setPostulantIndex(newIndex);
    if (postulantData[newIndex].vote !== null) {
      setBackgroundVote(postulantData[newIndex].vote.color);
    } else setBackgroundVote("");
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

  return (
    <div style={{ backgroundColor: backgroundVote }}>
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
