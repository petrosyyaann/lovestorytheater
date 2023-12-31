import { Flex, Heading, Text, useMediaQuery, Image } from '@chakra-ui/react';
import { ButtonBuy } from 'components/ButtonBuy';
import Ticket from '../../../public/assets/Ticket.svg';

export const Tickets = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex
      w='100%'
      mt={['14px', '23px', '30px', '40px', '50px']}
      direction='column'
    >
      <Heading
        id='tickets'
        ml={['22px', '42px', '62px', '82px', '100px']}
        fontSize={['20px', '30px', '45px', '55px', '75px']}
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        bgClip='text'
        w='fit-content'
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
          ml={['22px', '42px', '62px', '40px', '70px']}
          mr={['38px', '42px', '52px', '0px', '0px']}
          gap={['15px', '30px', '50px', '70px', '100px']}
          fontSize={['14px', '16px', '18px', '20px', '25px']}
          textAlign={isLargerThan992 ? 'center' : 'left'}
          pr={['0', '0', '0', '30px', '50px']}
        >
          <Text>У вас могут быть сотни причин прийти или не прийти сюда.</Text>
          <Text>
            Однако, если вы оказались здесь, значит это то, что вам нужно именно
            сейчас.
          </Text>
          {isLargerThan992 && <ButtonBuy />}
        </Flex>
        <Flex direction='column' p={['40px', '60px', '80px', '60px', '80px']}>
          <Image zIndex={2} src={Ticket} />

          <Image
            mt={['-13px', '-22px', '-23px', '-24px', '-25px']}
            transform='rotate(12deg)'
            src={Ticket}
          />
        </Flex>
      </Flex>
      <Flex py='50px' w='100%' justifyContent='center'>
        {!isLargerThan992 && <ButtonBuy />}
      </Flex>
    </Flex>
  );
};
