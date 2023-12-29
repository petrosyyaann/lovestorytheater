import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import MenuAnchor from 'ui/MenuAnchor';
import { MenuDrawer } from 'ui/MenuDrawer';

const Header = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  return (
    <Flex
      w='100%'
      alignItems='center'
      justifyContent='space-between'
      py={['15px', '25px', '33px', '40px', '50px']}
      px={['14px', '30px', '60px', '70px', '80px']}
    >
      <Heading
        fontSize={['14px', '18px', '25px', '30px', '40px']}
        color='white'
      >
        “Он и она”
      </Heading>
      {isLargerThan900 ? <MenuAnchor /> : <MenuDrawer />}
    </Flex>
  );
};

export default Header;
