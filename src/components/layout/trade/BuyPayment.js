import React, { useState, useEffect } from 'react';
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
  HStack,
} from '@chakra-ui/react';
import { Widget } from '@uploadcare/react-widget';
import {
  fiatAmountAtom,
  cryptoAmountAtom,
  selectedCryptoAtom,
  selectedFiatAtom,
  transactionFeeAtom,
  isEmailAtom,
  isPhoneAtom,
  imageUrlAtom, buyNetworkAtom, isWalletAddressAtom, transactionRefAtom 
} from '../../../recoil/atoms/rateAtom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

export default function CompleteTradeBuy() {
  const [cryptoAmount, setCryptoAmount] = useRecoilState(cryptoAmountAtom);
  const [fiatAmount, setFiatAmount] = useRecoilState(fiatAmountAtom);
  const [selectedCrypto, setSelectedCrypto] =
    useRecoilState(selectedCryptoAtom);
  const [selectedFile, setSelectedFile] = useState(null);
  const [transactionRef, setTransactionRef] = useRecoilState(transactionRefAtom);
  const [imageUrl, setImageUrl] = useRecoilState(imageUrlAtom);
  const [transactionType, setTransactionType] = useState('Sell');
  const [selectedFiat, setSelectedFiat] = useRecoilState(selectedFiatAtom); //this is set to naira by default, the value is not currently gotten from the form
  const [isWalletAddress, setIsWalletAddress] = useRecoilState(isWalletAddressAtom );

  const [isEmail, setIsEmail] = useRecoilState(isEmailAtom);
  const [isPhone, setIsPhone] = useRecoilState(isPhoneAtom);
  const [transactionFee, setTransactionFee] =
    useRecoilState(transactionFeeAtom);
  const [buyNetwork, setBuyNetwork] = useRecoilState(buyNetworkAtom);

  const handleBuyFileChange = event => {
    console.log('File input changed');
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log('Uploaded File:', file);
  };

  const isSubmitDisabled = !imageUrl;

  console.log('fiatAmount in CompleteTradeBuy', fiatAmount);

  const navigate = useNavigate();

  const handleBuyButtonClick = () => {
    navigate('/trade/after-sales');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const buyFormId = '1FAIpQLSf7yvg6OhaDZVf7hliGm_0GOXNtXMXjOCG_Rr4fEHnQ6dG7RA'; 
    const formUrl = `https://docs.google.com/forms/d/e/${buyFormId}/formResponse`;

    const formData = new URLSearchParams({
      'entry.664913935': fiatAmount,
      'entry.1280889125': cryptoAmount,
      'entry.1280747724': transactionType,
      'entry.1837495548': selectedFiat,
      'entry.750268491': selectedCrypto,
      'entry.1785407891': transactionFee,
      "entry.2101826949": buyNetwork,
      'entry.1529550563': isWalletAddress,
      'entry.1648576192': isEmail,
      'entry.1163651228': isPhone,
      'entry.338968283': imageUrl, 
      'entry.250211576': transactionRef, 
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
        // handleBuyButtonClick();
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      handleBuyButtonClick();
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    const decimalPointOptions = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    const formattedFiatAmount = fiatAmount.toLocaleString(
      undefined,
      decimalPointOptions
    );
    setFiatAmount(formattedFiatAmount);
  }, [fiatAmount]);


  return (
    <Center py={6}>
     
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
            <Text fontSize={'3xl'}>₦</Text>
            <Text fontSize={'5xl'} fontWeight={800}>
              {fiatAmount}
            </Text>
            <Text color={'gray.500'}></Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <Stack>
            <Text
              color={'gray.500'}
              fontWeight="bold"
              //   align={"start"}
              mb={'-1px'}
            >
              Bank:{' '}
            </Text>
            <Button mb={'30px'} fontSize={'xl'}>
              Monie Point
            </Button>
          </Stack>

          <HStack spacing={120} mb={'15px'}>
            <Stack align="start">
              <Text color={'gray.500'} fontWeight="bold">
                Account Name:{' '}
              </Text>
              <Text mt={'-15px'}>Joshua Aningene</Text>
            </Stack>
            <Stack align="start">
              <Text color={'gray.500'} fontWeight="bold">
                Account Number:{' '}
              </Text>
              <Text mt={'-15px'}>01234567890</Text>
            </Stack>
          </HStack>

          
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
              name="entry.338968283"
              value={imageUrl}
              onChange={e => setImageUrl(imageUrl)}
            />
            {/* </p> */}
          </span>
          <FormControl id="transactionReference" mt={20} mb={18}>
            <FormLabel fontSize="sm" fontWeight="normal">
              {' '}
              Enter Transaction Reference(optional)
            </FormLabel>
            <Input
              type="text"
              name="entry.250211576"
              value={transactionRef}
              onChange={e => setTransactionRef(e.target.value)}
              h={'38px'}
            />
          </FormControl>

         
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'#dd2f81'}
              color={'white'}
              borderRadius="5px"
              h={'38px'}
              isDisabled={isSubmitDisabled}
              styles={{ borderColor: '#dd2f81' }}
              fontSize="lg"
              _hover={{ bg: '#dd2f81', color: 'white' }}
              onClick={handleSubmit}
            >
              I Have Made Payment
            </Button>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
