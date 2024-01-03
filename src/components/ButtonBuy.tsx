import { Flex, Center } from '@chakra-ui/react';

export const ButtonBuy = () => {
  return (
    <Flex
      background='white'
      mb={['35px', '35px', '35px', '35px', '35px']}
      fontSize={['14px', '19px', '24px', '26px', '34px']}
      w={['200px', '210px', '265px', '275px', '385px']}
      h={['45px', '50px', '65px', '60px', '90px']}
      _hover={{
        borderWidth: '2px',
        borderStyle: 'solid',
        borderImage: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%) 1',
        background: '#090A0B',
        cursor: 'pointer',
      }}
    >
      <Center
        color='black'
        w='100%'
        h='100%'
        fontWeight={700}
        _hover={{
          backgroundClip: 'text',
          bgGradient: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)',
        }}
      >
        КУПИТЬ БИЛЕТ
      </Center>
    </Flex>
  );
};
