import { Flex, Link } from '@chakra-ui/react';

const MenuAnchor = () => {
  return (
    <Flex gap='76px' direction='row'>
      <Link color='#FFF' fontSize='30px'>
        Главная
      </Link>
      <Link color='#FFF' fontSize='30px'>
        О спектакле
      </Link>
      <Link color='#FFF' fontSize='30px'>
        Билеты
      </Link>
      <Link color='#FFF' fontSize='30px'>
        Контакты
      </Link>
    </Flex>
  );
};

export default MenuAnchor;
