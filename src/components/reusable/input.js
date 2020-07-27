import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MxmInput = styled.input`
  font-family: 'canaro-bold';
  font-size: 1em;
  border-radius: 50px;
  padding: 1.2vh 1.2vw 1.2vh 1.2vw;
  margin: 2vh 0;
  outline: none;
  border-color: #f4224b;
  border: solid 2px;
  color: #f4224b;
  box-sizing: border-box;
  transition-duration: 0.4s;

  &::placeholder {
    font-family: 'canaro-light';
    letter-spacing: 1.5px;
    font-size: 0.85em;
    color: #f4224b;
  }

  &:focus {
    box-shadow: 0 0 5px rgb(244, 34, 75);
  }
`;

export const MxmPrependInput = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2vh 0;
  outline: none;
  color: #f4224b;
  box-sizing: border-box;
  transition-duration: 0.4s;

  input {
    padding: 1.2vh 1.2vw 1.2vh 1.2vw;
    outline: none;
    border: solid 2px;
    color: #f4224b;
    box-sizing: border-box;
    transition-duration: 0.4s;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  input::placeholder {
    font-family: 'canaro-light';
    letter-spacing: 1.5px;
    font-size: 0.85em;
    color: #f4224b;
  }

  input:focus {
    box-shadow: 0 0 5px rgb(244, 34, 75);
  }

  span {
    color: white;
    background-color: #f4224b;
    border-left: solid #f4224b;
    border-top: solid #f4224b;
    border-bottom: solid #f4224b;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    text-align: center;
    width: fit-content;
    padding: 1.2vh 1.2vw 1.2vh 1.2vw;
  }
`;

export const MxmAppendInput = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2vh 0;
  outline: none;
  color: #f4224b;
  box-sizing: border-box;
  transition-duration: 0.4s;

  input {
    padding: 1.2vh 1.2vw 1.2vh 1.2vw;
    outline: none;
    border: solid 2px;
    color: #f4224b;
    box-sizing: border-box;
    transition-duration: 0.4s;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }

  input::placeholder {
    font-family: 'canaro-light';
    letter-spacing: 1.5px;
    font-size: 0.85em;
    color: #f4224b;
  }

  input:focus {
    box-shadow: 0 0 5px rgb(244, 34, 75);
  }

  span {
    color: white;
    background-color: #f4224b;
    border-right: solid #f4224b;
    border-top: solid #f4224b;
    border-bottom: solid #f4224b;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    text-align: center;
    width: fit-content;
    padding: 1.2vh 1.2vw 1.2vh 1.2vw;
  }
`;
