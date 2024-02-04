import { Flex } from '@chakra-ui/react';
import LinkAnchor from 'ui/LinkAnchor';

const MenuAnchor = () => {
  return (
    <Flex gap={['36px', '46px', '56px', '66px', '76px']} direction='row'>
      <LinkAnchor text='Главная' link='businesscard' />
      <LinkAnchor text='О спектакле' link='description' />
      <LinkAnchor text='Ваша история' link='tickets' />
      <LinkAnchor text='О нас' link='resume' />
      <LinkAnchor text='Контакты' link='contacts' />
    </Flex>
  );
};

export default MenuAnchor;
