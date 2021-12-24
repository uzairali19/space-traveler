import React from 'react';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const allMissions = useSelector(
    (state) => state.addRemover,
  );

  return (
    <div className="container">
      <h3>My Missions</h3>
      {allMissions.map((missions) => (
        <div key={missions.mission_id}>
          <p key={missions.mission_id}>
            {missions.mission_name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MissionsProfile;
