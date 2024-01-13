import { atom } from "recoil";


export const currencyListAtom = atom({
    key: "currencyListState",
    default: [
        { value: "Usdt", label: "USDT" },
        { value: "Usdc", label: "USDC" },
        { value: "Busd", label: "BUSD" },
        { value: "Frax", label: "FRAX" },
        { value: "Dai", label: "DAI" },
    ]
});


export const selectedOptionAtom = atom({
  key: "selectedOptionState",
  default: [],
});


export const selectedFiatAtom = atom({
  key: "selectedFiatStateOne",
  default: [],
});


