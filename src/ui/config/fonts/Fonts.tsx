import { Global } from '@emotion/react';
import Cormorant from '/fonts/Cormorant.woff2';
import Calypso from '/fonts/Calypso.woff2';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Calypso';
        font-style: normal;
        font-weight: 400;
        src: url(${Calypso}) format('woff2');
      }
      @font-face {
        font-family: 'Cormorant';
        font-style: normal;
        font-weight: 500;
        src: url(${Cormorant}) format('woff2');
      }
      p, h1, h2, a {
        color: #ffffff;
      }
      html {
        background-color: #090A0B;
        scroll-behavior: smooth;
        overflow-x: hidden;
      }
      `}
  />
);

export default Fonts;
