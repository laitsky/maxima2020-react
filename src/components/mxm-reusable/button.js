import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MxmButton = styled.button`
    font-family: "canaro-bold";
    font-weight: 900;
    font-size: 1em;
    color: #F4224B;
    text-transform: uppercase;
    outline:none;
    border-radius : 50px;
    padding : 1vh 2vw 1vh 2vw;
    background-color: #FFD008;
    border: none;
    transition-duration: 0.2s;
    box-shadow: 0 1vh #F4224B;

    &:hover {
        cursor: pointer;
        background-color: #E3BD1B;
        transform: translateY(0.5vh);
        box-shadow: 0 0.5vh #F4224B;
      }
    &:active {
        transform: translateY(1vh);
        box-shadow: 0 0 #F4224B;
    }
`;
