  import React, { useState, useEffect} from 'react';
  import {
    ChakraProvider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
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
import {
  useNavigate,
  useHistory,
} from 'react-router-dom';

  const ChangeRate = () => {
    const [useSameRate, setUseSameRate] = useState(false);
    const [granularRate, setGranularRate] = useState('');
    const [sellRate, setSellRate] = useRecoilState(sellRateAtom);
    const [genericRate, setGenericRate] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [mode, setMode] = useState(null);
    const [isUpdateRateModalOpen, setIsUpdateRateModalOpen] = useState(false);
    const [sellRate1To100, setSellRate1To100] = useState('');
    const [sellRate101To150, setSellRate101To150] = useState('');
    const [sellRate151To200, setSellRate151To200] = useState('');
    const [sellRate201To1000, setSellRate201To1000] = useState('');
    const [bulkPurchaseRate, setBulkPurchaseRate] = useState('');
    const [baseRate, setBaseRate] = useRecoilState(baseRateAtom);

    const handleModeChange = selectedMode => {
      setMode(selectedMode);
      setUseSameRate(false);
    };

    const handleAccordionUpdate = (accordion, field, value) => {
      switch (accordion) {
        case 'Sell rate for 1 - 100 usdt':
          setSellRate1To100(prevRates => ({ ...prevRates, [field]: value }));
          break;
        case 'Sell rate for 101 - 150 usdt':
          setSellRate101To150(prevRates => ({ ...prevRates, [field]: value }));
          break;
        case 'Sell rate for 151 - 200 usdt':
          setSellRate151To200(prevRates => ({ ...prevRates, [field]: value }));
          break;
        case 'Sell rate for 201 - 1000 usdt':
          setSellRate201To1000(prevRates => ({ ...prevRates, [field]: value }));
          break;
        case 'Bulk Purchase - 1000 - above':
          setBulkPurchaseRate(prevRates => ({ ...prevRates, [field]: value }));
          break;
        default:
          break;
      }
      setGranularRate(value);
      // setIsUpdateRateModalOpen(false);
    };

    const handleUseSameRateChange = e => {
      setGenericRate(e.target.value);
    };

    const handleSubmit = () => {
      // Handle form submission
      console.log('Form submitted! in handleSubmit');
      console.log('useSameRate', useSameRate);
      // Close the update rate modal
      setIsUpdateRateModalOpen(true);
      setSellRate(mode === 'Generic' ? genericRate : granularRate);
      setIsUpdateRateModalOpen(false);
    };

    const handleCloseModal = () => {
      setIsUpdateRateModalOpen(false);
    };

    const [accordionData, setAccordionData] = useState({
      'Sell rate for 1 - 100 usdt': {
        'Sell rate for 1-10 usdt': '',
        'Sell rate for 11-20 usdt': '',
        'Sell rate for 21-30 usdt': '',
        'Sell rate for 31-40 usdt': '',
        'Sell rate for 41-50 usdt': '',
        'Sell rate for 51-70 usdt': '',
        'Sell rate for 71-80 usdt': '',
        'Sell rate for 81-100 usdt': '',
      },
      'Sell rate for 101 - 150 usdt': {
        'Sell rate for 151 - 160 usdt': '',
        'Sell rate for 161 - 200 usdt': '',
      },
      'Sell rate for 151 - 200 usdt': { 'Sell rate for 151 - 200 usdt': '' },
      'Sell rate for 201 - 1000 usdt': {
        'Sell rate for 201 - 500 usdt': '',
        'Sell rate for 501 - 1000 usdt': '',
      },
      'Bulk Purchase - 1000 - above': { '1000 - above': '' },
    });

    // useEffect(() => {
    //   // console.log(
    //   //   'Bulk Purchase - 1000 - above:',
    //   //   bulkPurchaseRate['1000 - above']
    //   // );
    // }, [
    //   sellRate1To100,
    //   sellRate101To150,
    //   sellRate151To200,
    //   sellRate201To1000,
    //   bulkPurchaseRate,
    // ]);

   
    let history = useNavigate();

    useEffect(() => {
      const previousUrl = document.referrer;
      console.log(previousUrl);
    }, []);

    return (
      <ChakraProvider>
        <Flex direction="column" align="center" justify="center" height="100vh">
          <Heading
            fontSize="lg"
            mb={4}
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
            Change rate below, this is sellRate: {sellRate}
          </Heading>
          <span
            className="header-and-warning"
            style={{
              borderRadius: '10px',
              borderColor: 'white',
              boxShadow: '2px 0px 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '10px',
              position: 'fixed',
              top: '110px',
              zIndex: '100',
              // marginBottom: "200px",
            }}
          >
            <Text textAlign={'center'}>
              <strong>Note</strong>: This is a{' '}
              <strong style={{ backgroundColor: 'red' }}>dangerous area</strong>{' '}
              as any change made here will <br />
              affect the whole rate and can affect <mark>profit</mark> or{' '}
              <mark>loss</mark>.
            </Text>
          </span>

          <HStack
            spacing={4}
            mt={mode === 'Generic' ? 20 : 4}
            style={{ marginBottom: '20px' }}
          >
            <Button
              colorScheme="white"
              onClick={() => handleModeChange('Generic')}
              isDisabled={mode === 'Generic'}
              cursor={mode === 'Generic' ? 'not-allowed' : 'pointer'}
              bg={mode === 'Generic' ? 'gray.500' : 'teal'}
              _hover={mode === 'Generic' ? { bg: 'gray.500' } : null}
            >
              Generic Change
            </Button>
            <Button
              colorScheme="white"
              onClick={() => handleModeChange('Granular')}
              isDisabled={mode === 'Granular'}
              cursor={mode === 'Granular' ? 'not-allowed' : 'pointer'}
              bg={mode === 'Granular' ? 'gray.500' : 'teal'}
              _hover={mode === 'Granular' ? { bg: 'gray.500' } : null}
            >
              Granular Change
            </Button>
          </HStack>

          {mode === 'Generic' && (
            <Box mt={4}>
              <Text htmlFor="useSameRate">
                Use the same rate for every amount:
              </Text>
              <HStack spacing={4}>
                <Input
                  placeholder="Use the same rate for every amount"
                  type="number"
                  onChange={handleUseSameRateChange}
                />
              </HStack>
              <Button
                mt={2}
                mb={15}
                colorScheme="teal"
                onClick={handleSubmit}
                isDisabled={useSameRate || genericRate < baseRate}
              >
                Use the same rate everywhere
              </Button>
            </Box>
          )}

          {mode === 'Granular' && (
            <div>
              <Accordion
                allowToggle
                mt={4}
                w={400}
                alignContent="center"
                placement="bottom"
                motionPreset="scale"
                // className="custom-accordion"
                maxH="20px"
              >
                {Object.entries(accordionData).map(([accordion, rates]) => (
                  <AccordionItem key={accordion}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {accordion}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {Object.entries(rates).map(([field, value]) => (
                        <Box key={field}>
                          <HStack spacing={4}>
                            <Input
                              placeholder={field}
                              type="number"
                              // value={value}
                              onChange={e =>
                                handleAccordionUpdate(
                                  accordion,
                                  field,
                                  e.target.value
                                )
                              }
                            />
                            <Button
                              mt={2}
                              colorScheme="teal"
                              w={140}
                              // isDisabled={!granularRate || granularRate <= 0}
                              isDisabled={
                                useSameRate || granularRate < baseRate
                              }
                              cursor={
                                !granularRate || granularRate <= 0
                                  ? 'not-allowed'
                                  : 'pointer'
                              }
                              onClick={() => {
                                setIsUpdateRateModalOpen(true);
                                handleAccordionUpdate(accordion, field, value);
                              }}
                            >
                              Update Rate
                            </Button>
                          </HStack>
                        </Box>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Update Rate Modal */}
          <Modal
            isOpen={isUpdateRateModalOpen}
            onClose={handleCloseModal}
            style={{
              zIndex: 9999,
            }}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Rate Confirmation</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Are you sure you want to update rate from{' '}
                  <code style={{ fontSize: '20px' }}>{sellRate}</code> to{' '}
                  <code style={{ fontSize: '20px' }}>
                    {mode === 'Generic' ? genericRate : granularRate}
                  </code>
                  ? <br />
                  <br />
                  Type{' '}
                  <code style={{ backgroundColor: '#E5E4E2' }}>
                    "I WANT TO UPDATE RATE"
                  </code>{' '}
                  below for confirmation:
                </Text>
                <Input
                  placeholder="Type `I WANT TO UPDATE RATE` here"
                  mb={'15px'}
                  onChange={e =>
                    setConfirmationMessage('I WANT TO UPDATE RATE')
                  }
                />
                {confirmationMessage === 'I WANT TO UPDATE RATE' ? (
                  <Text>
                    <strong>Note</strong>: That if you click on{' '}
                    <span style={{ color: 'red' }}>Submit</span> button, price
                    will be changed to{' '}
                    <code style={{ fontSize: '20px' }}>
                      {mode === 'Generic' ? genericRate : granularRate}
                    </code>{' '}
                    globally. This could affect <mark>Profit</mark> or
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
                  onClick={handleSubmit}
                  isDisabled={confirmationMessage !== 'I WANT TO UPDATE RATE'}
                  cursor={
                    confirmationMessage === 'I WANT TO UPDATE RATE'
                      ? 'not-allowed'
                      : 'pointer'
                  }
                >
                  I Understand The Risk, Update Rate
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </ChakraProvider>
    );
  };

  export default ChangeRate;
