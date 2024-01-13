import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  AspectRatio,
} from '@chakra-ui/react';
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaTelegram,
} from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';


const Logo = props => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Your SVG path goes here */}
    </svg>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  const currentYear = new Date().getFullYear();


  
  
  
    


  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © {currentYear} Skyful. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Telegram'}
                href={'#'}
              >
                <FaTelegram />
              </SocialButton>
              <SocialButton
                label={'Twitter'}
                href={
                  '#'
                }
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={'Facebook'}
                href={
                  '#'
                }
              >
                <FaFacebookF />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href={'#'}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Solutions</ListHeader>
            <Box as="a" href={'/trade'}>
              Trade
            </Box>
            <Box as="a" href={'#'}>
              Bulk Purchase
            </Box>
            <Box as="a" href={'#'}>
              Partnership
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'/contact-us'}>
              Customer Service
            </Box>
            <Box as="a" href={'#'}>
              Career
            </Box>
            <Box as="a" href={'#'}>
              Cookie Policy
            </Box>
            <Box as="a" href={'#'}>
              User Agreement
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
          </Stack>
          {/* <Stack align={'flex-start'}>
            <ListHeader >Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <iframe
                src="https://bullstand.substack.com/embed"
                width="350"
                height="69"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </Stack>
          </Stack> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
