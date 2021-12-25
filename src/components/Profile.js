import React from 'react';
import MissionsProfile from './mission/MissionsProfile';
import RocketProfile from './rockets/RocketProfile';

const Profile = () => (
  <div className="profile-container container">
    <MissionsProfile />
    <RocketProfile />
  </div>
);

export default Profile;
