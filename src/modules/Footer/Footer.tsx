import { Flex, Text, useMediaQuery } from '@chakra-ui/react';

const Footer = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  return (
    <Flex
      id='contacts'
      direction='column'
      alignItems={isLargerThan1000 ? '' : 'center'}
      py={['20px', '33px', '47px', '60px', '75px']}
      pl={['0', '0', '0', '82x', '111px']}
      gap={['11px', '17px', '23px', '29px', '35px']}
    >
      <Text
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        w='fit-content'
        bgClip='text'
        fontSize={['20px', '30px', '45px', '55px', '75px']}
        fontFamily='Calypso'
      >
        Контакты
      </Text>
      <Text
        color={isLargerThan1000 ? '#787878' : '#A57740'}
        fontSize={['10px', '17px', '23px', '29px', '35px']}
      >
        почта и телефон
      </Text>
      <Flex
        gap={['16px', '35px', '50px', '40px', '90px']}
        direction={isLargerThan1000 ? 'row' : 'column'}
        // alignItems={!isLargerThan1000 ? 'center' : ''}
      >
        <Flex
          alignItems={!isLargerThan1000 ? 'center' : ''}
          direction='column'
          gap={['9px', '16px', '23px', '30px', '38px']}
        >
          <Text fontSize={['12px', '17px', '21px', '26px', '30px']}>
            + 8(915)-149-44-46
          </Text>
          <Text fontSize={['12px', '17px', '21px', '26px', '30px']}>
            Sazykin_egoriy@mail.ru
          </Text>
        </Flex>
        <Flex
          alignItems={!isLargerThan1000 ? 'center' : ''}
          direction='column'
          gap={['9px', '16px', '23px', '30px', '38px']}
        >
          <Text fontSize={['12px', '17px', '21px', '26px', '30px']}>
            + 8(980)-168-33-55
          </Text>
          <Text fontSize={['12px', '17px', '21px', '26px', '30px']}>
            88kontora@gmail.com
          </Text>
        </Flex>
        <Flex
          alignItems={!isLargerThan1000 ? 'center' : ''}
          direction='column'
          gap={['9px', '16px', '23px', '30px', '38px']}
          pt={['9px', '16px', '23px', '0', '0']}
        >
          <Text fontSize={['12px', '17px', '21px', '26px', '30px']}>
            Политика конфиденциальности
          </Text>
          <Text fontSize={['12px', '17px', '21px', '26px', '30px']}>
            Договор оферты
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
