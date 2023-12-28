import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { MenuIcon } from './iconpack';

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
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
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
              <Button
                color='#FFF'
                background='transparent'
                fontFamily='Calypso'
                _hover={{
                  bg: 'transparent',
                }}
                _active={{
                  bg: 'transparent',
                }}
              >
                Главная
              </Button>
              <Button
                color='#FFF'
                background='transparent'
                fontFamily='Calypso'
                _hover={{
                  bg: 'transparent',
                }}
                _active={{
                  bg: 'transparent',
                }}
              >
                О спектакле
              </Button>
              <Button
                color='#FFF'
                background='transparent'
                fontFamily='Calypso'
                _hover={{
                  bg: 'transparent',
                }}
                _active={{
                  bg: 'transparent',
                }}
              >
                Билеты
              </Button>
              <Button
                color='#FFF'
                background='transparent'
                fontFamily='Calypso'
                _hover={{
                  bg: 'transparent',
                }}
                _active={{
                  bg: 'transparent',
                }}
              >
                Контакты
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
