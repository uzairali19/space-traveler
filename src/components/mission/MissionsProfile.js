import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const allMissions = useSelector((state) => state.add_remove_reducer);

  return (
    <div className="container">
      <h3>My Missions</h3>
      {allMissions.map((missions) => (
        <div key={missions.mission_id}>
          <p>{missions.mission_name}</p> 
        </div>
      ))}
    </div>
  );
};

export default Profile;
