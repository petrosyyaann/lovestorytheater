import { Flex, Text, useMediaQuery } from '@chakra-ui/react';

const Footer = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  return (
    <Flex
      direction='column'
      py={isLargerThan1000 ? '75px' : '20px'}
      px={isLargerThan1000 ? '111px' : '22px'}
      gap={isLargerThan1000 ? '35px' : '11px'}
    >
      <Text
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        bgClip='text'
        fontSize={isLargerThan1000 ? '60px' : '14px'}
        fontFamily='Calypso'
      >
        Контакты
      </Text>
      <Text
        color={isLargerThan1000 ? '#787878' : '#A57740'}
        fontSize={isLargerThan1000 ? '35px' : '10px'}
      >
        почта и телефон
      </Text>
      <Flex gap={isLargerThan1000 ? '90px' : '16px'}>
        <Flex direction='column' gap={isLargerThan1000 ? '38px' : '9px'}>
          <Text color='white' fontSize={isLargerThan1000 ? '30px' : '12px'}>
            Sazykin_egoriy@mail.ru
          </Text>
          <Text color='white' fontSize={isLargerThan1000 ? '30px' : '12px'}>
            88kontora@gmail.com
          </Text>
        </Flex>
        <Flex direction='column' gap={isLargerThan1000 ? '38px' : '9px'}>
          <Text color='white' fontSize={isLargerThan1000 ? '30px' : '12px'}>
            + 8(915)-149-44-46
          </Text>
          <Text color='white' fontSize={isLargerThan1000 ? '30px' : '12px'}>
            + 8(980)-168-33-55
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
