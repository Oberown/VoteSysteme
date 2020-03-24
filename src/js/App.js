import React, { useState, useEffect } from 'react';
import VoteList from './VoteList';
import Postulant from './Postulant';
import ChangePostulantButton from './ChangePostulantButton';

const postulantData = [
  {
    name: "Dan Abramov",
    photo: "https://avatars0.githubusercontent.com/u/810438?v=4"
  },
  {
    name: "Sophie Alpert",
    photo: "https://avatars2.githubusercontent.com/u/6820?v=4"
  },
  {
    name: "Sebastian Marfkbage",
    photo: "https://avatars2.githubusercontent.com/u/63648?v=4"
  },
  {
    name: "Frank herbet",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Frank_Herbert_-_1984.jpg/220px-Frank_Herbert_-_1984.jpg"
  },
  {
    name: "Tolkien",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tolkien_1916.jpg"
  }
];

const voteData = [
  { id: "1", label: "Oui", color: "#00FF00" },
  { id: "2", label: "Neutre", color: "#999999" },
  { id: "3", label: "Non", color: "#FF0000" }
];

const useFetch = url => {
  const [data, updateData] = useState("oo");

  useEffect(() => {
    async function fetchData() {
      /*const resp = await axios.get(
        "https://improparis.com/gestion/postulant/AjaxLevelAppreciation.php"
      );
     
      updateData(resp.data);*/
    }
    fetchData();
  }, []);

  return data;
};

const App = () => {
  const [backgroundVote, setBackgroundVote] = useState("");
  const [postulantIndex, setPostulantIndex] = useState(0);
  console.log("oui");
  //var dataAjax = useFetch("after");
  //console.log(dataAjax);
  // console.log(voteData);

 let state = {
    postulant: postulantData[postulantIndex],
    voteTypes: voteData
  };

  const onVoteClick = (vote, background) => {
    state.postulant.Vote = vote;
    setBackgroundVote(background);
  };

  const onChangePostulant = async index => {
    var newIndex = getNewPostulantIndex(index);
    setPostulantIndex(newIndex);
    if (postulantData[newIndex].Vote !== undefined) {
      setBackgroundVote(postulantData[newIndex].Vote.color);
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
