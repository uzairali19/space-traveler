import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const allMissions = useSelector((state) => state.missionReducer);
  const joinedMissions = allMissions.filter(
    (missions) => missions.isMember === true,
  );
  const noMissions = joinedMissions <= 0;

  return (
    <div className="profile-rocket f-col">
      <h2 className="rocket-profile-header">My Missions</h2>
      <section className="profile-rocket-cont">
        {noMissions && <p>No Missions joined</p>}
        {joinedMissions.map((missions) => (
          <p className="rocket-profile-name" key={missions.mission_id}>
            {missions.mission_name}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Profile;
