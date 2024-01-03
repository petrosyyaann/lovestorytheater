import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import DescriptionPage from '../../../public/assets/DescriptionPage.png';

export const Description = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex
      w='100%'
      mt={['14px', '23px', '27px', '35px', '40px']}
      direction='column'
    >
      <Text
        fontFamily='Calypso'
        ml={['22px', '42px', '62px', '82px', '100px']}
        fontSize={['24px', '30px', '45px', '55px', '75px']}
        bgGradient='linear(to-r, #B67D3A, #FFFFFF)'
        w='fit-content'
        bgClip='text'
        id='description'
      >
        О спектакле
      </Text>
      <Flex
        mt={['14px', '23px', '27px', '35px', '40px']}
        direction={['column', 'column', 'column', 'row', 'row']}
      >
        <Flex
          direction='column'
          justifyContent='center'
          ml={['22px', '42px', '62px', '82px', '100px']}
          mr={['38px', '52px', '62px', '30px', '30px']}
          gap={['18px', '28px', '35px', '50px', '80px']}
          fontSize={['16px', '18px', '20px', '23px', '25px']}
        >
          <Text>
            “История вашей любви” — необыкновенное путешествие во времени и
            пространстве.
          </Text>
          <Text>
            Взаимодействуйте с чарующим пространством, чтобы ознакомиться с
            историей и принять правила игры. Участвуйте в истории, пересоздавая
            и укрепляя свои отношения.
          </Text>
          <Text>
            Вы откроете новое в своём любимом человеке и в себе, заглянете в
            будущее и оставите послание как это делали первые люди на земле.
          </Text>
        </Flex>
        <Flex
          mt={['14px', '23px', '27px', '35px', '40px']}
          w='100%'
          backgroundImage={DescriptionPage}
          backgroundSize='cover'
          backgroundPosition='50% 50%'
          h={['360px', '455px', '550px', '640px', '725px']}
        />
      </Flex>
    </Flex>
  );
};
