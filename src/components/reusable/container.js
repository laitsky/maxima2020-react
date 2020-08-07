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

export const StateTokenContainer = styled.div`
  color: white;
  border-radius: 10px;
  background-color: #41ceba;
  padding: 0.35em 1.5em 0.35em 1.5em;
  border: solid #41ceba;
  transition-duration: 0.3s;
  box-shadow: 0 0.5vh #b5b5b5;
  margin-top: ${(props) => props.mt || '0'};
  margin-bottom: ${(props) => props.mb || '0'};
`;
