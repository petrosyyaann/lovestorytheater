import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Calypso';
        font-style: normal;
        font-weight: 400;
        src: url('../../../public/fonts/Calypso.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Cormorant';
        font-style: normal;
        font-weight: 600;
        src: url('../../../public/fonts/Cormorant.woff2') format('woff2');
      }
      `}
  />
);

export default Fonts;
