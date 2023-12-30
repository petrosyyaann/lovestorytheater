import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import DescriptionPage from '../../../public/assets/DescriptionPage.png';
import { ButtonBuy } from 'components/ButtonBuy';

export const Description = () => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  return (
    <Flex
      w='100%'
      mt={['14px', '23px', '27px', '35px', '40px']}
      direction='column'
    >
      <Heading
        ml={['22px', '42px', '62px', '82px', '100px']}
        fontSize={['20px', '30px', '50px', '75px', '95px']}
        bgGradient='linear-gradient(90deg, #B67D3A -3.44%, #FFF 100%)'
        bgClip='text'
        id='description'
      >
        О спектакле
      </Heading>
      <Flex
        direction={['column', 'column', 'column', 'row', 'row']}
        gap={['22px', '35px', '0px', '0px', '0px']}
      >
        <Flex
          direction='column'
          justifyContent='center'
          ml={['22px', '42px', '62px', '82px', '100px']}
          mr={['38px', '52px', '62px', '30px', '30px']}
          gap={['15px', '30px', '50px', '70px', '100px']}
          fontSize={['14px', '19px', '25px', '30px', '36px']}
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
          mt={['14px', '16px', '19px', '21px', '25px']}
          w='100%'
          backgroundImage={DescriptionPage}
          backgroundSize='cover'
          backgroundPosition='50% 50%'
          h={['360px', '455px', '550px', '640px', '725px']}
          alignItems='flex-end'
          justifyContent='center'
        >
          {!isLargerThan992 && <ButtonBuy />}
        </Flex>
      </Flex>
    </Flex>
  );
};
