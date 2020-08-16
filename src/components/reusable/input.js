import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MxmInput = styled.input`
  width: 60%;
  font-family: 'canaro-bold';
  font-size: 1em;
  border-radius: 50px;
  padding: 1.2vh 1em 1.2vh 1em;
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

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const MxmTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  font-family: 'canaro-bold';
  font-size: 1em;
  border-radius: 15px;
  padding: 1.2vh 1em 1.2vh 1em;
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

  @media (max-width: 768px) {
    width: 90%;
    height: 150px;
  }
`;

export const MxmPrependInput = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  margin: 2vh 0;
  outline: none;
  color: #f4224b;
  box-sizing: border-box;
  transition-duration: 0.4s;

  @media (max-width: 768px) {
    width: 85%;

    span {
      font-size: small;
    }
  }

  input {
    font-size: 1em;
    width: 100%;
    padding: 1.2vh 1em 1.2vh 1em;
    outline: none;
    border: solid 2px;
    color: #f4224b;
    box-sizing: border-box;
    transition-duration: 0.4s;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    margin: 0;
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
    padding: 1.2vh 1em 1.2vh 1em;
    margin: 0;
  }
`;

export const MxmAppendInput = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  margin: 2vh 0;
  outline: none;
  color: #f4224b;
  box-sizing: border-box;
  transition-duration: 0.4s;

  @media (max-width: 768px) {
    width: 85%;

    span {
      font-size: x-small;
    }
  }

  input {
    font-size: 1em;
    width: 100%;
    padding: 1.2vh 1em 1.2vh 1em;
    outline: none;
    border: solid 2px;
    color: #f4224b;
    box-sizing: border-box;
    transition-duration: 0.4s;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    margin: 0;
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
    padding: 1.2vh 1em 1.2vh 1em;
    margin: 0;
  }
`;
