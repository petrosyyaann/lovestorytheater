import { Flex, Center } from '@chakra-ui/react';

export const ButtonBuy = ({ mb }: { mb?: string | Array<string> }) => {
  return (
    <Flex
      mb={mb}
      background='white'
      fontSize={['18px', '20px', '24px', '26px', '34px']}
      w={['190px', '200px', '255px', '265px', '300px']}
      h={['45px', '50px', '55px', '65px', '70px']}
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
