import { Flex, Text } from '@chakra-ui/react';
import { ButtonBuy } from 'components/ButtonBuy/ButtonBuy';

export const MainPerformance = () => {
  return (
    <Flex
      direction='column'
      w='100%'
      alignItems='center'
      justifyContent='flex-end'
    >
      <Flex w='fit-content' direction='column'>
        <Text
          position='relative'
          top={['5px', '8px', '11px', '14px', '20px']}
          zIndex='1'
          fontSize={['35px', '45px', '55px', '60px', '75px']}
        >
          13.02
        </Text>
        <Text
          position='relative'
          fontSize={['55px', '65px', '70px', '75px', '89px']}
          bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
          w='fit-content'
          bgClip='text'
        >
          ОН и ОНА
        </Text>
      </Flex>
      <Flex
        w='100%'
        justifyContent='center'
        mb={['35px', '52px', '60px', '77px', '85px']}
      >
        <ButtonBuy />
      </Flex>
    </Flex>
  );
};
