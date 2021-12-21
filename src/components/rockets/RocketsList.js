import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/reducers/RocketReducer';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rocketsList = useSelector((state) => state.rocketReducer);

  return (
    <div className="container">
      <Rocket rockets={rocketsList} />
    </div>
  );
};

export default Rockets;
