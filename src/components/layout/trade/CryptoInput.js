import React, { useState } from 'react';
import Select from 'react-select';
import { selectedCryptoAtom } from '../../../recoil/atoms/rateAtom';
import { useRecoilState } from 'recoil';

const CryptoInput = ({
  cryptoAmount,
  onCryptoChange,
  // selectedCrypto,
  onCryptoSelectChange,
}) => {
  const [selectedCrypto, setSelectedCrypto] =
    useRecoilState(selectedCryptoAtom);

  const handleTokenChange = selectedOption => {
    setSelectedCrypto(selectedOption.value);
    // console.log("Selected Token:", selectedOption.value);
  };

  const cryptoOptions = [
    { value: 'USDT', label: 'USDT' },
    { value: 'USDC', label: 'USDC' },
    { value: 'BUSD', label: 'BUSD' },
    { value: 'FRAX', label: 'FRAX' },
    { value: 'DAI', label: 'DAI' },
    { value: 'FDUSD', label: 'FDUSD' },
  ];

  // Set "Bitcoin" as the default option
  const defaultCryptoOption = cryptoOptions.find(
    option => option.value === 'usdt'
  );

  return (
    <div className="row currencyInput">
      <div className="col-md-6 numberContainer">
        <span>You Pay</span>
        <input
          className="currencyInputField"
          placeholder="0.0"
          value={cryptoAmount}
          onChange={onCryptoChange}
          name="entry.664913935"
        />
      </div>
      <div className="col-md-6 tokenContainer">
        <span className="tokenName">
          <Select
            options={cryptoOptions}
            // value={selectedCrypto || defaultCryptoOption} // Set the default option here
            value={{ value: selectedCrypto, label: selectedCrypto }}
            onChange={handleTokenChange}
            isSearchable
            name="entry.1837495548"
          />
        </span>
      </div>
    </div>
  );
};

export default CryptoInput;
