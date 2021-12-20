import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionFromDatabae } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const allMissions = useSelector((state) => state.missionReducer);
  console.log(allMissions);
  useEffect(() => {
    dispatch(getMissionFromDatabae());
  }, []);
  return (
    <div className="container">
      <h1>Missions</h1>
      <p>This is demo mission</p>
    </div>
  );
};

export default Missions;
