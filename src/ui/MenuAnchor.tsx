import { Flex, Text } from '@chakra-ui/react';

const MenuAnchor = () => {
  return (
    <Flex gap={['36px', '46px', '56px', '66px', '76px']} direction='row'>
      <Text
        fontSize={['14px', '20px', '25px', '30px', '35px']}
        _hover={{
          bgGradient: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)',
          bgClip: 'text',
          cursor: 'pointer',
        }}
      >
        Главная
      </Text>
      <Text
        fontSize={['14px', '20px', '25px', '30px', '35px']}
        _hover={{
          bgGradient: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)',
          bgClip: 'text',
          cursor: 'pointer',
        }}
      >
        О спектакле
      </Text>
      <Text
        fontSize={['14px', '20px', '25px', '30px', '35px']}
        _hover={{
          bgGradient: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)',
          bgClip: 'text',
          cursor: 'pointer',
        }}
      >
        Билеты
      </Text>
      <Text
        fontSize={['14px', '20px', '25px', '30px', '35px']}
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
