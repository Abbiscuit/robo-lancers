import React from 'react';
import RoboCard from './RoboCard';

const RoboCardList = ({ robots }) =>
  !robots.length ? (
    <div className="center">
      <h2>Not found...</h2>
    </div>
  ) : (
    <div className="container">
      <div className="row">
        {robots.map(robot => {
          return <RoboCard robot={robot} key={robot.id} />;
        })}
      </div>
    </div>
  );

export default RoboCardList;
