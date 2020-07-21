import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MxmInput = styled.input`
    font-family: "canaro-bold";
    font-size: 1em;
    border-radius:50px;
    padding : 1.3vh 1vw 1.3vh 1vw;
    margin: 2vh 0;
    outline:none;
    border-color: #F4224B;
    border: solid 2px;
    color:  #F4224B;
    box-sizing: border-box;

    &::placeholder {
        letter-spacing: 1.5px;
        font-family: "canaro-medium";
        font-style: italic;
        color: #F4224B;
    }

    &:focus {
        border: inset;
        border-color: #F4224B; 
    }
`;
