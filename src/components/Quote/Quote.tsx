import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { IQuote } from 'ui/types/Quote';

export const Quote = ({ text, author }: IQuote) => {
  const [isLargerThan1350] = useMediaQuery('(min-width: 1350px)');
  return (
    <Flex
      direction='column'
      w='fit-content'
      alignItems={isLargerThan1350 ? 'flex-end' : 'center'}
      px={isLargerThan1350 ? '30px' : '0'}
    >
      <Text
        mt='20px'
        pr={isLargerThan1350 ? '50px' : '0'}
        fontSize={['25px', '32px', '37px', '42px', '50px']}
        textAlign='center'
      >
        {text}
      </Text>
      <Text fontSize={['20px', '25px', '30px', '32px', '38px']}>{author}</Text>
    </Flex>
  );
};
