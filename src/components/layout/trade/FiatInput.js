import React from 'react';
import Select from 'react-select';

const FiatInput = ({
  fiatAmount,
  onFiatChange,
  selectedFiat,
  onFiatSelectChange,
}) => {
  // console.log("fiatAmount in FiatInput", fiatAmount);

  const fiatOptions = [
    { value: 'naira', label: 'Naira' },
    // Add more fiat options as needed
  ];

  // Set "USD" as the default option
  const defaultFiatOption = fiatOptions.find(
    option => option.value === 'naira'
  );

  return (
    <div className="row currencyInput">
      <div className="col-md-6 numberContainer">
        <span>You Get</span>
        <input
          className="currencyInputField"
          placeholder="0.0"
          value={fiatAmount}
          onChange={onFiatChange}
          name="entry.1280889125"
        />
      </div>
      <div className="col-md-6 tokenContainer">
        <span className="tokenName">
          <Select
            options={fiatOptions}
            value={selectedFiat || defaultFiatOption} // Set the default option here
            onChange={onFiatSelectChange}
            isSearchable
            name="entry.750268491"
          />
        </span>
      </div>
    </div>
  );
};

export default FiatInput;
