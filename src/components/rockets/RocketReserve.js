import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  postReserve,
  deleteReserve,
} from '../../redux/reducers/reserveReducer';

const Reserve = ({ reserveId, rocketName }) => {
  const [input, setInput] = useState({
    reserve: false,
    status: 'Reserve Rocket',
  });

  const dispatch = useDispatch();

  const reserves = useSelector((state) => state.reserveReducer);
  let res;
  reserves.forEach((v) => {
    if (v.reserve === false && reserveId === v.id) {
      res = v.reserve;
    }
  });

  const submitReserve = (e) => {
    e.preventDefault();

    const resId = reserveId.toString();
    if (e.target.id === resId && input.reserve === false) {
      setInput({
        reserve: true,
        status: 'Cancel Reservation',
      });
      const inputReserve = {
        id: reserveId,
        reserve: input.reserve,
        status: input.status,
        name: rocketName,
      };
      dispatch(postReserve(inputReserve));
    }
  };

  const delReserve = (e) => {
    e.preventDefault();

    const delId = reserveId.toString();
    if (e.target.id === delId && res === false) {
      setInput({
        reserve: false,
        status: 'Reserve Rocket',
      });
      const inputReserve = {
        id: reserveId,
        reserve: input.reserve,
        status: input.status,
        name: rocketName,
      };
      dispatch(deleteReserve(inputReserve.id));
    }
  };

  return (
    <>
      {res === false ? (
        <input
          type="button"
          value="Cancel Reservation"
          id={reserveId}
          onClick={delReserve}
        />
      ) : (
        <input
          type="button"
          value="Reserve Rocket"
          id={reserveId}
          onClick={submitReserve}
        />
      )}
    </>
  );
};

Reserve.propTypes = {
  reserveId: PropTypes.number,
  rocketName: PropTypes.string,
};

export default Reserve;
