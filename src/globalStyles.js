import { createGlobalStyle } from 'styled-components';

import cBoldEot from './assets/fonts/canaro_bold/CanaroW00-Bold.eot';
import cBoldWoff from './assets/fonts/canaro_bold/CanaroW00-Bold.woff';
import cBoldTtf from './assets/fonts/canaro_bold/CanaroW00-Bold.ttf';
import cBoldSvg from './assets/fonts/canaro_bold/CanaroW00-Bold.svg';

import cMediumEot from './assets/fonts/canaro_medium/CanaroW00-Medium.eot';
import cMediumWoff from './assets/fonts/canaro_medium/CanaroW00-Medium.woff';
import cMediumTtf from './assets/fonts/canaro_medium/CanaroW00-Medium.ttf';
import cMediumSvg from './assets/fonts/canaro_medium/CanaroW00-Medium.svg';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "canaro-bold";
    src: url(${cBoldEot});
    src: url(${cBoldWoff}) format("woff"),
    url(${cBoldTtf}) format("truetype"),
    url(${cBoldSvg}) format("svg");
  }

@font-face {
    font-family: "canaro-medium";
    src: url(${cMediumEot});
    src: url(${cMediumWoff}) format("woff"),
    url(${cMediumTtf}) format("truetype"),
    url(${cMediumSvg}) format("svg");
}

html, body {
        margin: 0;
        padding: 0;
        font-family: "canaro-medium"
}
*, *::after, *::before {
        box-sizing: border-box;
}

`;
