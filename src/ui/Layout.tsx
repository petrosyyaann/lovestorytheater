import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <Flex w='100%' h='100%' bg='#090A0B' direction='column'>
    {children}
  </Flex>
);
