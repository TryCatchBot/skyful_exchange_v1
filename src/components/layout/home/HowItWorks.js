import React from 'react';
import {
  SimpleGrid,
  Box,
  Flex,
  Stepper,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
  CardHeader,
  Card,
  CardFooter,
  CardBody,
  Text,
  Button,
  Heading,
  Stack, useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const steps = [
  { title: 'Log Order', description: 'Quick' },
  { title: 'Make Payments', description: 'Fast' },
  { title: 'Get Funded', description: 'Instant' },
];

function HowItWorks() {
  const stepperDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const isMobile = useBreakpointValue({ base: true, md: false });


  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      mt={{ base: '40px', md: '60px' }}
      mb={{ base: '20px', md: '40px' }}
    >
      <Stack spacing={0} align={'center'} mb={'20px'}>
        <Heading>How It Works</Heading>
        <Text color={"grey"} w={{base: "78%", md: "100%"}}>
          Ready to embark on a journey of financial simplicity? Explore, Engage,
          and Experience the ease of our platform in just three steps! Get
          started now. 🚀💹💼
        </Text>
      </Stack>
      {!isMobile && ( 
        <Stepper
          size={{ base: 'md', md: 'lg' }}
          colorScheme="yellow"
          index={activeStep}
          width={{ base: '90vw', md: '1000px' }}
          mb={{ base: '4', md: '0' }}
          direction={stepperDirection}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus complete={'✅'} incomplete={'😂'} active={'💰'} />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      )}
      <SimpleGrid
        spacing={{ base: 4, md: 20 }}
        templateColumns={{
          base: '1fr',
          md: 'repeat(auto-fill, minmax(200px, 1fr))',
        }}
        mb={{ base: '10', md: '0' }}
        width="80vw"
      >
        {steps.map((step, index) => (
          <Card
            key={index}
            _hover={{
              backgroundColor: 'gray.100',
              border: '1px',
              borderColor: 'grey.100',
            }}
            border="1px"
            borderColor={`yellow.${300 + 100 * index}`}
          >
            <CardHeader>
              <Heading size="md">{step.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Click on the <mark>Trade</mark> button and complete order
                details
              </Text>
            </CardBody>
            <CardFooter>
              <Link to="/trade">
                <Button>Start Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default HowItWorks;
