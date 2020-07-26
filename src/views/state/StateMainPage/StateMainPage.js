import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import logo from '../../../assets/mxm20_logo.png';
import { MxmLongCard } from '../../../components/reusable/card';
import { MxmLogoContainer, AlignMiddle } from '../../../components/reusable/container';

const StateMainPage = () => (
  <Container maxWidth="xs">
    <AlignMiddle>
      <MxmLogoContainer src={logo} alt="MAXIMA 2020 Logo" />
      <h1 className="mxm-navy" style={{ textAlign: 'center', fontFamily: 'canaro-bold' }}>SELAMAT DATANG!</h1>
    </AlignMiddle>
    <Link to="/tour" exact style={{ textDecoration: 'none' }}>
      <MxmLongCard>DAY 01</MxmLongCard>
    </Link>
    <Link to="/tour" exact style={{ textDecoration: 'none' }}>
      <MxmLongCard>DAY 02</MxmLongCard>
    </Link>
    <Link to="/tour" exact style={{ textDecoration: 'none' }}>
      <MxmLongCard>DAY 03</MxmLongCard>
    </Link>
  </Container>
);

export default StateMainPage;
