import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import MenuAnchor from 'modules/MenuAnchor/MenuAnchor';
import { MenuDrawer } from 'modules/MenuDrawer/MenuDrawer';

const Header = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  return (
    <Flex
      w='100%'
      alignItems='center'
      justifyContent='flex-end'
      pt={['15px', '18px', '21px', '25px', '30px']}
      px={['14px', '18px', '30px', '35px', '40px']}
      pb={['20px', '30px', '35px', '40px', '50px']}
    >
      {isLargerThan900 ? <MenuAnchor /> : <MenuDrawer />}
    </Flex>
  );
};

export default Header;
