import React, { useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';


import dai from '../../../assets/images/dai.png';
import usdc from '../../../assets/images/usdc.png';
import usdt from '../../../assets/images/usdt.png';
import dai2 from '../../../assets/images/Dai_Logo.png';
import usdc2 from '../../../assets/images/Tether-USDT.webp';
import usdc3 from '../../../assets/images/USDC-Accpeted-here.png';
import usdc4 from '../../../assets/images/USDC-Circle.webp';
import usdt2 from '../../../assets/images/tetherbg.jpg';
import usdc5 from '../../../assets/images/usd-coin.jpg';
import usdt3 from '../../../assets/images/usdtt.png';
import usdt4 from '../../../assets/images/usdtt.webp';


import eth from '../../../assets/images/eth.png';
import eth2 from '../../../assets/images/eth2.png';
import btc from '../../../assets/images/btc.jpg';
import btc2 from '../../../assets/images/btc2.png';
import frax from '../../../assets/images/frax.png';
import fdusd from '../../../assets/images/fdusd.jpg';
import fdusd2 from '../../../assets/images/fdusd2.jpg';
import busd from '../../../assets/images/Binance-USD-BUSD.jpg';

export default function Box() {
  const [index, setIndex] = useState(0);

  const texture = [
    dai,
    usdc,
    usdt,
    dai2,
    usdc2,
    usdc3,
    usdc4,
    usdt2,
    usdc5,
    usdt3,
      usdt4,
      eth,
    eth2,  btc, btc2,  frax, fdusd, fdusd2, busd
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => (index === texture.length - 1 ? 0 : index + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const textureView = useLoader(TextureLoader, texture);
// const box1 = new THREE.BoxGeometry(3, 3, 3);
  return (
    <mesh rotation={[90, 0, 20]} >
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      {/**<meshLambertMaterial attach="material" color="blue" /> */}
      {/** <meshStandardMaterial map={colorFood} /> */}
      <meshStandardMaterial map={textureView[index]} />
    </mesh>
  );
}
