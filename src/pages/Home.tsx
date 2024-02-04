import { Flex } from '@chakra-ui/react';
import { BusinessСard } from 'modules/BusinessСard/BusinessСard';
import { Description } from 'modules/Description/Description';
import { Resume } from 'modules/Resume/Resume';
import { Tickets } from 'modules/Tickets/Tickets';

const Home = () => (
  <Flex h='100%' w='100%' direction='column'>
    <BusinessСard />
    <Description />
    <Tickets />
    <Resume />
    <Flex h={['1px', '1px', '1px', '2px', '2px']} bg='#444444' w='100%' />
  </Flex>
);

export default Home;
