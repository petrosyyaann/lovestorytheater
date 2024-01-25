import { Center, Flex, Text } from '@chakra-ui/react';
import MainPage from '/assets/MainPage.png';
import { Quote } from 'components/Quote/Quote';
import { MainPerformance } from 'components/MainPerformance/MainPerformance';

export const BusinessСard = () => {
  return (
    <Center w='100%' flexDirection='column'>
      <Text
        fontFamily='Calypso'
        fontSize={['25px', '33px', '55px', '70px', '90px']}
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        w='fit-content'
        bgClip='text'
      >
        ИСТОРИЯ ВАШЕЙ ЛЮБВИ
      </Text>
      <Text fontSize={['18px', '20px', '25px', '30px', '45px']}>
        Иммерсивный спектакль
      </Text>
      <Flex
        direction='column'
        mt={['14px', '16px', '19px', '21px', '25px']}
        w='100%'
        backgroundImage={`linear-gradient(180deg, rgba(6, 6, 7, 0.40) 0.01%, rgba(9, 10, 11, 0.40) 0.02%, rgba(0, 0, 0, 0.40) 52.5%, rgba(6, 6, 7, 0.11) 99.99%, rgba(9, 10, 11, 0.40) 100%) , url(${MainPage})`}
        backgroundSize='cover'
        backgroundPosition='50% 50%'
        h={['80svh', '75svh', '70svh', '70svh', '65svh']}
        alignItems='center'
      >
        <Quote
          text='“Любовь состоит из одной души, 
населяющей два тела.”'
          author='(Аристотель)'
        />
        <MainPerformance />
      </Flex>
    </Center>
  );
};
