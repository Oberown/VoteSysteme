import React from 'react';

class ChangePostulantButton extends React.Component {
  render() {
    const { onClick, indexChange, postulant } = this.props;
    return (<div onClick={() => onClick(indexChange)} style={{
      color: postulant.Vote !== undefined ? postulant.Vote.color : "#000000"
    }}>
      {indexChange === -1 ? "Précedent" : "Suivant"}[{postulant.name}]
    </div>);
  }
}

export default ChangePostulantButton;