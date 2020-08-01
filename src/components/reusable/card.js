import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MxmLongCard = styled.div`
  font-family: 'canaro-bold';
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1.2vh;
  margin-top: 3vh;
  background-color: #f4224b;
  box-shadow: ${(props) => (props.border ? '0 1vh #ffbd08' : '0')};
  transition-duration: 0.2s;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #f0375b;
    transform: translateY(-0.5vh);
    box-shadow: ${(props) =>
      props.border ? '0 1.3vh #FFD008' : '0'};
  }
`;

export const MxmTallCard = styled.div`
  font-family: 'canaro-bold';
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 2vh 1.5vw 2vh 1.5vw;
  margin-top: 3vh;
  background-color: #f4224b;
  box-shadow: ${(props) => (props.border ? '0 1vh #ffbd08' : '0')};
  transition-duration: 0.2s;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: #f0375b;
    transform: translateY(-0.5vh);
    box-shadow: ${(props) =>
      props.border ? '0 1.3vh #FFD008' : '0'};
  }
`;
