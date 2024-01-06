import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { IPerformance } from 'ui/types/Performance';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';
import { ArrowIcon } from 'ui/iconpack/ArrowIcon';
import { useState } from 'react';
import './Performances.css';

const Performances = ({ performances }: { performances: IPerformance[] }) => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  const [currentSlide, setCurrentSlide] = useState(0);
  return !isLargerThan992 ? (
    <Flex direction='column' w='100%' padding='30px'>
      {performances.map((performance) => (
        <Flex
          key={performance.play}
          direction='row'
          w='100%'
          justifyContent='space-between'
          fontSize={['20px', '25px', '25px', '0px', '0px']}
        >
          <Text>/ {performance.play}</Text>
          <Text>{performance.data}</Text>
        </Flex>
      ))}
    </Flex>
  ) : (
    <Flex h='100%' w='100%' justifyContent='space-between' direction='column'>
      <Flex w='50vw' wrap='wrap' padding='27px' gap='15px'>
        {performances.map((performance, id) => (
          <Flex gap='15px'>
            <Text fontSize='43px'>/</Text>
            <Text
              key={performance.play}
              fontSize='43px'
              onClick={() => setCurrentSlide(id)}
              className='link-slide'
            >
              {performance.play}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Flex alignItems='center' mr={['0px', '0px', '0px', '30px', '37px']}>
        <Flex
          gap='15px'
          direction='column'
          w='100%'
          ml='40vw'
          className='tetx-slide'
        >
          <Flex direction='column' alignItems='flex-start'>
            <Text fontSize={['0px', '0px', '0px', '50px', '70px']}>
              {performances[currentSlide].data}
            </Text>
            <Text fontSize={['0px', '0px', '0px', '71px', '91px']}>
              {performances[currentSlide].play}
            </Text>
            <ButtonBuy mb={['0px', '0px', '0px', '60px', '45px']} />
          </Flex>
        </Flex>
        <ArrowIcon
          className='button-slide'
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % performances.length)
          }
        />
      </Flex>
    </Flex>
  );
};

export default Performances;
