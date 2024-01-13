// Install Chakra UI and React if not already installed
// npm install @chakra-ui/react react

import React from 'react';
import { Flex, Link, Image, Text } from '@chakra-ui/react';


const partnerLogos = [
  { name: 'Partner 1', logo: '../../../assets/images/partners/i-fitness-blac.svg', twitter: 'https://twitter.com/partner1' },
  { name: 'Partner 2', logo: '../../../assets/images/partners/Paga-logo-Only.png', twitter: 'https://twitter.com/partner2' },
  { name: 'Partner 2', logo: '../../../assets/images/partners/piggyvest.png', twitter: 'https://twitter.com/partner2' },
  { name: 'Partner 2', logo: '../../../assets/images/partners/rise.webp', twitter: 'https://twitter.com/partner2' },
  // Add more partners as needed
];

const Marquee = () => {
  return (
    <Flex overflowX="hidden" p={4} alignItems="center">
      {partnerLogos.map((partner, index) => (
        <Link key={index} href={partner.twitter} isExternal mx={4}>
          <img src={partner.logo} alt={partner.name} boxSize="100px" />
        </Link>
      ))}
      {/* {partnerLogos.map((partner, index) => (
        <Text key={index} mx={4} display="inline-block">
          {partner.name}
        </Text>
      ))} */}
    </Flex>
  );
};

export default Marquee;
