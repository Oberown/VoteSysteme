import React from 'react';

class Postulant extends React.Component {
  render() {
    const postulantData = this.props.profile;
    return (<div>
      {postulantData.name}
      <img src={postulantData.photo} />
    </div>);
  }
}

export default Postulant;