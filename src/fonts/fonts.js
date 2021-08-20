import { createGlobalStyle } from 'styled-components';
import CatamaranLight from './Catamaran-Light.ttf'
import CatamaranRegular from './Catamaran-Regular.ttf'
import CatamaranSemiBold from './Catamaran-SemiBold.ttf'
import CatamaranBold from './Catamaran-Bold.ttf'

export default createGlobalStyle`
  
  @font-face {
    font-family: 'catamaran-light';
    src: url(${CatamaranLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  };
  @font-face {
    font-family: 'catamaran-regular';
    src: url(${CatamaranRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  };
  @font-face {
    font-family: 'catamaran-semiBold';
    src: url(${CatamaranSemiBold}) format('woff');
    font-weight: 600;
    font-style: normal;
  };
  @font-face {
    font-family: 'catamaran-bold';
    src: url(${CatamaranBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  };
`;
