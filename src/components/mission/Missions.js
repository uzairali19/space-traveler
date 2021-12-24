import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import { getMissionFromDatabae } from '../../redux/missions/missions';
import JoinMission from './JoinMission';
import MissionMember from './MissionMember';

const Missions = () => {

  const dispatch = useDispatch();
  const allMissions = useSelector((state) => state.missionReducer);





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
                <MissionMember joinId={mission.mission_id} missionName={mission.mission_name}/>
              </td>
              <td className="btn">
              
              <JoinMission joinId={mission.mission_id} missionName={mission.mission_name}/>

                  
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
