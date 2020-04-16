import React from 'react';

class ChangePostulantButton extends React.Component {
  render() {
    const { onClick, indexChange, postulant } = this.props;
    return (<div className="btnNaviguation" onClick={() => onClick(indexChange)}>
      {indexChange === -1 ? "Précedent" : "Suivant"}: {postulant.name} 
      {postulant.vote !== null && postulant.vote !== undefined ? " "+postulant.vote.label : ""}    
    </div>);
  }
}

export default ChangePostulantButton;