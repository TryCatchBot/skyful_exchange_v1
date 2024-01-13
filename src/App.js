// import React, { useState } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favicon from './favicon.ico';
import { Helmet } from 'react-helmet';
import HomePage from './components/pages/HomePage';
import SwapPage from './components/pages/SwapPage';
import SellFormDataPage from './components/pages/SellFormDataPage';
import BuyFormDataPage from './components/pages/BuyFormDataPage';
import SellPaymentPage from './components/pages/SellPaymentPage';
import BuyPaymentPage from './components/pages/BuyPaymentPage';
import AfterSalesContactPage from './components/pages/AfterSalesContactPage';
import SecurityQuestionPage from './components/pages/SecurityQuestionPage';
import ChangeRatePage from './components/pages/ChangeRatePage';
import ChangeBaseRatePage from './components/pages/ChangeBaseRatePage';
import ContactUsPage from './components/pages/ContactUsPage';


const theme = extendTheme({
  // Your custom theme configuration
});

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Helmet>
          <meta charset="utf-8" />
          <title>Skyful - Cryptocurrency at your fingertip...</title>
          <link rel="icon" href={Favicon} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Exchange your crypto direct to your bank, no registration or verification required || cryptocurrency || "
          />
          {/**<link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossorigin="anonymous"
          /> */}
        </Helmet>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/trade" element={<SwapPage />} />
          <Route path="/trade/sell" element={<SellFormDataPage />} />
          <Route path="/trade/buy" element={<BuyFormDataPage />} />
          <Route path="/trade/sell/payment" element={<SellPaymentPage />} />
          <Route path="/trade/buy/payment" element={<BuyPaymentPage />} />
          <Route
            path="/trade/after-sales"
            element={<AfterSalesContactPage />}
          />
          <Route path="/s3curity-qu3stion" element={<SecurityQuestionPage />} />
          <Route path="/chang3-bas3-rat3" element={<ChangeBaseRatePage />} />
          <Route path="/chang3-rat3" element={<ChangeRatePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
