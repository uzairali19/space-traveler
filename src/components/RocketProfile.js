import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const reserve = useSelector((state) => state.reserveReducer);

  return (
    <div>
      {reserve
        ? reserve.map((v) => {
            const resId = v.id;
            return (
              <div key={resId}>
                <h1>{v.name}</h1>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default RocketProfile;
