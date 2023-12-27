import { Flex, Heading, Text } from '@chakra-ui/react';
import { MenuIcon } from 'ui/iconpack';

const Header = () => {
  return (
    <Flex w='100%' alignItems='center' justifyContent='space-between' p={15}>
      <Heading fontSize={14} color='white'>
        “Он и она”
      </Heading>
      <MenuIcon />
    </Flex>
  );
};

export default Header;
