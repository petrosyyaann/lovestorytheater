import { Center, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import MainPage from '/assets/MainPage.png';
import { Quote } from 'components/Quote/Quote';
import { MainPerformance } from 'components/MainPerformance/MainPerformance';
import { Perfomance } from 'components/Perfomance/Perfomance';
import { useState } from 'react';
import { IQuote } from 'ui/types/Quote';

export const BusinessСard = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [quote, setQuote] = useState<IQuote>({
    text: '“Любовь состоит из одной души, населяющей два тела.”',
    author: '(Аристотель)',
  });
  return (
    <Center w='100%' flexDirection='column'>
      <Text
        fontFamily='Calypso'
        fontSize={['22px', '33px', '55px', '70px', '90px']}
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
        {isLargerThan1280 ? (
          <>
            <Quote key={quote.text} text={quote.text} author={quote.author} />
            <Flex w='100%' h='100%'>
              <Flex w='100%' alignItems='flex-start' justifyContent='center'>
                <Perfomance
                  text='Февральские истории: 13 - 18'
                  onClick={() =>
                    setQuote({
                      text: '“Любовь состоит из одной души, населяющей два тела.”',
                      author: '(Аристотель)',
                    })
                  }
                />
              </Flex>
              <MainPerformance />
              <Flex
                w='100%'
                alignItems='center'
                justifyContent='center'
                mb='100px'
              >
                <Perfomance
                  text='Истории марта: 5 - 10'
                  onClick={() =>
                    setQuote({
                      text: '“Есть предел слов, но нет границы чувств и вместимости сердца.”',
                      author: '(А. Блок)',
                    })
                  }
                />
              </Flex>
            </Flex>
          </>
        ) : (
          <Flex
            direction='column'
            alignItems='center'
            h='100%'
            justifyContent='space-between'
          >
            <Flex direction='column' p='20px' gap='15px' alignItems='center'>
              <Perfomance
                text='Февральские истории: 13 - 18'
                onClick={() =>
                  setQuote({
                    text: '“Любовь состоит из одной души, населяющей два тела.”',
                    author: '(Аристотель)',
                  })
                }
              />
              <Perfomance
                text='Истории марта: 5 - 10'
                onClick={() =>
                  setQuote({
                    text: '“Есть предел слов, но нет границы чувств и вместимости сердца.”',
                    author: '(А. Блок)',
                  })
                }
              />
            </Flex>
            <Flex direction='column' gap='50px'>
              <Quote key={quote.text} text={quote.text} author={quote.author} />
              <MainPerformance />
            </Flex>
          </Flex>
        )}
      </Flex>
    </Center>
  );
};
