import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

const Profile = () => {
  const allMissions = useSelector((state) => state.missionReducer);
  const joinedMissions = allMissions.filter(
    (missions) => missions.reserved === true,
  );
  const noMissions = joinedMissions <= 0;

  return (
    <div className="container">
      <h2>My Missions</h2>
      <section>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Missions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {noMissions && (
              <tr>
                <td className="text-center">No Missions joined</td>
                <td className="text-center">No Missions joined</td>
              </tr>
            )}
            {joinedMissions.map((missions) => (
              <tr key={missions.mission_id}>
                <td>{missions.mission_id}</td>
                <td>{missions.mission_name}</td>
                <td className="success">Joined</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Profile;
