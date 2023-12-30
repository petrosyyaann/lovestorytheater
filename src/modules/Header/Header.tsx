import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import MenuAnchor from 'modules/MenuAnchor/MenuAnchor';
import { MenuDrawer } from 'modules/MenuDrawer/MenuDrawer';

const Header = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  return (
    <Flex
      w='100%'
      alignItems='center'
      justifyContent='space-between'
      pt={['15px', '18px', '21px', '25px', '30px']}
      px={['14px', '18px', '30px', '35px', '40px']}
      pb={['20px', '30px', '40px', '60px', '70px']}
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
