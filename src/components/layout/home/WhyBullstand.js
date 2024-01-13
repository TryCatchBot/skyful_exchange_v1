import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,  extendTheme, ChakraProvider
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';



const features = [
  {
    id: 1,
    title: 'Speed with Ease',
    text: "Dive into a world where achieving your goals is not just a journey but a swift, effortless experience. With us, success is not a destination; it's a seamless, speedy adventure tailored just for you.",
  },
  {
    id: 2,
    title: 'Secure',
    text: "In a world where trust is paramount, we stand as your unwavering partner. Choose us for the assurance of security in every exchange. Your journey is not just a partnership; it's a secure bond that propels you towards success.",
  },
  {
    id: 3,
    title: 'Customer Focused',
    text: 'We go beyond the transaction. With a customer-focused approach, your success becomes our singular priority. Experience a partnership where every interaction is designed to cater to your unique needs and aspirations.',
  },
  {
    id: 4,
    title: 'Good Exchange Rate',
    text: "Elevate your financial journey with us as every transaction becomes an adventure. Our exciting exchange rates are not just numbers; they're the thrill that sets us apart, making every interaction with us a memorable experience.",
  },
];

const  WhyBullstand = () => {


    // change boxShadow colour
    const theme = extendTheme({
        shadows: {
          outline: "0 0 0 3px rgb(34,139,34)",
        },
      });




  return (
    <ChakraProvider theme={theme}>
        <Box p={4} bg={'black'}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'} color={'green.400'}>
          Why You Should Use Bullstand
        </Heading>
        <Text color={'gray.400'} fontSize={'xl'}>
        Elevate your transactions to new heights with our swift, secure, and simple platform. Enjoy low foreign exchange rates and the universal accessibility to send funds to any bank, regardless of the account name. Experience financial empowerment with ease. 🚀🛡️🌍
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map(feature => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'} _hover={{boxShadow: 'outline', p:'6px', rounded:'md',}}>
                <Text fontWeight={600} color={'green.400'}>
                  {feature.title}
                </Text>
                <Text color={'white'} >{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
    </ChakraProvider>
  );
};

export default WhyBullstand;
