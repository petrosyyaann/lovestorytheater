import { Flex, IconButton, Text, useMediaQuery } from '@chakra-ui/react';
import { InstagramIcon, TelegramIcon, WhatsappIcon } from 'ui/iconpack';

const Footer = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex
      id='contacts'
      direction='column'
      alignItems={isLargerThan992 ? '' : 'center'}
      py={['37px', '63px', '91px', '60px', '75px']}
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
        fontSize={['15px', '16px', '18px', '24px', '30px']}
        h={['100px', '100px', '90px', '100px', '110px']}
      >
        <Flex
          alignItems={!isLargerThan992 ? 'center' : ''}
          direction='column'
          justifyContent='space-between'
          gap={['12px', '15px', '20px', 'unset', 'unset']}
        >
          <Text>lovestorytheater@mail.ru</Text>
          <Flex gap={['10px', '12px', '13px', '14px', '15px']}>
            <IconButton
              variant='ghost'
              aria-label='Telegram'
              icon={<TelegramIcon />}
              _hover={{ background: 'transparent' }}
            />
            <IconButton
              variant='ghost'
              aria-label='Instagram'
              icon={<InstagramIcon />}
              onClick={() =>
                (window.location.href =
                  'https://www.instagram.com/lovestorytheatre/?igsh=OGQ5Z')
              }
              _hover={{ background: 'transparent' }}
            />
            <IconButton
              variant='ghost'
              aria-label='Whatsapp'
              icon={<WhatsappIcon />}
              _hover={{ background: 'transparent' }}
            />
          </Flex>
        </Flex>
        <Flex
          alignItems={!isLargerThan992 ? 'center' : ''}
          direction='column'
          gap={['12px', '15px', '20px', 'unset', 'unset']}
          justifyContent='space-between'
          fontSize={['10px', '14px', '18px', '23px', '25px']}
        >
          <Text>Политика конфиденциальности</Text>
          <Text>Договор оферты</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
