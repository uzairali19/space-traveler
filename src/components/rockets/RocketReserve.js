import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  postReserve,
  deleteReserve,
} from '../../redux/reducers/reserveReducer';

const Reserve = ({ reserveId }) => {
  const [input, setInput] = useState({
    reserve: false,
    status: 'Reserve Rocket',
  });

  const dispatch = useDispatch();

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
      };
      dispatch(postReserve(inputReserve));
    } else if (e.target.id === resId && input.reserve === true) {
      setInput({
        reserve: false,
        status: 'Reserve Rocket',
      });
      const inputReserve = {
        id: reserveId,
        reserve: input.reserve,
        status: input.status,
      };
      dispatch(deleteReserve(inputReserve.id));
    }
  };

  return (
    <>
      <input
        type="button"
        value={input.status}
        id={reserveId}
        onClick={submitReserve}
      />
    </>
  );
};

Reserve.propTypes = {
  reserveId: PropTypes.number,
};

export default Reserve;
