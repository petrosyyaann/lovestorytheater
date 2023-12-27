import { ReactNode } from 'react';
import { ChakraThemeProvider } from './ChakraThemeProvider';
import { RouterProvider } from './RouterProvider';

interface CombinedProvidersProps {
  children?: ReactNode;
}

export const CombinedProviders = ({ children }: CombinedProvidersProps) => (
  <ChakraThemeProvider>
    <RouterProvider>{children}</RouterProvider>
  </ChakraThemeProvider>
);
