import { Center, Flex, Heading, Text } from '@chakra-ui/react';
import MainPage from '../../../public/assets/MainPage.png';
import { ButtonBuy } from 'components/ButtonBuy';

export const BusinessСard = () => {
  return (
    <Center w='100%' flexDirection='column'>
      <Heading
        fontSize={['20px', '30px', '50px', '75px', '95px']}
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        bgClip='text'
      >
        ИСТОРИЯ ВАШЕЙ ЛЮБВИ
      </Heading>
      <Text fontSize={['15px', '18px', '20px', '25px', '30px']}>
        Иммерсивный спектакль
      </Text>
      <Flex
        mt={['14px', '16px', '19px', '21px', '25px']}
        w='100%'
        backgroundImage={MainPage}
        backgroundSize='cover'
        backgroundPosition='50% 50%'
        h={['360px', '455px', '550px', '640px', '725px']}
        alignItems='flex-end'
        justifyContent='center'
      >
        <ButtonBuy />
      </Flex>
    </Center>
  );
};
