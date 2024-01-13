import { Box, Heading, Button, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const ContactCallToAction = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.400'} />
      <Heading  mt={6} mb={12} >
        Don't fill forms, fill your <mark>portfolio!</mark> 📊 <br />
        <Text fontSize={"24px"} mt={"6px"}>Trading with us is easier than filling out a contact form.</Text>
        {/* <span style={{fontSize: "24px"}}>Trading with us is easier than filling out a contact form.</span>  */}
        {/* <Text fontSize={"15px"}>#TradeEasy #NoMoreForms #TradeWithEase #SimplifyTrading</Text> */}
      </Heading>
      <Link to="/trade">
        <Button
          colorScheme="green"
          w={'250px'}
          h={'50px'}
          // bgGradient="linear(to-r, green.400, green.500, green.600)"
          bg={'green.400'}
          color="white"
          variant="solid"
        >
         Start now!
        </Button>
      </Link>
    </Box>
  );
};

export default ContactCallToAction;
