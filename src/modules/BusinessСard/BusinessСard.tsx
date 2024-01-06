import { Center, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import MainPage from '../../../public/assets/MainPage.png';
import { ButtonBuy } from 'components/ButtonBuy/ButtonBuy';
import { IPerformance } from 'ui/types/Performance';
import Performances from 'components/Performances/Performances';

export const BusinessСard = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  const performances: IPerformance[] = [
    { play: 'Застольный период', data: '05.01' },
    { play: 'Звездная ночь', data: '06.01' },
    { play: 'МЫ', data: '06.01' },
    { play: 'В Риме', data: '07.01' },
  ];
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
        direction='column'
        mt={['14px', '16px', '19px', '21px', '25px']}
        w='100%'
        backgroundImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.60) 9.16%, rgba(9, 10, 11, 0.00) 38.44%, rgba(9, 10, 11, 0.00) 82.32%) , url(${MainPage})`}
        backgroundSize='cover'
        backgroundPosition='50% 50%'
        h={['80svh', '75svh', '70svh', '70svh', '65svh']}
        alignItems='center'
        justifyContent='flex-end'
      >
        <Performances performances={performances} />
        {!isLargerThan992 && (
          <ButtonBuy mb={['35px', '55px', '85px', '0px', '0px']} />
        )}
      </Flex>
    </Center>
  );
};
