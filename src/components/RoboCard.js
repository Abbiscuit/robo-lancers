import React from 'react';
import Robo from './Robo';

const cardStyle = {
  fontSize: '1rem',
  fontWeight: 'bold'
};

const RoboCard = ({ robot }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img
            src={`https://robohash.org/${robot.id}?size=200x200`}
            alt={robot.name}
          />
        </div>
        <div className="card-content">
          <h2 style={cardStyle}>{robot.name}</h2>
          <p>{robot.company.catchPhrase}</p>
        </div>
        <div className="card-action ">
          <span className="btn waves-effect waves-light red">More...</span>
          <Link to={`/robo/${robo.id}`}>jump</Link>
        </div>
      </div>
    </div>
  );
};

export default RoboCard;
