import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const reserve = useSelector(
    (state) => state.reserveReducer,
  );

  return (
    <div className="col-4">
      <h3>My Rockets</h3>
      <ul className="rockets">
        {reserve
          ? reserve.map((v) => {
              const resId = v.id;
              return (
                <li
                  key={resId}
                  className="rocket-list"
                >
                  <p className="rocket-item">
                    {v.name}
                  </p>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default RocketProfile;
