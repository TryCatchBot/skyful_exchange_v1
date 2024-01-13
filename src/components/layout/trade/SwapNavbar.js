import React, { useState, useEffect } from 'react';
import '../../styles/tradeNavbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
// import useAnalyticsEventTracker from '../../../assets/useAnalyticsEventTracker';

export default function TradeNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const buyRate = 1072.3;
  const sellRate = 1041.43;

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

//   const gaEventTracker = useAnalyticsEventTracker('Navbar');

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.addEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 600) && (
        <ul className="list">
          <li className="items">
            <span id="trade-logo">
              <Link to="/">
                {/* <Image
                  cloudName="pastorcoder"
                  publicId="BullStand/bullstand-logo-.svg"
                /> */}
              </Link>
            </span>
            {/**<span className="usdt">USDT</span>&nbsp;:&nbsp;&nbsp;
            <span className="buy-usdt">Buy - ₦‎{buyRate}</span> | &nbsp;
            <span className="sell-usdt">Sell - ₦‎{sellRate}</span> */}
          </li>
          {/* <li className="items"> */}

          {/* <span className="btc">BTC&nbsp;:&nbsp;&nbsp;</span>
            <span className="buy-btc">Buy - ₦‎-- </span> |{" "}
            <span className="sell-btc">Sell - ₦‎--&nbsp;&nbsp;</span> */}
          {/* </li> */}
          {/**  <li className="items">
            <Link to="/buy-cryptocurrency">
            <button className="buy-crypto-btn" onClick={()=>gaEventTracker('Buy')}>Buy</button>
            </Link>
          </li>
          <li className="items">
            <Link to="/sell-cryptocurrency">
            <button className="sell-crypto-btn" onClick={()=>gaEventTracker('Sell')}>Sell</button>
            </Link>
          </li> */}
        </ul>
      )}

      {/* <MenuIcon onClick={toggleNav} className="menu" /> */}
      <span onClick={toggleNav} className="menu">
        <MenuIcon />
      </span>
    </nav>
  );
}
