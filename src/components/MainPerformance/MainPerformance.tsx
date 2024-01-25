import { Flex, Text } from '@chakra-ui/react';
import { ButtonBuy } from 'components/ButtonBuy/ButtonBuy';

export const MainPerformance = () => {
  return (
    <Flex
      direction='column'
      h='100%'
      w='100%'
      alignItems='center'
      justifyContent='flex-end'
    >
      <Flex w='fit-content' direction='column'>
        <Text
          position='relative'
          top={['5px', '8px', '11px', '14px', '20px']}
          zIndex='1'
          fontSize={['28px', '35px', '55px', '70px', '90px']}
        >
          13.02
        </Text>
        <Text
          position='relative'
          fontSize={['40px', '55px', '70px', '85px', '100px']}
          bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
          w='fit-content'
          bgClip='text'
        >
          ОН и ОНА
        </Text>
      </Flex>
      <Flex w='100%' justifyContent='center'>
        <ButtonBuy mb={['35px', '52px', '60px', '77px', '85px']} />
      </Flex>
    </Flex>
  );
};
