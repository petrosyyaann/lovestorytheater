import { Button, Center, Text, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Center h='100vh'>
    <Stack>
      <Text textAlign='center'>Старница Home</Text>
      <Button as={Link} to='/asdfg' colorScheme='blue'>
        Перейти на страницу 404
      </Button>
    </Stack>
  </Center>
);

export default Home;
