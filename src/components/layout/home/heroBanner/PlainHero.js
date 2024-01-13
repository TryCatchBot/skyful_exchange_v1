    import React, { useState, useEffect } from 'react';
    import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    } from '@chakra-ui/react';
    import { Link } from 'react-router-dom';

    const AnnotationHero = () => {
        const [isFiatToCrypto, setIsFiatToCrypto] = useState(false);
        const [forceRerender, setForceRerender] = useState(false);

        const handleTradeSwitch = () => {
            setIsFiatToCrypto(prev => !prev);
        };

        const getCurrentHour = () => {
            return new Date().getHours();
        };


        const texts = [
          <div>
            ✨ <strong>Instant Transactions, Always:</strong> Time is money, and
            we value both. Our platform ensures your transactions are executed
            promptly, without unnecessary delays.
          </div>,
          <div>
            ✨ <strong>No KYC, No Problem:</strong> Your privacy matters. Enjoy
            the freedom to trade without the hassle of extensive KYC procedures.
            We believe in putting you in control.
          </div>,
          <div>
            ✨ <strong>Bank Anywhere, Any Name:</strong> Break free from the
            norm. Unlike traditional P2P practices, send fiat to any bank
            account, whether it bears your name or not. Your flexibility, our
            priority.
          </div>,
          <div>
            ✨ <strong>Secure and Seamless:</strong> We prioritize both security
            and user experience. Enjoy the peace of mind that comes with secure
            transactions, coupled with a seamless trading interface.
          </div>,
        ];

         const getBannerText = () => {
           const currentHour = getCurrentHour();
           const index = Math.floor(currentHour / 6) % texts.length;
           return texts[index];
         };

        // const getBannerText = () => {
        //     const currentHour = getCurrentHour();
        //     if (currentHour >= 0 && currentHour < 6) {
        //         return (
        //             <div>
        //                 ✨ <strong>Instant Transactions, Always:</strong> Time is money, and
        //                 we value both. Our platform ensures your transactions are executed
        //                 promptly, without unnecessary delays.
        //             </div>
        //         );
        //     } else if (currentHour >= 6 && currentHour < 12) {
        //         return (
        //             <div>
        //                 ✨ <strong>No KYC, No Problem:</strong> Your privacy matters. Enjoy
        //                 the freedom to trade without the hassle of extensive KYC procedures.
        //                 We believe in putting you in control.
        //             </div>
        //         );
        //     } else if (currentHour >= 12 && currentHour < 18) {
        //         return (
        //             <div>
        //                 ✨ <strong>Bank Anywhere, Any Name:</strong> Break free from the norm.
        //                 Unlike traditional P2P practices, send fiat to any bank account,
        //                 whether it bears your name or not. Your flexibility, our priority.
        //             </div>
        //         );
        //     } else {
        //         return (
        //             <div>
        //                 ✨ <strong>Secure and Seamless:</strong> We prioritize both security
        //                 and user experience. Enjoy the peace of mind that comes with secure
        //                 transactions, coupled with a seamless trading interface.
        //             </div>
        //         );
        //     }
        // };

        useEffect(() => {
            const interval = setInterval(() => {
                handleTradeSwitch();
            }, 3000);

            const intervalTwo = setInterval(() => {
              // Force a re-render every one hour
              setForceRerender(prev => !prev);
            }, 3600000); 

            return () => clearInterval(interval, intervalTwo);
        }, []);

        return (
            <div>
                <Container maxW={'3xl'} mt={{ base: -10, md: -100 }} mb={-100}>
                    <Stack
                        as={Box}
                        textAlign={'center'}
                        spacing={{ base: 8, md: 14 }}
                        py={{ base: 20, md: 36 }}
                    >
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'110%'}
                            mb={-30}
                        >
                            <Text>Say Goodbye to Limits:</Text>
                            {isFiatToCrypto ? (
                                <div>
                                    Trade <span style={{ backgroundColor: '#FEC60126' }}>Fiat</span>{' '}
                                    for <span style={{ backgroundColor: '#FEC60126' }}>Crypto</span>
                                </div>
                            ) : (
                                <div>
                                    Trade{' '}
                                    <span style={{ backgroundColor: '#FEC60126' }}>Crypto</span> for{' '}
                                    <span style={{ backgroundColor: '#FEC60126' }}>Fiat</span>
                                </div>
                            )}{' '}
                            <Text as={'span'} color={'green.400'}>
                                Hassle-Free!
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} id="banner-rider-text">
                            {getBannerText()}
                        </Text>
                        <Stack
                            direction={'column'}
                            spacing={3}
                            align={'center'}
                            alignSelf={'center'}
                            position={'relative'}
                        >
                            <Link to={'/trade'}>
                                <Button
                                    colorScheme={'green'}
                                    w={{ base: 100, md: 200 }}
                                    bg={'green.400'}
                                    rounded={'full'}
                                    px={6}
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                        bg: '#151f21',
                                    }}
                                >
                                    Trade Now
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Container>
            </div>
        );
    };

    export default AnnotationHero;
    
