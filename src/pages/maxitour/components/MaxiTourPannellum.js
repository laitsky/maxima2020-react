import React from 'react';
import PropTypes from 'prop-types';
import { Pannellum } from 'pannellum-react';

const MaxiTourPannellum = ({ imageSource, title }) => (
  <Pannellum
    width="82vw"
    height="77vh"
    image={imageSource}
    pitch={10}
    yaw={100}
    hfov={110}
    autoLoad
    previewTitle={title}
  />
);

MaxiTourPannellum.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MaxiTourPannellum;
