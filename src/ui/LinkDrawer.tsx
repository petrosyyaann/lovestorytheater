import { Text } from '@chakra-ui/react';

interface LinkDrawerProps {
  text: string;
  link: string;
  onClick: () => void;
}
const LinkDrawer = ({ text, link, onClick }: LinkDrawerProps) => {
  const handleClick = () => {
    onClick();
    window.location.href = `/#${link}`;
  };
  return (
    <Text
      fontWeight={700}
      fontSize={['14px', '20px', '25px', '30px', '35px']}
      _hover={{
        bgGradient: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)',
        bgClip: 'text',
        cursor: 'pointer',
      }}
      fontFamily='Calypso'
      onClick={handleClick}
    >
      {text}
    </Text>
  );
};

export default LinkDrawer;
