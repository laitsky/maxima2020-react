import React from 'react';
import styled from 'styled-components';
import { MxmLogoContainer } from '../../../../components/reusable/container';

const StateDayHeader = styled.div`
  color: white;
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1f2c4c;
  border-bottom-left-radius: 12% 30%;
  border-bottom-right-radius: 12% 30%;
`;

const Header = ({ logo }) => (
  <StateDayHeader>
    <MxmLogoContainer src={logo} alt="Logo MAXIMA 2020" />
    <h2 style={{ fontFamily: 'canaro-bold', letterSpacing: 2 }}>
      STATE DAY ?
    </h2>
    <h4 style={{ marginTop: '-0.5em', letterSpacing: 1.5 }}>
      Pilih kegiatanmu!
    </h4>
  </StateDayHeader>
);

export default Header;
