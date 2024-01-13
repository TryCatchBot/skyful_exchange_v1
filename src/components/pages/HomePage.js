import React, { useState, useEffect } from 'react';
import Footer from '../layout/home/Footer';
import Navbar from '../layout/home/Navbar';
import HeroAnnotation from '../layout/home/heroBanner/PlainHero';
import HeroWithImage from '../layout/home/heroBanner/HeroWithImage';
import HeroWithThreeJs from '../layout/home/heroBanner/HeroWithThreeJs';
import HowItWorks from '../layout/home/HowItWorks';
import TestimoniesOne from '../layout/home/testimonials/TestimoniesOne';
import WhyBullstand from '../layout/home/WhyBullstand';
import CallToAction from '../layout/home/CallToAction';
import PartnersMarquee from '../layout/home/PartnersMarquee';

const HomePage = () => {
  const [componentToShow, setComponentToShow] = useState(null);

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 0 && currentTime < 7) {
      setComponentToShow(<HeroWithThreeJs />);
    } else if (currentTime >= 7 && currentTime < 15) {
      setComponentToShow(<HeroAnnotation />);
    } else {
      setComponentToShow(<HeroWithImage />);
    }
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div>
      <Navbar />
      {componentToShow}
      <PartnersMarquee />
      <WhyBullstand />
      <HowItWorks />
      <TestimoniesOne />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
