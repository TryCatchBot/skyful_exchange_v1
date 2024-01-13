import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  HStack,
  Flex,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { sellRateAtom, baseRateAtom } from '../../../recoil/atoms/rateAtom';
import { useRecoilState } from 'recoil';

const ChangeRate = () => {
  const [sellRate, setSellRate] = useRecoilState(sellRateAtom);
  const [baseRate, setBaseRate] = useRecoilState(baseRateAtom);
  const [isUpdateRateModalOpen, setIsUpdateRateModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChangeBaseRate = e => {
    setBaseRate(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted! in handleSubmit');
    setIsUpdateRateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsUpdateRateModalOpen(false);
  };

  const handleConfirmUpdate = () => {
    // Logic to update the rate
    console.log('Rate updated!');
    setIsUpdateRateModalOpen(false);
  };

  useEffect(() => {
    // Additional logic if needed
  }, []);

  return (
    <ChakraProvider>
      <Flex direction="column" align="center" justify="center" height="100vh">
        <Heading
          fontSize="lg"
          mt={10}
          textAlign="center"
          style={{
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            backgroundColor: 'white',
            padding: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Text mt={2} textAlign={'center'} color={'gray.500'}>
            Hey Admin! ✌️
          </Text>
          <Text> Change Base Rate Here</Text>
        </Heading>
        <span
          style={{
            borderRadius: '10px',
            borderColor: 'white',
            boxShadow: '2px 0px 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '10px',
            position: 'fixed',
            top: '180px',
            zIndex: '100',
          }}
        >
          <Text textAlign={'center'}>
            <strong>Note</strong>: This is a{' '}
            <mark style={{ color: 'red' }}>dangerous area</mark> as any change
            made here will <br />
            affect the whole rate and can affect <mark>profit</mark> or{' '}
            <mark>loss</mark>.
          </Text>
        </span>

        <Box mt={4}>
          <Text htmlFor="baseRate" mt={60} mb={0}>
            Change Base Rate: <mark>{baseRate}</mark>
          </Text>
          <HStack spacing={4}>
            <Input
              placeholder="Change Base Rate"
              type="number"
              onChange={handleChangeBaseRate}
            />
          </HStack>
          <div>
            {baseRate >= sellRate && (
              <Text mt={2} textAlign={'center'} color={'red.500'}>
                Base Rate <strong>MUST</strong> be less than current Rate of{' '}
                <strong>{sellRate}</strong> 😢
              </Text>
            )}
          </div>
          <Button
            mt={15}
            mb={15}
            // w={230}
            w={baseRate >= sellRate ? "100%" : 230}
            colorScheme="teal"
            onClick={handleSubmit}
            isDisabled={baseRate === '' || parseFloat(baseRate) >= sellRate}
          >
            Change Base Rate
          </Button>
        </Box>

        <Modal
          isOpen={isUpdateRateModalOpen}
          onClose={handleCloseModal}
          style={{
            zIndex: 9999,
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Update <mark>Base Rate</mark> Confirmation
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Are you sure you want to <mark>update base rate</mark> to{' '}
                <code style={{ fontSize: '20px' }}>{baseRate}</code>
                ? <br />
                <br />
                Type{' '}
                <code style={{ backgroundColor: '#E5E4E2' }}>
                  "I WANT TO UPDATE BASE RATE"
                </code>{' '}
                below for confirmation:
              </Text>
              <Input
                placeholder="Type `I WANT TO UPDATE RATE` here"
                mb={'15px'}
                onChange={e =>
                  setConfirmationMessage('I WANT TO UPDATE BASE RATE')
                }
              />
              {confirmationMessage === 'I WANT TO UPDATE BASE RATE' ? (
                <Text>
                  <strong>Note</strong>: That if you click on{' '}
                  <span style={{ color: 'red' }}>Submit</span> button, base rate
                  will be changed to{' '}
                  <code style={{ fontSize: '20px' }}>{baseRate}</code> this will
                  affect rate which in turn could affect <mark>Profit</mark> or
                  <mark>loss</mark>
                </Text>
              ) : (
                ''
              )}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button
                colorScheme="teal"
                onClick={handleConfirmUpdate}
                isDisabled={
                  confirmationMessage !== 'I WANT TO UPDATE BASE RATE' ||
                  confirmationMessage === ''
                }
                cursor={
                  confirmationMessage === 'I WANT TO UPDATE BASE RATE'
                    ? 'not-allowed'
                    : 'pointer'
                }
              >
                I Understand The Risk, Update Base Rate
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default ChangeRate;
