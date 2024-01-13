import React, { useState } from 'react';
import Select from 'react-select';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SecurityQuestion = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isAnswer, setIsAnswer] = useState('');
  const [isWrongAnswer, setIsWrongAnswer] = useState('');
  const [mustSelect, setMustSelect] = useState('');

  const navigate = useNavigate();

  const securityQuestions = [
    { value: 'petName', label: "What is your pet's name?" },
    { value: 'birthCity', label: 'In which city were you born?' },
    { value: 'favoriteColor', label: 'What is your favorite color?' },
    { value: 'bestFriendName', label: 'What is the name of your best friend?' },
    {
      value: 'elementarySchool',
      label: 'Which school did you attend for elementary education?',
    },
  ];

  const handleSecurityAnswer = () => {
    if (!selectedQuestion || !isAnswer) {
      setMustSelect('Please select a security question and provide an answer.');
      return;
    }

    
    const correctAnswers = {
      petName: 'answer1',
      birthCity: 'answer2',
      favoriteColor: 'answer3',
      bestFriendName: 'answer4',
      elementarySchool: 'answer5',
    };

    const isAnswerCorrect = correctAnswers[selectedQuestion.value] === isAnswer;


    if (isAnswerCorrect) {
      navigate('/chang3-rat3');
    } else {
      setIsWrongAnswer('Incorrect answer. Please try again.');
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.1000', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'1000px'} w={'550px'} px={6} mt={6}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>
            This page is <mark style={{ fontSize: '22px' }}>Classified</mark> 
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          mt={-8}
        >
          <Stack spacing={4}>
            <Box>
              <FormControl id="securityQuestion" isRequired>
                <FormLabel fontSize="sm" fontWeight="normal">
                  Select a security question
                </FormLabel>
                <Select
                  options={securityQuestions}
                  value={selectedQuestion}
                  onChange={selectedOption =>
                    setSelectedQuestion(selectedOption)
                  }
                />
              </FormControl>
            </Box>
            {mustSelect ? <Text color={'red'}>{mustSelect}</Text> : ''}
            <Box>
              <FormControl id="securityAnswer" isRequired>
                <FormLabel fontSize="sm" fontWeight="normal">
                  Answer to the selected question
                </FormLabel>
                <Input
                  type="text"
                  onChange={e => setIsAnswer(e.target.value)}
                  w={'full'}
                  h={'38px'}
                  // name="entry.1529550563"
                />
              </FormControl>
            </Box>
            {isWrongAnswer ? <Text color={'red'}>{isWrongAnswer}</Text> : ''}

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                color={'black'}
                bg={'#FFF8DC'}
                borderRadius="5px"
                h={'38px'}
                cursor={
                  !selectedQuestion || !isAnswer ? 'not-allowed' : 'pointer'
                }
                _hover={
                  !selectedQuestion || !isAnswer
                    ? null
                    : { base: { bg: '#f0ead2', color: 'black' }, md: null } 
                }
                isDisabled={!selectedQuestion || !isAnswer}
                styles={{ borderColor: '#dd2f81' }}
                fontSize="xl"
                onClick={handleSecurityAnswer}
              >
                Get Classified Access
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SecurityQuestion;
