import React, { useState, useEffect } from 'react';
import '../../styles/swap.css';
import SwapFormAggregation from '../trade/SwapFormAggregation';
import { useNavigate } from 'react-router-dom';
// import { ArrowDownUp } from "react-bootstrap-icons";
import { useRecoilState } from 'recoil';
import { isFiatOnTopAtom } from '../../../recoil/atoms/randomAtom';
import TradeNavbar from './SwapNavbar';
import { Button, Tooltip } from '@chakra-ui/react';
import {
  cryptoAmountAtom,
  fiatAmountAtom,
  sellRateAtom,
  buyRateAtom,
  selectedCryptoAtom,
  sellBankAtom,
  transactionFeeAtom, selectedBankAtom,
} from '../../../recoil/atoms/rateAtom';

function Swap() {

  const [inputAmount, setInputAmount] = useState(0);
  const [sellRate, setSellRate] = useRecoilState(sellRateAtom);
  const [buyRate, setBuyRate] = useRecoilState(buyRateAtom);
  const [totalSell, setTotalSell] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(sellRate || buyRate );
  const [transactionFee, setTransactionFee] =
    useRecoilState(transactionFeeAtom);
  const [isFiatOnTop, setIsFiatOnTop] = useRecoilState(isFiatOnTopAtom);
  const [cryptoAmount, setCryptoAmount] = useRecoilState(cryptoAmountAtom);
  const [fiatAmount, setFiatAmount] = useRecoilState(fiatAmountAtom);
  const [transactionType, setTransactionType] = useState('Sell');
  // const [selectedCrypto, setSelectedCrypto] =
  //   useRecoilState(selectedCryptoAtom); 
    //  const [sellBank, setSellBank] =
    // useRecoilState(sellBankAtom);
    const [selectBank, setSelectBank] = useRecoilState(selectedBankAtom);
    const [isBuyButtonDisabled, setIsBuyButtonDisabled] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (transactionType === 'Sell') {
      navigate('/trade/sell');
    } else if (transactionType === 'Buy') {
      navigate('/trade/buy');
    }
  };



  const handleTransactionType = typeOfTrade => {
    setTransactionType(typeOfTrade);
  };


  const handleBuyButtonClick = () => {
    // Add your logic here
    // setIsFiatOnTop(false);
    // handleTransactionType('Buy');
    // setIsBuyButtonDisabled(true);
  };



  useEffect(() => {
    let rateOfSelectedTransactionType;

    // if (transactionType === 'Sell') {
    //   rateOfSelectedTransactionType = sellRate;
      // rateOfSelectedTransactionType * 
      // console.log("selectedRate ", selectedRate )
    // } else if (transactionType === 'Buy') {
    //   rateOfSelectedTransactionType = buyRate;
      // console.log("selectedRate ", selectedRate )
    // }

    // const total = inputAmount * selectedRate;
    // const formattedTotal = total.toLocaleString();
    // setTotalSell(formattedTotal);

    handleTransactionType(transactionType);

    // if (transactionType === 'Sell') {
    //   setExchangeRate(sellRate);
    //   console.log("setExchangeRate(sellRate)",exchangeRate)
    // } else if (transactionType === 'Buy') {
    //   setExchangeRate(buyRate);
    //   console.log("setExchangeRate(buyRate)",exchangeRate)
    // }
  }, [inputAmount, sellRate, buyRate, transactionType]);


  return (
    <div className="App">
      {/* <p>sellRate is: {sellRate}</p>
      <p>buyRate is: {buyRate}</p> */}
      <div className="appNav">
        <div className="toggle-button-container">
          <Button
            className={`toggle-button ${isFiatOnTop ? 'active' : ''}`}
            name="entry.1280747724"
            onClick={() => {
              setIsFiatOnTop(true);
              handleTransactionType('Sell');
            }}
          >
            Sell
          </Button>
          <Tooltip label="Coming Soon" hasArrow>
          <Button
            className={`toggle-button ${!isFiatOnTop ? 'active' : ''}`}
            name="entry.1280747724" 
            onClick={handleBuyButtonClick}
            disabled={isBuyButtonDisabled}
          >
            Buy
          </Button>
          </Tooltip>
        </div>
      </div>

      <div className="appBody">
        <div className="swapContainer">
          <div className="swapHeader">
            <span className="swapText">Trade</span>
          </div>
          <div className="swapBody">
            <SwapFormAggregation />
          </div>

          <div className="ratioContainer" name="entry.1785407891">
            Binance Smart Chain Fee : {transactionFee} usdt
          </div>

          <div className="swapButtonContainer">
            {cryptoAmount <= 0 || isNaN(fiatAmount) || fiatAmount <= 0 ? (
              <button className="tradeButton-disabled" disabled>
                Trade
              </button>
            ) : (
              <button className="tradeButton" onClick={handleButtonClick}>
                Trade Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
