import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();


   const getCurrentButton = () => {
     const currentHour = new Date().getHours();

     if (currentHour >= 0 && currentHour < 6) {
       return (
         <Link to={'/trade'}>
           <Button
             w={{ base: 100, md: 200 }}
             px={8}
             bg={('#151f21', 'green.400')}
             color={'white'}
             rounded={'md'}
             _hover={{
               transform: 'translateY(-2px)',
               boxShadow: 'lg',
               bg: '#151f21',
             }}
           >
             Trade - Unlock Profits
           </Button>
         </Link>
       );
     } else if (currentHour >= 7 && currentHour < 12) {
       return (
         <Link to={'/trade'}>
           <Button
             w={{ base: 100, md: 200 }}
             px={8}
             bg={('#151f21', 'green.400')}
             color={'white'}
             rounded={'md'}
             _hover={{
               transform: 'translateY(-2px)',
               boxShadow: 'lg',
               bg: '#151f21',
             }}
           >
             Trade Effortlessly
           </Button>
         </Link>
       );
     } else if (currentHour >= 13 && currentHour < 18) {
       return (
         <Link to={'/trade'}>
           <Button
             w={{ base: 100, md: 200 }}
             px={8}
             bg={('#151f21', 'green.400')}
             color={'white'}
             rounded={'md'}
             _hover={{
               transform: 'translateY(-2px)',
               boxShadow: 'lg',
               bg: '#151f21',
             }}
           >
             Trade - Speed Guaranteed
           </Button>
         </Link>
       );
     } else {
       return (
         <Link to={'/trade'}>
           <Button
             w={{ base: 100, md: 200 }}
             px={8}
             bg={('#151f21', 'green.400')}
             color={'white'}
             rounded={'md'}
             _hover={{
               transform: 'translateY(-2px)',
               boxShadow: 'lg',
               bg: '#151f21',
             }}
           >
             Trade - Best Rate
           </Button>
         </Link>
       );
     }
   };

  {
    /**const getCurrentButton = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 6) {
      return <ThreeJsButton />;
    } else if (currentHour >= 7 && currentHour < 12) {
      return <BorderWipeButton />;
    } else if (currentHour >= 13 && currentHour < 18) {
      return <MaskButton />;
    } else {
      return (
        <Button
          onClick={'/trade'}
          style={{
            border: '2px solid grey',
            transition: 'border-color 0.3s ease-in-out',
            _hover: {
              borderColor: 'red',
            },
          }}
        >
          Trade
        </Button>
      );
    }
  }; */
  }

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <span>
              {/* <Link to="/">
                <Image
                  cloudName="pastorcoder"
                  publicId="skyfulExchange/skyful-s-logo.png"
                />
              </Link> */}
            </span>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Box id="navbar-btn">{getCurrentButton()}</Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
