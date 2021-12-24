import React from 'react';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';

const ResBadge = ({ badgeId }) => {
  const reserveList = useSelector((state) => state.reserveReducer);

  let res;
  reserveList.forEach((v) => {
    if (v.reserve === false && badgeId === v.id) {
      res = v.reserve;
    }
  });

  return <div>{res === false ? <Badge>Reserved</Badge> : <Badge></Badge>}</div>;
};

ResBadge.propTypes = {
  badgeId: PropTypes.number,
};

export default ResBadge;
