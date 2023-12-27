import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import theme from 'ui/config/theme';
import Fonts from 'ui/fonts/Fonts';

interface ChakraThemeProviderProps {
  children?: ReactNode;
}

export const ChakraThemeProvider = ({ children }: ChakraThemeProviderProps) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    {children}
  </ChakraProvider>
);
