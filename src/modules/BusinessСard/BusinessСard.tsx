import { Center, Flex, Text } from '@chakra-ui/react';
import MainPage from '../../../public/assets/MainPage.png';
import { ButtonBuy } from 'components/ButtonBuy';

export const BusinessСard = () => {
  return (
    <Center w='100%' flexDirection='column'>
      <Text
        fontFamily='Calypso'
        id='businesscard'
        fontSize={['22px', '30px', '45px', '55px', '75px']}
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        w='fit-content'
        bgClip='text'
      >
        ИСТОРИЯ ВАШЕЙ ЛЮБВИ
      </Text>
      <Text fontSize={['16px', '18px', '20px', '25px', '30px']}>
        Иммерсивный спектакль
      </Text>
      <Flex
        mt={['14px', '16px', '19px', '21px', '25px']}
        w='100%'
        backgroundImage={MainPage}
        backgroundSize='cover'
        backgroundPosition='50% 50%'
        h={['80vh', '75vh', '70vh', '70vh', '65vh']}
        alignItems='flex-end'
        justifyContent='center'
      >
        <ButtonBuy />
      </Flex>
    </Center>
  );
};
