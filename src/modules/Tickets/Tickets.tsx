import { Flex, Heading, Text, useMediaQuery, Image } from '@chakra-ui/react';
import { ButtonBuy } from 'components/ButtonBuy';
import Ticket from '../../../public/assets/Ticket.svg';

export const Tickets = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex
      w='100%'
      mt={['14px', '23px', '27px', '35px', '40px']}
      direction='column'
    >
      <Heading
        id='tickets'
        ml={['22px', '42px', '62px', '82px', '100px']}
        fontSize={['20px', '30px', '50px', '75px', '95px']}
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        bgClip='text'
      >
        Билеты
      </Heading>
      <Flex
        justifyContent='center'
        direction={['column', 'column', 'column', 'row-reverse', 'row-reverse']}
        gap={['22px', '35px', '0px', '0px', '0px']}
        pt={['15px', '20px', '30px', '40px', '50px']}
      >
        <Flex
          direction='column'
          justifyContent='center'
          alignItems={isLargerThan992 ? 'center' : 'left'}
          ml={['22px', '42px', '62px', '82px', '100px']}
          mr={['38px', '52px', '62px', '30px', '30px']}
          gap={['15px', '30px', '50px', '70px', '100px']}
          fontSize={['14px', '19px', '25px', '30px', '36px']}
          textAlign={isLargerThan992 ? 'center' : 'left'}
          pr={['0', '0', '0', '50px', '100px']}
        >
          <Text>У вас могут быть сотни причин прийти или не прийти сюда.</Text>
          <Text>
            Однако, если вы оказались здесь, значит это то, что вам нужно именно
            сейчас.
          </Text>
          {isLargerThan992 && <ButtonBuy />}
        </Flex>
        <Flex direction='column' p={['40px', '60px', '80px', '40px', '60px']}>
          <Image zIndex={2} src={Ticket} />
          <Image transform='rotate(12deg)' src={Ticket} />
        </Flex>
      </Flex>
      <Flex py='50px' w='100%' justifyContent='center'>
        {!isLargerThan992 && <ButtonBuy />}
      </Flex>
    </Flex>
  );
};
