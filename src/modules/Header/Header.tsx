import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import MenuAnchor from 'ui/MenuAnchor';
import { MenuDrawer } from 'ui/MenuDrawer';

const Header = () => {
  const [isLargerThan1100] = useMediaQuery('(min-width: 1100px)');
  return (
    <Flex
      w='100%'
      alignItems='center'
      justifyContent='space-between'
      py={isLargerThan1100 ? '33px' : '15px'}
      px={isLargerThan1100 ? '60px' : '14px'}
    >
      <Heading fontSize={isLargerThan1100 ? '40px' : '14px'} color='white'>
        “Он и она”
      </Heading>
      {isLargerThan1100 ? <MenuAnchor /> : <MenuDrawer />}
    </Flex>
  );
};

export default Header;
