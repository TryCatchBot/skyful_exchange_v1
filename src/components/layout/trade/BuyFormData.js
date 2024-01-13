import React, { useState, useEffect } from 'react';
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
  Tooltip,
} from '@chakra-ui/react';
import Select from 'react-select';
import { HiInformationCircle } from 'react-icons/hi';
import {
  isWalletAddressAtom,
  // isAccountNameAtom,
  isEmailAtom,
  isPhoneAtom,
  selectedCryptoAtom,
  buyNetworkAtom,
} from '../../../recoil/atoms/rateAtom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const BuyFormData = () => {
  const [selectNetwork, setSelectNetwork] = useState(buyNetworkAtom);
  const [isWalletAddress, setIsWalletAddress] =
    useRecoilState(isWalletAddressAtom);
  const [isEmail, setIsEmail] = useRecoilState(isEmailAtom);
  const [isPhone, setIsPhone] = useRecoilState(isPhoneAtom);
  const [isWalletValid, setIsWalletValid] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [selectedCrypto, setSelectedCrypto] =
    useRecoilState(selectedCryptoAtom);
  const [isFormActivated, setIsFormActivated] = useState(false);
  const [bscAddress, setBscAddress] = useRecoilState(isWalletAddressAtom);
  const [validAddress, setValidAddress] = useState('');
  const [invalidAddress, setInvalidAddress] = useState('');
  const [buyNetwork, setBuyNetwork] = useRecoilState(buyNetworkAtom);

  const navigate = useNavigate();
  const handleBuyButtonClick = () => {
    navigate('/trade/buy/payment');
  };

  const handlePhoneNumberChange = event => {
    const inputPhoneNumber = event.target.value;
    setIsPhone(inputPhoneNumber);
    setIsFormActivated(inputPhoneNumber.length >= 11);
  };

  const chain = ['Binance Smart Chain (BSC or bep20)'];

  const bankObjects = chain.map(bank => {
    return { key: bank, label: bank };
  });

  const handleTokenChange = selectedOption => {
    setSelectNetwork(selectedOption);
  };

  const handleAccountNameChange = event => {
    const inputAccountName = event.target.value;
    // setIsAccountName(inputAccountName);
    updateButtonState(isWalletAddress, inputAccountName, isEmail);
  };

  const handleEmailChange = event => {
    const inputEmail = event.target.value;
    setIsEmail(inputEmail);
    updateButtonState(bscAddress, isPhone, inputEmail);
  };

  const updateButtonState = (
    inputAccountNumber,
    inputAccountName,
    inputEmail
  ) => {
    // Check if any of the inputs are empty, disable the button if any of them is empty
    setButtonDisabled(!(inputAccountNumber && inputAccountName && inputEmail));
  };

  const isButtonDisabled = !(selectNetwork && bscAddress && isPhone && isEmail);

  useEffect(() => {
    if (bscAddress.length >= 40) {
      setValidAddress('Valid Address:', bscAddress);
      setIsWalletValid(true);
    } else {
      setInvalidAddress(
        'Invalid Address. Address should be at least 40 characters long.'
      );
    }

    setBuyNetwork(selectNetwork.label);
    setIsWalletAddress(bscAddress);
  }, [
    validAddress,
    invalidAddress,
    selectNetwork,
    buyNetwork,
    isWalletAddress,
    bscAddress,
  ]);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.1000', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'1000px'} w={'550px'} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>
            Buy <mark style={{ fontSize: '22px' }}>{selectedCrypto}</mark>
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
                {' '}
                <Tooltip
                  hasArrow
                  label="we currently send crypto to only bep20(bsc) network"
                  bg="red.600"
                  color="white"
                >
                  <Button color={'red'} fontSize={'10px'}>
                    Select Network <HiInformationCircle />
                  </Button>
                </Tooltip>
              </FormLabel>{' '}
              <Select
                options={bankObjects}
                name="entry.2101826949"
                value={selectNetwork}
                onChange={handleTokenChange}
                isSearchable
                styles={{
                  control: styles => ({ ...styles, textAlign: 'left' }),
                  menu: styles => ({ ...styles, textAlign: 'left' }),
                }}
              />
            </FormControl>

            <FormControl
              id="walletAddress"
              isRequired
              mb={4}
              isInvalid={isWalletValid}
            >
              <FormLabel fontSize="sm" fontWeight="normal">
                Wallet Address
              </FormLabel>
              <Input
                type="text"
                name="entry.1529550563"
                value={bscAddress}
                onChange={e => setBscAddress(e.target.value)}
                h={'38px'}
              />
            </FormControl>
            {/**Check if wallet is valid and display warning */}
            {/* <span>
              {!validAddress ? (
                ''
              ) : (
                <Button color={'red'}>{invalidAddress}</Button>
              )}
            </span> */}
            <HStack mb={4}>
              <Box>
                <FormControl id="email" isRequired>
                  <FormLabel fontSize="sm" fontWeight="normal">
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    name="entry.1648576192"
                    onChange={handleEmailChange}
                    w={'210px'}
                    h={'38px'}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="phone" isRequired>
                  <FormLabel fontSize="sm" fontWeight="normal">
                    Phone
                  </FormLabel>
                  <Input
                    type="phone"
                    name="entry.1163651228"
                    onChange={handlePhoneNumberChange}
                    w={'210px'}
                    h={'38px'}
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
                isDisabled={isButtonDisabled && !isWalletValid}
                styles={{ borderColor: '#dd2f81' }}
                fontSize="2xl"
                onClick={handleBuyButtonClick}
              >
                Trade
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default BuyFormData;
