import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';

const Testimonial = props => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = props => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = props => {
  const { children } = props;

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = props => {
  const { children } = props;

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const TestimoniesOne = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>What Our Customers Say</Heading>
          <Text>
            We have been working working with customers across the web and this
            is what they have to say about our services
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Quick and Efficient</TestimonialHeading>
              <TestimonialText>
                I experienced quick and efficient transactions with Skyful
                exchange. Seamless trading, instant results! 💹🚀
                #EfficiencyUnleashed
              </TestimonialText>
              <a href="twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter style={{ color: '#1DA1F2' }} />
              </a>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://twitter.com/moctar_mbaye/photo'}
              name={'Sunday Adetutu'}
              title={'Crypto Trader'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Very Responsive Customer Care
              </TestimonialHeading>
              <TestimonialText>
                They have lightning-fast transactions, very responsive customer
                care—elevate your crypto-fiat journey! 🚀🌐 #CustomerFirst
              </TestimonialText>
              <a href="twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter style={{ color: '#1DA1F2' }} />
              </a>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://twitter.com/moctar_mbaye/photo'}
              name={'Jedida Ahmed'}
              title={'User'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Exciting Exchange Rate</TestimonialHeading>
              <TestimonialText>
                Experience a whirlwind of action with this exchange's dynamic
                forex rates—swift transactions, thrilling opportunities! 🚀💱
                #CryptoFiatExchange
              </TestimonialText>
              <a href="twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter style={{ color: '#1DA1F2' }} />
              </a>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://twitter.com/moctar_mbaye/photo'}
              name={'Abel John'}
              title={'Crypto Enthusiast'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};
export default TestimoniesOne;
