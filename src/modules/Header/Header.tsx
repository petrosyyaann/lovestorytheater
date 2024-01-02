import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
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
      <Text fontSize={['14px', '18px', '20px', '22px', '25px']} color='white' fontFamily='Calypso'>
        “Он и она”
      </Text>
      {isLargerThan900 ? <MenuAnchor /> : <MenuDrawer />}
    </Flex>
  );
};

export default Header;
