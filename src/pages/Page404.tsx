import { Center, Text, Stack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <Center h='100svh'>
      <Stack textAlign='center'>
        <Text fontFamily='Calypso'>404</Text>
        <Text>Страница не найдена</Text>
        <Button as={Link} to='/' colorScheme='gray'>
          Перезагрузить
        </Button>
      </Stack>
    </Center>
  );
};
