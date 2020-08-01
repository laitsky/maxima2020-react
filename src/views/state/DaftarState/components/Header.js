import React from 'react';
import styled from 'styled-components';
import { MxmLogoContainer } from '../../../../components/reusable/container';

const StateDayHeader = styled.div`
  color: white;
  width: 100%;
  height: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #1f2c4c;
  border-bottom-left-radius: 12% 30%;
  border-bottom-right-radius: 12% 30%;

  @media (max-width: 768px) {
    height: 15em;
    padding-top: 1.5em;
    border-bottom-left-radius: 20% 30%;
    border-bottom-right-radius: 20% 30%;
  }
`;

const Header = ({ logo, day }) => (
  <StateDayHeader>
    <MxmLogoContainer src={logo} alt="Logo MAXIMA 2020" />
    <h2 style={{ fontFamily: 'canaro-bold', letterSpacing: 2 }}>
      STATE DAY {day}
    </h2>
    <h4 style={{ marginTop: '-0.5em', letterSpacing: 1.5 }}>
      Pilih kegiatanmu!
    </h4>
  </StateDayHeader>
);

export default Header;
