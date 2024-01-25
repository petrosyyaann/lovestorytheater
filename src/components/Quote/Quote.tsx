import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { IQuote } from 'ui/types/Quote';

export const Quote = ({ text, author }: IQuote) => {
  const [isLargerThan1350] = useMediaQuery('(min-width: 1350px)');
  return (
    <Flex
      direction='column'
      alignItems={isLargerThan1350 ? 'flex-end' : 'center'}
      w={['300px', '400px', '500px', '600px', '1300px']}
      mt={['20px', '26px', '31px', '37px', '43px']}
    >
      <Text
        fontSize={['20px', '27px', '35px', '42px', '50px']}
        pr={isLargerThan1350 ? '50px' : '0'}
        textAlign={isLargerThan1350 ? undefined : 'center'}
      >
        {text}
      </Text>
      <Text fontSize={['17px', '22px', '27px', '32px', '38px']}>{author}</Text>
    </Flex>
  );
};
