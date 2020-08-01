import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MxmLogoContainer = styled.img`
  height: 100%;
  max-height: 200px;
  width: auto;
  @media (max-width: 768px) {
    max-height: 100px;
    margin: 0;
  }
`;

export const AlignMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 1.3em;
    padding-right: 1.3em;
  }
`;
