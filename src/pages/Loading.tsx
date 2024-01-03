import { Center, Spinner } from '@chakra-ui/react';

export const Loading = () => {
  return (
    <Center bg='#090A0B' h='100svh' textAlign='center'>
      <Spinner color='white' />
    </Center>
  );
};
