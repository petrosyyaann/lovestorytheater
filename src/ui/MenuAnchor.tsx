import { Flex, Text } from '@chakra-ui/react';

const MenuAnchor = () => {
  return (
    <Flex gap='76px' direction='row'>
      <Text
        color='#FFF'
        fontSize='30px'
        _hover={{
          bgGradient: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)',
          bgClip: 'text',
          cursor: 'pointer',
        }}
      >
        Главная
      </Text>
      <Text
        color='#FFF'
        fontSize='30px'
        _hover={{
          bgGradient: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)',
          bgClip: 'text',
          cursor: 'pointer',
        }}
      >
        О спектакле
      </Text>
      <Text
        color='#FFF'
        fontSize='30px'
        _hover={{
          bgGradient: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)',
          bgClip: 'text',
          cursor: 'pointer',
        }}
      >
        Билеты
      </Text>
      <Text
        color='#FFF'
        fontSize='30px'
        _hover={{
          bgGradient: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)',
          bgClip: 'text',
          cursor: 'pointer',
        }}
      >
        Контакты
      </Text>
    </Flex>
  );
};

export default MenuAnchor;
