import React, { useState } from 'react';
import CryptoInput from './CryptoInput';
import FiatInput from './FiatInput';
// import { ArrowDownUp } from 'react-bootstrap-icons';
import { useRecoilState } from 'recoil';
import { isFiatOnTopAtom } from '../../../recoil/atoms/randomAtom';
import {
  cryptoAmountAtom,
  fiatAmountAtom,
  sellRateAtom,
} from '../../../recoil/atoms/rateAtom';
import { useNavigate } from 'react-router-dom';

const SwapFormAggregation = () => {
  const [cryptoAmount, setCryptoAmount] = useRecoilState(cryptoAmountAtom);
  const [fiatAmount, setFiatAmount] = useRecoilState(fiatAmountAtom);
  const [sellRate, setSellRate] = useRecoilState(sellRateAtom);
  const [showFiatEquivalent, setShowFiatEquivalent] = useState(true);
  const exchangeRate = sellRate;
  const transactionFee = 1; // Transaction fee: 1 Crypto
  const [isFiatOnTop, setIsFiatOnTop] = useRecoilState(isFiatOnTopAtom);
  const [transactionType, setTransactionType] = useState('Sell');

  const handleTransactionType = typeOfTrade => {
    setTransactionType(typeOfTrade);
  };

  // const [isFiatOnTop, setIsFiatOnTop] = useState(true);
  const navigate = useNavigate();

  const handleToggleInputs = () => {
    setIsFiatOnTop(prevIsFiatOnTop => !prevIsFiatOnTop);

    // Navigate the user based on the updated isFiatOnTop state
    if (isFiatOnTop) {
      // navigate("/trade/buy");
      console.log('this is up,', transactionType);
      setIsFiatOnTop(false);
      handleTransactionType('Buy');
    } else {
      // navigate("/trade/sell");
      console.log('this is down,', transactionType);
      setIsFiatOnTop(true);
      handleTransactionType('Sell');
    }
  };

  // const handleToggleInputs = () => {
  //   setIsFiatOnTop((prevIsFiatOnTop) => !prevIsFiatOnTop);
  // };

  const handleCryptoChange = event => {
    const amount = event.target.value;
    setCryptoAmount(amount);
    const cryptoAfterFee = Math.max(amount - transactionFee, 0); // Deduct transaction fee
    const equivalentFiat = cryptoAfterFee * exchangeRate;
    setFiatAmount(equivalentFiat);
  };

  const handleFiatChange = event => {
    setFiatAmount(event.target.value);
    const equivalentCrypto = event.target.value / exchangeRate;
    // setCryptoAmount(equivalentCrypto);
  };

  // const handleToggleEquivalent = () => {
  //   setShowFiatEquivalent(!showFiatEquivalent);
  // };

  

  return (
    <div className="exchange-form-container">
      <div className={`input-container ${isFiatOnTop ? 'top' : 'bottom'}`}>
        {isFiatOnTop ? (
          <div>
            <CryptoInput
              cryptoAmount={cryptoAmount}
              onCryptoChange={handleCryptoChange}
            />
            <FiatInput
              fiatAmount={fiatAmount}
              onFiatChange={handleFiatChange}
            />
          </div>
        ) : (
          <div>
            <FiatInput
              fiatAmount={fiatAmount}
              onFiatChange={handleFiatChange}
            />
            <CryptoInput
              cryptoAmount={cryptoAmount}
              onCryptoChange={handleCryptoChange}
            />
          </div>
        )}
      </div>
      {/** <button onClick={handleToggleInputs} className="updown-button">
        <ArrowDownUp size={20} />
      </button> */}
    </div>
  );
};

export default SwapFormAggregation;
