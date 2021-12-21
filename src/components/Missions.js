import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { beMemeber, getMissionFromDatabae } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const allMissions = useSelector((state) => state.missionReducer);

  const changeMembership = (id) => {
    allMissions.filter((mission) =>
      mission.mission_id === id ? (mission.isMember = true) : mission,
    );
    dispatch(beMemeber(allMissions));
  };

  useEffect(() => {
    dispatch(getMissionFromDatabae());
  }, []);
  return (
    <div className="container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {allMissions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>
                <h6>
                  <strong>{mission.mission_name}</strong>
                </h6>
              </td>
              <td>{mission.description}</td>
              <td className="m-btn">
                <Button variant="secondary">
                  {mission.isMember ? 'active member' : 'Not a member'}
                </Button>{' '}
              </td>
              <td
                className="btn"
                onClick={() => changeMembership(mission.mission_id)}
              >
                <Button variant="success">
                  {mission.isMember ? 'Leave mission' : 'Join mission'}
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
