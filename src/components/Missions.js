import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {
  beMemeber,
  getMissionFromDatabae,
  removeMemebership,
} from '../redux/missions/missions';

function changeMission(mission, bool, id) {
  if (mission.mission_id === id) {
    mission.isMember = bool;
  } else {
    return mission;
  }
  return null;
}

const Missions = () => {
  const dispatch = useDispatch();
  const allMissions = useSelector((state) => state.missionReducer);

  const joinMembership = (id) => {
    allMissions.filter((mission) => changeMission(mission, true, id));
    dispatch(beMemeber(allMissions));
  };

  const leaveMembership = (id) => {
    allMissions.filter((mission) => changeMission(mission, false, id));
    dispatch(removeMemebership(allMissions));
  };

  const missionHandler = (mission) => {
    if (mission.isMember) {
      leaveMembership(mission.mission_id);
    } else {
      joinMembership(mission.mission_id);
    }
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
                  {mission.isMember ? 'Active member' : 'Not a member'}
                </Button>
                {' '}
              </td>
              <td className="btn">
                <Button
                  variant="success"
                  onClick={() => missionHandler(mission)}
                >
                  {mission.isMember ? 'Leave mission' : 'Join mission'}
                </Button>
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
