import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MxmButton = styled.button`
  font-family: 'canaro-bold';
  font-weight: 900;
  font-size: 1em;
  color: #f4224b;
  text-transform: uppercase;
  outline: none;
  border-radius: 50px;
  padding: 0.5em 2.5em 0.5em 2.5em;
  background-color: #ffd008;
  border: none;
  transition-duration: 0.2s;
  box-shadow: 0 1vh #f4224b;
  margin-top: ${(props) => props.mt || '0'};
  margin-bottom: ${(props) => props.mb || '0'};
  &:hover {
    cursor: pointer;
    background-color: #e3bd1b;
    transform: translateY(0.5vh);
    box-shadow: 0 0.5vh #f4224b;
  }

  &:active {
    transform: translateY(1vh);
    box-shadow: 0 0 #f4224b;
  }
`;

export const MxmCancelButton = styled.button`
  outline:none;
  font-family: 'canaro-medium';
  color: #F4224B;
  border-radius : 50px;
  background-color: white;
  padding : 1vh 2vw 1vh 2vw;
  border: solid #F4224B;
  transition-duration: 0.2s;

  &:hover{
    background-color: #F4224B;
    color: #FFD008;
  }

  &:active{
    background-color: #c41d3e;
    border-color: #c41d3e;
  }
`;