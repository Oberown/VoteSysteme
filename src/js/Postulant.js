import React from 'react';

class Postulant extends React.Component {
  render() {
    const postulantData = this.props.profile;
    return (<div>
      <div>{postulantData.name}</div>
      {postulantData.photo !== ''  ?
      (<img src={postulantData.photo} alt="" />)
      : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAoHz7UBgIBZMCV3E0hdgSSfMjSMfkhMuC446PpDqUR3HkPV6qw&s' alt="" />
      }    
    </div>);
  }
}

export default Postulant;