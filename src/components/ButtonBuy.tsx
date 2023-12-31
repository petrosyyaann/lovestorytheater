import { Flex, Center } from '@chakra-ui/react';

export const ButtonBuy = () => {
  return (
    <Flex
      background='white'
      mb={['15px', '20px', '25px', '30px', '35px']}
      fontSize={['14px', '19px', '24px', '29px', '34px']}
      w={['150px', '210px', '265px', '325px', '385px']}
      h={['35px', '50px', '65px', '80px', '90px']}
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
