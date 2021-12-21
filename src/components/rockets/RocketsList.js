import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { getRockets } from '../../redux/reducers/RocketReducer';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rocketsList = useSelector((state) => state.rocketReducer);

  return (
    <div className="container">
      <h1>
        {rocketsList.map((rocket) => {
          const id = v4();
          return <h1 key={id}>{rocket.id}</h1>;
        })}
      </h1>
    </div>
  );
};

export default Rockets;
