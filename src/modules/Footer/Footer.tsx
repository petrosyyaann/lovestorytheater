import { Flex, Text, useMediaQuery } from '@chakra-ui/react';

const Footer = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex
      id='contacts'
      direction='column'
      alignItems={isLargerThan992 ? '' : 'center'}
      py={['20px', '33px', '47px', '60px', '75px']}
      pl={['0', '0', '0', '82px', '100px']}
      gap={['11px', '17px', '23px', '29px', '35px']}
    >
      <Text
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        w='fit-content'
        bgClip='text'
        fontSize={['20px', '25px', '35px', '40px', '50px']}
        fontFamily='Calypso'
      >
        Контакты
      </Text>
      <Text color='#787878' fontSize={['16px', '18px', '23px', '29px', '35px']}>
        почта и телефон
      </Text>
      <Flex
        gap={['16px', '35px', '50px', '40px', '90px']}
        direction={isLargerThan992 ? 'row' : 'column'}
        fontSize={['18px', '20px', '22px', '24px', '25px']}
      >
        <Flex
          alignItems={!isLargerThan992 ? 'center' : ''}
          direction='column'
          gap={['9px', '16px', '23px', '30px', '38px']}
        >
          <Text>+ 8(915)-149-44-46</Text>
          <Text>Sazykin_egoriy@mail.ru</Text>
        </Flex>
        <Flex
          alignItems={!isLargerThan992 ? 'center' : ''}
          direction='column'
          gap={['9px', '16px', '23px', '30px', '38px']}
        >
          <Text>+ 8(980)-168-33-55</Text>
          <Text>88kontora@gmail.com</Text>
        </Flex>
        <Flex
          alignItems={!isLargerThan992 ? 'center' : ''}
          direction='column'
          gap={['9px', '16px', '23px', '30px', '38px']}
          pt={['9px', '16px', '23px', '0', '0']}
          fontSize={['14px', '16px', '18px', '24px', '25px']}
        >
          <Text>Политика конфиденциальности</Text>
          <Text>Договор оферты</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
