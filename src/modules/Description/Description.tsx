import { Flex, Text } from '@chakra-ui/react';
import DescriptionPage from '/assets/DescriptionPage.png';

export const Description = () => {
  return (
    <Flex
      w='100%'
      mt={['14px', '23px', '27px', '35px', '40px']}
      direction='column'
    >
      <Flex
        w='100%'
        justifyContent={['center', 'center', 'center', 'start', 'start']}
      >
        <Text
          fontFamily='Calypso'
          ml={['0px', '0px', '0px', '82px', '100px']}
          fontSize={['24px', '30px', '45px', '55px', '75px']}
          bgGradient='linear(to-r, #B67D3A, #FFFFFF)'
          w='fit-content'
          bgClip='text'
          id='description'
        >
          О спектакле
        </Text>
      </Flex>
      <Flex
        mt={['14px', '23px', '27px', '35px', '40px']}
        direction={['column', 'column', 'column', 'row', 'row']}
      >
        <Flex
          direction='column'
          justifyContent='center'
          h='100%'
          ml={['22px', '42px', '62px', '82px', '100px']}
          mr={['22px', '52px', '62px', '30px', '30px']}
          gap={['14px', '25px', '30px', '35px', '40px']}
          fontSize={['19px', '22px', '23px', '24px', '25px']}
          textAlign='justify'
        >
          <Text>
            <span style={{ fontWeight: 500, color: '#C08F55' }}>
              “История вашей любви”
            </span>
            — необыкновенное путешествие во времени и пространстве.
          </Text>
          <Text>
            Попав сюда, пары вовлекаются в “лабиринт“, полный романтических
            историй и приключений.
          </Text>
          <Text>
            Проведите вечер, погрузившись в историю первой пары на земле.
          </Text>
          <Text>
            <span style={{ fontWeight: 500, color: '#C08F55' }}>
              “Станьте ею на время“
            </span>
            , чтобы больше понять про себя и про вашу вторую половинку.
          </Text>
          <Text>
            Взаимодействуйте с чарующим пространством, чтобы ознакомиться с
            историей и принять правила игры.
          </Text>
          <Text>
            <span style={{ fontWeight: 500, color: '#C08F55' }}>
              Участвуйте в истории
            </span>
            , пересоздавая и укрепляя свои отношения.
          </Text>
        </Flex>
        <Flex
          mt={['14px', '23px', '27px', '10px', '10px']}
          mr={['0px', '0px', '0px', '90px', '110px']}
          w='100%'
          backgroundImage={DescriptionPage}
          backgroundSize='cover'
          backgroundPosition='50% 50%'
          h={['300px', '370px', '510px', '630px', '730px']}
        />
      </Flex>
    </Flex>
  );
};
