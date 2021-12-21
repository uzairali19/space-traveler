import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getMissionFromDatabae } from '../redux/missions/missions';

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
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <Button variant="secondary">Not a member</Button>
                {' '}
              </td>
              <td>
                <Button variant="success">Join Mission</Button>
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
