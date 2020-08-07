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

export const MxmHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid #41CEBA;
  border-radius: 20px;
  margin-bottom: 1em;
  padding: 1.5em 3em 1.5em 3em;
  letter-spacing: normal;

  @media (max-width: 768px){
    padding: 1.5em 1em 1.5em 1em;
    margin-left: 1.5em;
    margin-right: 1.5em;
  }
`;