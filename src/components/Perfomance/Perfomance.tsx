import { Flex, Text } from '@chakra-ui/react';

export const Perfomance = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <Text
      onClick={onClick}
      h='fit-content'
      w='max-content'
      fontSize={['25px', '30px', '35px', '30px', '35px']}
      _hover={{
        fontSize: ['27px', '33px', '38px', '33px', '38px'],
      }}
      cursor='pointer'
      transition='all .25s ease'
    >
      {text}
    </Text>
  );
};
