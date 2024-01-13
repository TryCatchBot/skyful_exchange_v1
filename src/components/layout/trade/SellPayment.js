import React, { useState } from 'react';
import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Tooltip,
} from '@chakra-ui/react';
import {
  fiatAmountAtom,
  cryptoAmountAtom,
  selectedCryptoAtom,
  transactionHashsAtom,
  isAccountNumberAtom,
  selectedBankAtom,
  isAccountNameAtom,
  selectedFiatAtom,
  transactionFeeAtom,
  isEmailAtom,
  isPhoneAtom,
  imageUrlAtom, sellBankAtom
} from '../../../recoil/atoms/rateAtom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Widget } from '@uploadcare/react-widget';
import { HiInformationCircle } from 'react-icons/hi';

export default function CompleteTradeSell() {
  const [cryptoAmount, setCryptoAmount] = useRecoilState(cryptoAmountAtom);
  const [fiatAmount, setFiatAmount] = useRecoilState(fiatAmountAtom);
  const [selectedCrypto, setSelectedCrypto] =
    useRecoilState(selectedCryptoAtom);
  const [selectedSellFile, setSelectedSellFile] = useState(null);
  const [transactionHash, setTransactionHash] =
    useRecoilState(transactionHashsAtom);
  const [transactionType, setTransactionType] = useState('Sell');
  const [selectedFiat, setSelectedFiat] = useRecoilState(selectedFiatAtom); //this is set to naira by default, the value is not currently gotten from the form
  const [selectedBank, setSelectedBank] = useRecoilState(selectedBankAtom);
  const [isAccountName, setIsAccountName] = useRecoilState(isAccountNameAtom);
  const [isAccountNumber, setIsAccountNumber] =
    useRecoilState(isAccountNumberAtom);
  const [isEmail, setIsEmail] = useRecoilState(isEmailAtom);
  const [isPhone, setIsPhone] = useRecoilState(isPhoneAtom);
  const [transactionFee, setTransactionFee] =
    useRecoilState(transactionFeeAtom);
  const [imageUrl, setImageUrl] = useRecoilState(imageUrlAtom);
  const [sellBank, setSellBank] = useRecoilState(sellBankAtom);

  const handleSellFileChange = event => {
    console.log('File input changed');
    const file = event.target.files[0];
    setSelectedSellFile(file);
    console.log('Uploaded File:', file);
  };

  
  // console.log(`User selectBank in CompleteTradeSell: ${selectedBank}`);
  // console.log(`User imageUrl in CompleteTradeSell: ${imageUrl}`);

  const sellWallet = '0x58e822db8a29859727522d3e0fed2dcad680105f';

  const navigate = useNavigate();

  

 

  const handleSubmit = async e => {
    e.preventDefault();

    const id = '1FAIpQLSd4tZzlaf-ywV9MSZDqV0cPyhmEeX3aJbsGSVjLpF_p8kSF5g'; 
    const formUrl = `https://docs.google.com/forms/d/e/${id}/formResponse`;

    const formData = new URLSearchParams({
      'entry.664913935': cryptoAmount,
      'entry.1280889125': fiatAmount,
      'entry.1837495548': selectedCrypto,
      'entry.750268491': selectedFiat,
      'entry.1280747724': transactionType,
      'entry.1785407891': transactionFee,
      "entry.2101826949": sellBank,
      'entry.1529550563': isAccountNumber,
      'entry.507028906': isAccountName,
      'entry.1648576192': isEmail,
      'entry.1163651228': isPhone,
      'entry.338968283': imageUrl, // FILE
      'entry.250211576': transactionHash,
    });

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        // handleSellButtonClick();
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      handleSellButtonClick();
      console.error('Error submitting form:', error);
    }
  };

  const isSubmitDisabled = !selectedSellFile;



  const handleSellButtonClick = () => {
    navigate('/trade/after-sales');
  };

  return (
    <Center py={6} id="myForm">

      {/* <div>
        <p>Transaction Type: <i>{transactionType}</i></p>
        <p>Crypto Amount: <i>{cryptoAmount}</i></p>
        <p>Crypto Token: <i>{selectedCrypto}</i></p>
        <p>Fiat Amount: <i>{fiatAmount}</i></p>
        <p>Fiat Currency: <i>{"Naira"}</i></p>
        <p>BSC Fee: <i>{transactionFee}</i></p>
        <p>Selected Bank: <i>{sellBank}</i></p>
        <p>Account Number: <i>{isAccountNumber}</i></p>
        <p>Bank Account Name: <i>{isAccountName}</i></p>
        <p>Email: <i>{isEmail}</i></p>
        <p>Phone: <i>{isPhone}</i></p>
        <p>File Address: <i>{imageUrl}</i></p>
        <p>Transaction hash: <i>{transactionHash}</i></p>
      </div> */}
      <Box
        maxW={'430px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('#f9deeb', '#f9deeb')}
            p={2}
            px={3}
            color={'#dd2f81'}
            rounded={'full'}
          >
            Transfer
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>$</Text>
            <Text fontSize={'5xl'} fontWeight={800}>
              {cryptoAmount}
            </Text>
            <Text color={'gray.500'}>{selectedCrypto}</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <Stack align="start">
            <Tooltip
              hasArrow
              label="we currently send crypto to only bep20(bsc) network"
              bg="red.600"
              color="white"
            >
              <Button color={'gray.500'} fontWeight="bold" mb={'3'}>
                Wallet Address <HiInformationCircle color={'red'} />
              </Button>
            </Tooltip>
            <Text mt={'-15px'} mb={'8'}>
              {sellWallet}
            </Text>
          </Stack>

         
          <span>
            {/* <p> */}
            <label htmlFor="file" className="upload-text">
              Upload Proof Of Transaction
            </label>{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <Widget
                publicKey="980694f938fea0a32eb5"
                id="file"
                onFileSelect={file => {
                  if (file) {
                    file.done(info => {
                      setImageUrl(info.cdnUrl);
                    });
                  }
                }}
              />
            </span>
            <Input
              type="hidden"
              role="uploadcare-uploader"
              data-public-key="980694f938fea0a32eb5"
              data-multiple="true"
              data-tabs="file camera url gdrive"
              id="image-url"
              name="paymentImg"
              value={imageUrl}
              onChange={e => setImageUrl(imageUrl)}
            />
          </span>

          <FormControl id="transactionHash" mt={10} mb={10}>
            <FormLabel fontSize="sm" fontWeight="normal">
              {' '}
              Enter Transaction Hash(optional)
            </FormLabel>
            <Input
              type="text"
              value={transactionHash}
              onChange={e => setTransactionHash(e.target.value)}
              h={'38px'}
              name="entry.250211576"
            />
          </FormControl>

          <Stack spacing={10}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'#dd2f81'}
              color={'white'}
              borderRadius="5px"
              h={'38px'}
              // isDisabled={isSubmitDisabled}
              styles={{ borderColor: '#dd2f81' }}
              fontSize="xl"
              _hover={{ bg: '#dd2f81', color: 'white' }}
              onClick={handleSubmit }
            >
              I Have Made Payment 
            </Button>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
