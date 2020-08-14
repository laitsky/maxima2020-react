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
  padding: 0.5em 2em 0.5em 2em;
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

export const MxmHomeCardDeck = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #1f2c4c;
  padding: 5em 25em 5em 25em;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    padding: 2em;
  }
`;

export const MxmHomeDeckItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 1em 1em 1em;

  @media (max-width: 768px) {
    padding: 0.5em 0.5em 0.5em 0.5em;
  }
`;

export const MxmHomeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${(props) => props.color || '#41CEBA'};
  border: 1px solid ${(props) => props.border || '#41CEBA'};
  border-radius: 20px;
  width: fit-content;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  padding: 35px 30px 35px 30px;
  transition-duration: 0.2s;

  & div {
    text-align: left;
  }

  & h3 {
    font-family: canaro-bold;
    margin: 20px 0 13px 0;
  }

  & a {
    font-size: 13px;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(1.15);
    box-shadow: 0 10px 10px #262626;
    animation: jello-vertical 0.7s both;
  }

  @keyframes jello-vertical {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }

  @media (max-width: 766px) {
    width: 150px;
    height: 150px;
    padding: 20px 15px 15px 15px;

    & span {
      font-size: xx-small;
    }

    & h3 {
      margin: 10px 0 5px 0;
      font-size: small;
    }
  }
`;

export const MxmStateLogoFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #41ceba;
  width: 100%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0 1px 5px #ababab;
  margin: 2em 0 2em 0;
  height: 13em;
`;
