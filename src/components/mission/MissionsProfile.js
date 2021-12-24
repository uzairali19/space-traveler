import React from 'react';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const allMissions = useSelector(
    (state) => state.addRemover,
  );

  return (
    <div className="col-4">
      <h3>My Missions</h3>
      <ul className="rockets">
        {allMissions.map((missions) => (
          <li
            className="rocket-list"
            key={missions.mission_id}
          >
            <p className="rocket-item">
              {missions.mission_name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionsProfile;
