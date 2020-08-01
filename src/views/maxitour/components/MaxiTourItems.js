import React from 'react';
import PropTypes from 'prop-types';
import MaxiTourTabPanel from './MaxiTourTabPanel';
import MaxiTourPannellum from './MaxiTourPannellum';
import maxitourService from '../../../services/maxitour';

const MaxiTourItems = ({ value }) => (
  <>
    <MaxiTourTabPanel value={value} index={0}>
      <MaxiTourPannellum
        imageSource={maxitourService.gate}
        title="HoME GATE"
      />
    </MaxiTourTabPanel>
    <MaxiTourTabPanel value={value} index={1}>
      <MaxiTourPannellum
        imageSource={maxitourService.maximap}
        title="HoME MAXIMAP"
      />
    </MaxiTourTabPanel>
    <MaxiTourTabPanel value={value} index={2}>
      <MaxiTourPannellum
        imageSource={maxitourService.mainStage1}
        title="Main Stage 1"
      />
    </MaxiTourTabPanel>
    <MaxiTourTabPanel value={value} index={3}>
      <MaxiTourPannellum
        imageSource={maxitourService.mainStage2}
        title="Main Stage 2"
      />
    </MaxiTourTabPanel>
    <MaxiTourTabPanel value={value} index={4}>
      <MaxiTourPannellum
        imageSource={maxitourService.malpunGate}
        title="Gerbang Malam Puncak"
      />
    </MaxiTourTabPanel>
    <MaxiTourTabPanel value={value} index={5}>
      <MaxiTourPannellum
        imageSource={maxitourService.photobooth}
        title="Photobooth Malam Puncak"
      />
    </MaxiTourTabPanel>
    <MaxiTourTabPanel value={value} index={6}>
      <MaxiTourPannellum
        imageSource={maxitourService.row12}
        title="ROW 12"
      />
    </MaxiTourTabPanel>
  </>
);

MaxiTourItems.propTypes = {
  value: PropTypes.number.isRequired,
};

export default MaxiTourItems;
