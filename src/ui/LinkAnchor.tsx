import { Text } from '@chakra-ui/react';

interface LinkAnchorProps {
  text: string;
  link: string;
}
const LinkAnchor = ({ text, link }: LinkAnchorProps) => {
  return (
    <Text
      fontWeight={700}
      fontSize={['14px', '18px', '20px', '22px', '25px']}
      _hover={{
        bgGradient: 'linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)',
        w: 'fit-content',
        bgClip: 'text',
        cursor: 'pointer',
      }}
      onClick={() => (window.location.href = `#${link}`)}
    >
      {text}
    </Text>
  );
};

export default LinkAnchor;
