/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import a11yProps from '../helpers/a11yProps';

const MaxiTourTabs = ({ value, handleChange }) => (
  <AppBar position="static" color="default">
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      <Tab
        label="HoME Gate"
        {...a11yProps(0)}
        style={{ fontFamily: 'canaro-medium' }}
      />
      <Tab
        label="HoME MAXIMAP"
        {...a11yProps(1)}
        style={{ fontFamily: 'canaro-medium' }}
      />
      <Tab
        label="Main Stage 1"
        {...a11yProps(2)}
        style={{ fontFamily: 'canaro-medium' }}
      />
      <Tab
        label="Main Stage 2"
        {...a11yProps(3)}
        style={{ fontFamily: 'canaro-medium' }}
      />
      <Tab
        label="Gerbang Malam Puncak"
        {...a11yProps(4)}
        style={{ fontFamily: 'canaro-medium' }}
      />
      <Tab
        label="Photobooth Malam Puncak"
        {...a11yProps(5)}
        style={{ fontFamily: 'canaro-medium' }}
      />
      <Tab
        label="Row 12"
        {...a11yProps(6)}
        style={{ fontFamily: 'canaro-medium' }}
      />
    </Tabs>
  </AppBar>
);

MaxiTourTabs.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MaxiTourTabs;
