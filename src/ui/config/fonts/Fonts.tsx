import { Global } from '@emotion/react';
import Cormorant from '../../../../public/fonts/Cormorant.woff2';
import Calypso from '../../../../public/fonts/Calypso.woff2';

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
        font-weight: 600;
        src: url(${Cormorant}) format('woff2');
      }
      `}
  />
);

export default Fonts;
