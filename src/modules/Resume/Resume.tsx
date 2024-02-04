import { Flex, Text } from '@chakra-ui/react';
import ResumePage from '/assets/ResumePage.png';
import { ButtonBuy } from 'components/ButtonBuy/ButtonBuy';

export const Resume = () => {
  return (
    <Flex
      w='100%'
      mt={['14px', '23px', '27px', '35px', '40px']}
      direction='column'
    >
      <Flex
        w='100%'
        justifyContent={['center', 'center', 'center', 'start', 'start']}
      >
        <Text
          fontFamily='Calypso'
          ml={['0px', '0px', '0px', '82px', '100px']}
          fontSize={['24px', '30px', '45px', '55px', '75px']}
          bgGradient='linear(to-r, #B67D3A, #FFFFFF)'
          w='fit-content'
          bgClip='text'
          id='resume'
        >
          О нас
        </Text>
      </Flex>
      <Flex
        mt={['14px', '23px', '27px', '35px', '40px']}
        direction={['column', 'column', 'column', 'row', 'row']}
      >
        <Flex
          direction='column'
          justifyContent='center'
          h='100%'
          ml={['22px', '42px', '62px', '82px', '100px']}
          mr={['22px', '52px', '62px', '30px', '30px']}
          gap={['14px', '25px', '30px', '35px', '40px']}
          fontSize={['19px', '22px', '23px', '24px', '25px']}
          textAlign='justify'
        >
          <Text>
            Творческая команда проекта{' '}
            <span style={{ fontWeight: 500, color: '#C08F55' }}>
              «ОН и ОНА»{' '}
            </span>
            реализует необычную идею спектакля без актеров, в котором основным
            действующим лицом является сам зритель.
          </Text>
          <Text>
            Световые, музыкальные, и визуальные эффекты создают ту уникальную
            атмосферу, в которой становится возможным узнать и раскрыть не
            только потенциал вашей пары, но и{' '}
            <span style={{ fontWeight: 500, color: '#C08F55' }}>
              познать самого себя.
            </span>
          </Text>
        </Flex>
        <Flex
          mt={['14px', '23px', '27px', '10px', '10px']}
          mr={['0px', '0px', '0px', '90px', '110px']}
          w='100vw'
          h={['220px', '290px', '', '', '']}
          backgroundImage={ResumePage}
          backgroundSize='cover'
          backgroundPosition='50% 50%'
        />
      </Flex>
      <Flex
        w='100%'
        justifyContent='center'
        my={['45px', '50px', '55px', '65px', '70px']}
      >
        <ButtonBuy />
      </Flex>
    </Flex>
  );
};
