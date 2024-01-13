import React, { useState, useEffect } from 'react';
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import ThreeJsBox from '../ThreeJsBox';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';

const HeroWithThreeJs = () => {
  const [bannerTextIndex, setBannerTextIndex] = useState(0);

  const bannerTexts = [
    <Text
      fontSize={{ base: 'md', lg: 'lg' }}
      color={'gray.500'}
      id="banner-text"
    >
      <Heading fontSize={20}>
        Easy. Quick. Private. Your Crypto, Your Way! 🚀
      </Heading>
      🗝️ Simplify your experience with easy, quick trades and a hint of privacy.
      Your crypto journey – tailored to your preferences – starts now!
    </Text>,
    <Text
      fontSize={{ base: 'md', lg: 'lg' }}
      color={'gray.500'}
      id="banner-text"
    >
      <Heading fontSize={20}>
        Rapid Trades, Fewer Hurdles, More Privacy. ⚡
      </Heading>
      🚀 Trade at rapid speed with fewer hurdles and a touch of privacy. Your
      crypto journey just got faster and smoother.
    </Text>,
    <Text
      fontSize={{ base: 'md', lg: 'lg' }}
      color={'gray.500'}
      id="banner-text"
    >
      <Heading fontSize={20}>
        Trade at the Speed of Now: Easy, Prompt, Private. 🌐
      </Heading>
      🕒 Don't wait for tomorrow – trade at the speed of now! Enjoy an easy,
      prompt, and somewhat private experience with our platform.
    </Text>,
    <Text
      fontSize={{ base: 'md', lg: 'lg' }}
      color={'gray.500'}
      id="banner-text"
    >
      <Heading fontSize={20}>Simplify. Accelerate. Protect. 🚀</Heading>
      🔐 Simplify your trading process, accelerate your transactions, and
      protect your privacy. Trade with us for a crypto experience that values
      your time and security.
    </Text>,
  ];

  useEffect(() => {
    const updateBannerText = () => {
      const currentHour = new Date().getHours();
      const newIndex = currentHour % bannerTexts.length;
      setBannerTextIndex(newIndex);
    };
    const intervalId = setInterval(updateBannerText, 60 * 60 * 1000);
    updateBannerText();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'yellow.500',
                zIndex: -1,
              }}
            >
              Trade Crypto
            </Text>
            <br />{' '}
            <Text color={'yellow.500'} as={'span'}>
              Smart, Securely.
            </Text>{' '}
          </Heading>
          {bannerTexts[bannerTextIndex]}
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link to="/trade">
              <Button
                w={{ base: '100%', md: 220 }}
                rounded={'full'}
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'black',
                }}
              >
                Trade Now
              </Button>
            </Link>

            <Link to="https://t.me/SkyfulExchange" target="_blank">
              <Button rounded={'full'}>Join Community</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        {/**<Wrapper
          className="App"
          style={{ backgroundColor: 'red', maxWidth: '80%' }}
        > */}
        {/**<Background />
          <TextSection /> */}
        <Canvas style={{ marginTop: '-40px',  }}>
          <OrbitControls enableZoom={false} />{' '}
          {/**Adds light and colour to the box */}
          <ThreeJsBox />
          <ambientLight intensity={0.5} />{' '}
          {/**Adds light and colour to the box */}
          <directionalLight position={[-2, 5, 2]} intensity={1} />{' '}
          {/**Adds light and colour to the edge of the box */}
        </Canvas>
        {/** </Wrapper> */}
      </Flex>
    </Stack>
  );
};


const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 600px;
  }
`;

export default HeroWithThreeJs;
