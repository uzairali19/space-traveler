import React from 'react';
import { v4 } from 'uuid';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

const Rocket = ({ rockets }) => {
  const hello = 'hello';
  return (
    <div className="rocket-container">
      {rockets.map((rocket) => {
        const id = v4();
        return (
          <div key={id} className="rocket">
            <div className="rocket-image">
              <Carousel indicators={false} className="carousel">
                {rocket.flickr_images.map((img) => {
                  const imgId = v4();
                  return (
                    <Carousel.Item key={imgId}>
                      <img
                        className="d-block w-100"
                        src={img}
                        alt={rocket.rocket_name}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
            <div className="rocket-info">
              <h1>{rocket.rocket_name}</h1>
              <p>{rocket.description}</p>
              <input type="button" value="Reserve Rocket" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

Rocket.propTypes = {
  rockets: PropTypes.array,
};

export default Rocket;