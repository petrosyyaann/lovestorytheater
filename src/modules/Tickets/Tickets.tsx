import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import TwoTickets from '/assets/TwoTickets.svg';

export const Tickets = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex
      w='100%'
      mt={['14px', '23px', '27px', '35px', '40px']}
      direction='column'
      alignItems='center'
    >
      <Flex
        w='100%'
        justifyContent={['center', 'center', 'center', 'end', 'end']}
      >
        <Text
          id='tickets'
          fontSize={['24px', '30px', '45px', '55px', '75px']}
          bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
          bgClip='text'
          w='fit-content'
          fontFamily='Calypso'
          mr={['0px', '0px', '0px', '82px', '100px']}
        >
          Ваша история
        </Text>
      </Flex>
      <Flex
        justifyContent='space-evenly'
        direction={[
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'row',
          'row',
        ]}
        mt={['14px', '23px', '27px', '0px', '0px']}
      >
        <Flex
          direction='column'
          w='100%'
          maxW='1200px'
          minW={['150px', '200px', '300px', '550px', '700px']}
          h={['45svh', '100%', '100%', '100%', '100%']}
          p={['30px', '60px', '70px', '40px', '50px']}
          alignItems='center'
        >
          <object
            style={{ zIndex: 2, width: '100%', height: '100%' }}
            type='image/svg+xml'
            data={TwoTickets}
          />
        </Flex>
        <Flex
          pt={['0px', '0px', '0px', '20px', '50px']}
          direction='column'
          alignItems={isLargerThan992 ? 'center' : 'left'}
          ml={['22px', '42px', '62px', '0px', '0px']}
          mr={['22px', '42px', '52px', '0px', '0px']}
          gap={['18px', '28px', '35px', '50px', '80px']}
          fontSize={['19px', '22px', '23px', '24px', '25px']}
          pr={['0', '0', '0', '82px', '100px']}
          textAlign='justify'
        >
          <Text>
            <span style={{ fontWeight: 500, color: '#C08F55' }}>
              Программа спектакля
            </span>{' '}
            рассчитана на уникальный опыт познания себя и своей пары, погружение
            в историю и нахождение в ней ответов на ваши вопросы.
          </Text>
          <Text>
            Даже если вы ещё не являетесь парой - в традиционном и общепринятом
            её понимании - а только хотите ею стать, и в самом начале вашего
            общего пути.. А, возможно, просто ищете классную идею для свидания?
          </Text>
          <Text>
            <span style={{ fontWeight: 500, color: '#C08F55' }}>
              Приходите на «ОН и ОНА»!
            </span>{' '}
            В этой истории нет актеров! Есть только вы, ваши ожидания, живые
            реакции и захватывающие эмоции! Не бойтесь окунуться в новый мир
            чувств и признаний!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
