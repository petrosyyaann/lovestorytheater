import { Flex, Divider } from '@chakra-ui/react';
import { BusinessСard } from 'modules/BusinessСard/BusinessСard';
import { Description } from 'modules/Description/Description';
import { Tickets } from 'modules/Tickets/Tickets';

const Home = () => (
  <Flex h='100%' w='100%' direction='column'>
    <BusinessСard />
    <Description />
    <Tickets />
    <Divider color='#232323' />
  </Flex>
);

export default Home;
