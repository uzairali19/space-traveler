import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'
import {
  addMission,
  leaveMission,
} from '../../redux/missions/storeMissions';

const JoinMission = ({joinId, missionName}) => {
  const [input, setInput] = useState({
    reserve: false,
    status: 'Join Mission'
  })
  const getJoins = useSelector((state) => state.add_remove_reducer)
  const dispatch = useDispatch()


  let res;
  let id;
  getJoins.forEach((v) => {
    if(v.reserve === true && v.id === joinId){
      res = v.reserve
      id = v.id
    } 
  })


  const joinedMission = (e) => {
    e.preventDefault()
    if (input.reserve === false && joinId === e.target.id) {
    setInput({
      reserve: true,
      status: 'Leave Mission'
    })
    const newMission = {
      id: joinId,
      reserve: true,
      status: 'Leave Mission',
      mission_name: missionName
    }
    dispatch(addMission(newMission))
    }
  }
  
  const removeMission = (e) => {
    e.preventDefault()
    const checkId = joinId.toString();
    if (res === true && checkId === e.target.id) {
      setInput({
        reserve: false,
        status: 'Join Mission'
      })
      dispatch(leaveMission(joinId))
    }
  }




  return(
    <div>
    { res === true ? <Button id={joinId} onClick={removeMission} variant='danger'>
                  Leave Mission
              </Button>  : <Button id={joinId} onClick={joinedMission} variant='success'>
                  Join Mission
              </Button>  }
    </div>
    
  )

}

JoinMission.propTypes = {
  joinId: PropTypes.string,
  missionName: PropTypes.string
}

export default JoinMission;