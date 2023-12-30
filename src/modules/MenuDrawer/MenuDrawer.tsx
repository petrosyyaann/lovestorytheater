import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { MenuIcon } from '../../ui/iconpack';
import LinkDrawer from 'ui/LinkDrawer';

export const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        background='transparent'
        _hover={{ bg: 'transparent' }}
        onClick={onOpen}
        aria-label='Menu Icon'
        icon={<MenuIcon />}
      />
      <Drawer
        returnFocusOnClose={false}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent background='#090A0B'>
          <DrawerBody>
            <Flex
              pt='16px'
              h='100%'
              direction='column'
              alignItems='flex-start'
              gap={30}
            >
              <LinkDrawer
                text='Главная'
                link='businesscard'
                onClick={onClose}
              />
              <LinkDrawer
                text='О спектакле'
                link='description'
                onClick={onClose}
              />
              <LinkDrawer text='Билеты' link='tickets' onClick={onClose} />
              <LinkDrawer text='Контакты' link='contacts' onClick={onClose} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
