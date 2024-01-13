import { Box, Heading, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.400'} />
      <Heading as="h2" size="lg" mt={6} mb={12}>
      Click to <Link to="/trade"><mark>trade now</mark></Link>, unlock dreams – where every exchange tells a story of financial growth and possibilities. 🌐💰
      </Heading>
      <Link to="/trade">
      <Button
        colorScheme="green"
        w={"250px"}
        h={"50px"}
        // bgGradient="linear(to-r, green.400, green.500, green.600)"
        bg={"green.400"}
        color="white"
        variant="solid">
        Trade Now
      </Button>
      </Link>
    </Box>
  );
};

export default CallToAction;