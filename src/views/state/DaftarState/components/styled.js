import styled from 'styled-components';

export const StateTokenContainer = styled.div`
  color: white;
  border-radius: 10px;
  background-color: #41ceba;
  padding: 1vh 2vw 1vh 2vw;
  border: solid #41ceba;
  transition-duration: 0.3s;
  box-shadow: 0 0.5vh #b5b5b5;
  margin-top: ${(props) => props.mt || '0'};
`;

export const RadioContainer = styled.div`
  margin: 2vh 0;
  display: flex;
  flex-direction: row;
`;

export const RadioLabelSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5em;
  margin: 0 0 0 2vw;
  outline: none;
  color: ${(props) => (props.slot === 0 ? '#ffffff' : '#f4224b')};
  border-radius: 10px;
  background-color: ${(props) =>
    props.slot === 0 ? '#1f2c4c' : '#ffd008'};
  padding: 1vh 0.5vw 1vh 0.5vw;
  border: solid
    ${(props) => (props.slot === 0 ? '#1f2c4c' : '#ffd008')};
  transition-duration: 0.3s;
  box-shadow: 0 0.5vh #b5b5b5;
`;
