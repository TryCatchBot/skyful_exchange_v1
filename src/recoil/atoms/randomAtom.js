import { atom } from "recoil";

export const isFiatOnTopAtom = atom({
  key: "isFiatOnTopState",
  default: true,
});

export const buyRateAtom = atom({
  key: "buyRateState",
  default: 1100,
});
