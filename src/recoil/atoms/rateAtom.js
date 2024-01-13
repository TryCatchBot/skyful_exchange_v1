import { atom } from "recoil";
// import Banks from '../../assets/Banks';


// const options = Banks();







export const selectedBankAtom = atom({
  key: "selectedBankState",
  default: "",
});



export const sellBankAtom = atom({
  key: "sellBankState",
  default: "",
});


export const buyNetworkAtom = atom({
  key: "buyNetworkState",
  default: "",
});



export const baseRateAtom = atom({
  key: "baseRateState",
  default: 1000,
});


export const sellRateAtom = atom({
  key: "sellRateState",
  default: 1500,
});


export const buyRateAtom = atom({
  key: "buyRateState2",
  default: 1200,
});


export const cryptoAmountAtom = atom({
  key: "cryptoAmountState",
  default: "",
});


export const fiatAmountAtom = atom({
  key: "fiatAmountState",
  default: "",
});

// export const transactionTypeAtom = atom({
//   key: "transactionTypeState",
//   default: "Buy",
// });


export const selectedCryptoAtom = atom({
  key: "selectedCryptoState",
  default: "USDT",
});


export const selectedFiatAtom = atom({
  key: "selectedFiatState",
  default: "Naira",
});






export const isAccountNumberAtom = atom({
  key: "isAccountNumberState",
  default: "",
});


export const isAccountNameAtom = atom({
  key: "isAccountNameState",
  default: "",
});


export const isEmailAtom = atom({
  key: "isEmailState",
  default: "",
});


export const isPhoneAtom = atom({
  key: "isPhoneState",
  default: "",
});


export const selectNetworkAtom = atom({
  key: "selectNetworkState",
  default: "",
});


export const isWalletAddressAtom = atom({
  key: "isWalletAddressState",
  default: "",
});


export const selectedSellFilesAtom = atom({
  key: "selectedSellFileState",
  default: null,
});


export const transactionHashsAtom = atom({
  key: "transactionHashState",
  default: "",
});


export const transactionRefAtom = atom({
  key: "transactionRefState",
  default: "",
});


export const transactionFeeAtom = atom({
  key: "transactionFeeState",
  default: 1,
});



export const imageUrlAtom = atom({
  key: "imageUrlState",
  default: "",
});
