import React from 'react';

class ChangePostulantButton extends React.Component {
  render() {
    const { onClick, indexChange, postulant } = this.props;
    return (<div onClick={() => onClick(indexChange)} style={{
      color: postulant.vote !== null && postulant.vote !== undefined ? postulant.vote.color : "#000000"
    }}>
      {indexChange === -1 ? "Précedent" : "Suivant"}[{postulant.name}]
    </div>);
  }
}

export default ChangePostulantButton;