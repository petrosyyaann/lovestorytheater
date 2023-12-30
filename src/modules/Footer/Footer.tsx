import { Flex, Text, useMediaQuery } from '@chakra-ui/react';

const Footer = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  return (
    <Flex
      id='contacts'
      direction='column'
      py={['20px', '33px', '47px', '60px', '75px']}
      px={['22px', '42px', '62px', '82px', '111px']}
      gap={['11px', '17px', '23px', '29px', '35px']}
    >
      <Text
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        bgClip='text'
        fontSize={['14px', '25px', '37px', '48px', '60px']}
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
      <Flex gap={['16px', '53px', '62px', '76px', '90px']}>
        <Flex direction='column' gap={['9px', '16px', '23px', '30px', '38px']}>
          <Text fontSize={['12px', '17px', '21px', '26px', '30px']}>
            Sazykin_egoriy@mail.ru
          </Text>
          <Text fontSize={['12px', '17px', '21px', '26px', '30px']}>
            88kontora@gmail.com
          </Text>
        </Flex>
        <Flex direction='column' gap={['9px', '16px', '23px', '30px', '38px']}>
          <Text fontSize={['12px', '17px', '21px', '26px', '30px']}>
            + 8(915)-149-44-46
          </Text>
          <Text fontSize={['12px', '17px', '21px', '26px', '30px']}>
            + 8(980)-168-33-55
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
