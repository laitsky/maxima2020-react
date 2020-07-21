import { createGlobalStyle } from 'styled-components';

import cLightEot from './assets/fonts/canaro_light/CanaroW00-Light.eot';
import cLightWoff from './assets/fonts/canaro_light/CanaroW00-Light.woff';
import cLightTtf from './assets/fonts/canaro_light/CanaroW00-Light.ttf';
import cLightSvg from './assets/fonts/canaro_light/CanaroW00-Light.svg';

import cMediumEot from './assets/fonts/canaro_medium/CanaroW00-Medium.eot';
import cMediumWoff from './assets/fonts/canaro_medium/CanaroW00-Medium.woff';
import cMediumTtf from './assets/fonts/canaro_medium/CanaroW00-Medium.ttf';
import cMediumSvg from './assets/fonts/canaro_medium/CanaroW00-Medium.svg';

import cBoldEot from './assets/fonts/canaro_bold/CanaroW00-Bold.eot';
import cBoldWoff from './assets/fonts/canaro_bold/CanaroW00-Bold.woff';
import cBoldTtf from './assets/fonts/canaro_bold/CanaroW00-Bold.ttf';
import cBoldSvg from './assets/fonts/canaro_bold/CanaroW00-Bold.svg';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "canaro-light";
  src: url(${cLightEot});
  src: url(${cLightWoff}) format("woff"),
  url(${cLightTtf}) format("truetype"),
  url(${cLightSvg}) format("svg");
}

@font-face {
    font-family: "canaro-medium";
    src: url(${cMediumEot});
    src: url(${cMediumWoff}) format("woff"),
    url(${cMediumTtf}) format("truetype"),
    url(${cMediumSvg}) format("svg");
}

@font-face {
  font-family: "canaro-bold";
  src: url(${cBoldEot});
  src: url(${cBoldWoff}) format("woff"),
  url(${cBoldTtf}) format("truetype"),
  url(${cBoldSvg}) format("svg");
}

html, body {
        margin: 0;
        padding: 0;
        font-family: "canaro-medium";
        letter-spacing: 0.5px;
}
*, *::after, *::before {
        box-sizing: border-box;
}

/* 4 PALET UTAMA MAXIMA */

.mxm-pink {
  color: #F4224B;
}
.mxm-yellow {
  color: #FFD008;
}
.mxm-navy {
  color: #1F2C4C;
}
.mxm-cyan {
  color: #41CEBA;
}

`;
