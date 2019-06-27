import React from 'react';
import RoboCard from './RoboCard';

const RoboCardList = ({ robots }) => {
  return (
    <div className="container">
      <div className="row">
        {robots.map(robot => {
          return <RoboCard robot={robot} key={robot.id} />;
        })}
      </div>
    </div>
  );
};

export default RoboCardList;
