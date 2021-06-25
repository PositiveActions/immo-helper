import { createGlobalStyle } from 'styled-components';
import QuicksandItalic from './quicksanditalic.woff';
import QuicksandItalic2 from './quicksanditalic.woff2';
import QuicksandLight from './quicksandlight.woff';
import QuicksandLight2 from './quicksandlight.woff2';
import QuicksandRegular from './quicksandregular.woff';
import QuicksandRegular2 from './quicksandregular.woff2';
import QuicksandBold from './quicksandbold.woff';
import QuicksandBold2 from './quicksandbold.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'quicksand-italic';
    src: url(${QuicksandItalic}) format('woff'),
    url(${QuicksandItalic2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  };
  @font-face {
    font-family: 'quicksand-light';
    src: url(${QuicksandLight}) format('woff'),
    url(${QuicksandLight2}) format('woff2');
    font-weight: 200;
    font-style: normal;
  };
  @font-face {
    font-family: 'quicksand-regular';
    src: url(${QuicksandRegular}) format('woff'),
    url(${QuicksandRegular2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  };
  @font-face {
    font-family: 'quicksand-bold';
    src: url(${QuicksandBold}) format('woff'),
    url(${QuicksandBold2}) format('woff2');
    font-weight: bold;
    font-style: normal;
  };
`;
