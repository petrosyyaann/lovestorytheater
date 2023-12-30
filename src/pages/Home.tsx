import { Flex } from '@chakra-ui/react';
import { BusinessСard } from 'modules/BusinessСard/BusinessСard';
import { Description } from 'modules/Description/Description';
import { Tickets } from 'modules/Tickets/Tickets';

const Home = () => (
  <Flex h='100%' w='100%' direction='column'>
    <BusinessСard />
    <Description />
    <Tickets />
  </Flex>
);

export default Home;
