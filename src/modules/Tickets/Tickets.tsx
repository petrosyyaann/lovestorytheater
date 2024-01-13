import { Flex, Text, useMediaQuery, Image } from '@chakra-ui/react';
import { ButtonBuy } from 'components/ButtonBuy/ButtonBuy';
import TwoTickets from '../../../public/assets/TwoTickets.svg';

export const Tickets = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex
      w='100%'
      mt={['14px', '23px', '27px', '35px', '40px']}
      direction='column'
    >
      <Text
        id='tickets'
        ml={['22px', '42px', '62px', '82px', '100px']}
        fontSize={['24px', '30px', '45px', '55px', '75px']}
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        bgClip='text'
        w='fit-content'
        fontFamily='Calypso'
      >
        Билеты
      </Text>
      <Flex
        justifyContent='center'
        direction={['column', 'column', 'column', 'row-reverse', 'row-reverse']}
        mt={['14px', '23px', '27px', '35px', '40px']}
      >
        <Flex
          direction='column'
          justifyContent='center'
          alignItems={isLargerThan992 ? 'center' : 'left'}
          ml={['22px', '42px', '62px', '0px', '0px']}
          mr={['38px', '42px', '52px', '0px', '0px']}
          gap={['18px', '28px', '35px', '50px', '80px']}
          fontSize={['16px', '18px', '20px', '23px', '25px']}
          textAlign={isLargerThan992 ? 'center' : 'left'}
          pr={['0', '0', '0', '30px', '50px']}
          maxW='600px'
        >
          <Text>
            <span style={{ fontWeight: 700, color: '#C08F55' }}>Программа спектакля</span> рассчитана на уникальный опыт
            познания себя и своей пары, погружение в историю и нахождение в ней
            ответов на ваши вопросы.
          </Text>
          <Text>
            <span style={{ fontWeight: 700, color: '#C08F55' }}>Не бойтесь</span> окунуться в новый мир чувств и признаний.
          </Text>
          {isLargerThan992 && <ButtonBuy mb='35px' />}
        </Flex>
        <Flex
          direction='column'
          w='100%'
          maxW='1300px'
          p={['40px', '60px', '80px', '20px', '50px']}
        >
          <object
            style={{ zIndex: 2, width: '100%', height: '100%' }}
            type='image/svg+xml'
            data={TwoTickets}
          />
        </Flex>
      </Flex>
      <Flex
        pb={['40px', '66px', '94px', '60px', '75px']}
        w='100%'
        justifyContent='center'
      >
        {!isLargerThan992 && <ButtonBuy />}
      </Flex>
    </Flex>
  );
};
