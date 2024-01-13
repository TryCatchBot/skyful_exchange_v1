import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import Select from 'react-select';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  isAccountNumberAtom,
  isAccountNameAtom,
  isEmailAtom,
  isPhoneAtom,
  selectedCryptoAtom, selectedBankAtom, sellBankAtom
} from '../../../recoil/atoms/rateAtom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import Banks from '../../../assets/Banks';

export default function SellFormData() {
  const options = Banks();
  // console.log("This is the selected option", options)
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedBank, setSelectedBank] = useRecoilState(selectedBankAtom);
  const [sellBank, setSellBank] = useRecoilState(sellBankAtom);
  // const [selectedOption, setSelectedOption] = useRecoilState(selectBankAtom);
  const [isAccountNumber, setIsAccountNumber] =
    useRecoilState(isAccountNumberAtom);
  const [isAccountName, setIsAccountName] = useRecoilState(isAccountNameAtom);
  const [isEmail, setIsEmail] = useRecoilState(isEmailAtom);
  const [isPhone, setIsPhone] = useRecoilState(isPhoneAtom);
  const [isAccountNumberValid, setIsAccountNumberValid] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [selectedCrypto, setSelectedCrypto] =
    useRecoilState(selectedCryptoAtom);
  console.log('User selectedOption in SellFormData', selectedOption.label);
  
  const navigate = useNavigate();

  const handleSellButtonClick = () => {
    navigate('/trade/sell/payment');
  };



  const handleAccountNumberChange = event => {
    const inputAccountNumber = event.target.value;
    if (inputAccountNumber !== undefined) {
      setIsAccountNumber(inputAccountNumber);
      updateButtonState(inputAccountNumber, isAccountName, isEmail);
      if (
        inputAccountNumber.length === 10 &&
        /^\d+$/.test(inputAccountNumber)
      ) {
        setIsAccountNumberValid(true);
      } else {
        setIsAccountNumberValid(false);
      }
    }
  };

 

  const handleBankListChange = selected => {
    setSelectedOption(selected);
    console.log('selected', selected);
  };

  

  

  const handleAccountNameChange = event => {
    const inputAccountName = event.target.value;
    setIsAccountName(inputAccountName);
    updateButtonState(isAccountNumber, inputAccountName, isEmail);
  };

  const handleEmailChange = event => {
    const inputEmail = event.target.value;
    setIsEmail(inputEmail);
    updateButtonState(isAccountNumber, isAccountName, inputEmail);
  };

  const updateButtonState = (
    inputAccountNumber,
    inputAccountName,
    inputEmail
  ) => {
    // Check if any of the inputs are empty, disable the button if any of them is empty
    setButtonDisabled(!(inputAccountNumber && inputAccountName && inputEmail));
  };

  const isButtonDisabled = !(
    // selectedOption &&
    (isAccountNumber && isAccountName && isEmail)
  );


  useEffect(() => {
    setSellBank(selectedOption.label)
  },[]);


  return (
    <div>
       
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.1000', 'gray.800')}
      >
        <Stack
          spacing={8}
          mx={'auto'}
          maxW={'1000px'}
          w={'550px'}
          // py={12}
          px={6}
          mt={6}
        >
          <Stack align={'center'}>
            <Heading fontSize={'2xl'} textAlign={'center'}>
              Sell <mark style={{ fontSize: '22px' }}>{selectedCrypto}</mark>
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Supply your information below ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            mt={-8}
          >
            <Stack spacing={4}>
              <FormControl id="email" isRequired mb={5}>
                <FormLabel fontSize="sm" fontWeight="normal">
                  Select Bank
                </FormLabel>
                <Select 
                  options={options}
                  // value={selectedOption}
                  name="entry.2101826949"
                  onChange={handleBankListChange}
                  isSearchable={true}
                />
              </FormControl>
              <HStack mb={5}>
                <Box>
                  <FormControl
                    id="accountNumber"
                    isRequired
                    isInvalid={!isAccountNumberValid}
                  >
                    <FormLabel fontSize="sm" fontWeight="normal">
                      Account Number
                    </FormLabel>
                    <Input
                      type="number"
                      onChange={handleAccountNumberChange}
                      w={'210px'}
                      h={'38px'}
                      name="entry.1529550563"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="accountName" isRequired>
                    <FormLabel fontSize="sm" fontWeight="normal">
                      Account Name
                    </FormLabel>
                    <Input
                      type="text"
                      onChange={handleAccountNameChange}
                      w={'210px'}
                      h={'38px'}
                      name="entry.507028906"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack mb={4}>
                <Box>
                  <FormControl id="email" isRequired>
                    <FormLabel fontSize="sm" fontWeight="normal">
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      onChange={handleEmailChange}
                      w={'210px'}
                      h={'38px'}
                      name="entry.1648576192"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="phone">
                    <FormLabel>Phone</FormLabel>
                    <Input
                      type="phone"
                      onChange={event => setIsPhone(event.target.value)}
                      w={'210px'}
                      h={'38px'}
                      name="entry.1163651228"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={isButtonDisabled ? '#cccacb' : '#dd2f81'}
                  color={'white'}
                  borderRadius="5px"
                  h={'38px'}
                  cursor={isButtonDisabled ? 'not-allowed' : 'pointer'}
                  _hover={
                    !isButtonDisabled ? { bg: '#f0ead2', color: 'black' } : null
                  }
                  isDisabled={isButtonDisabled && !isAccountNumberValid}
                  styles={{ borderColor: '#dd2f81' }}
                  fontSize="2xl"
                  onClick={handleSellButtonClick}
                >
                  Trade
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}

// export default SellFormData;
