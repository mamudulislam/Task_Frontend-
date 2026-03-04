import React from 'react';
import Navbar from './Navbar';
import HeroContent from './HeroContent';
import StartStart from './StartStart';
import Rootedinscience from './Rootedinscience';
import Choosebycategory from './Choosebycategory';
import PopularProducts from './Popularproducts';
import Naturalmakeup from './Naturalmakeup';
import Customerreviews from './Customerreviews';
import Afterbybefore from './Afterbybefore';
import FAQ from './FAQ';
import Ourstories from './Ourstories';
import Expertskincare from './Expertskincare';
import Footer from './Footer';
const OranicHero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <Navbar />
      <HeroContent />
      <StartStart />
      <Rootedinscience/>
      <Choosebycategory/>
      <PopularProducts/>
      <Naturalmakeup/>
      <Customerreviews/>
      <Afterbybefore/>
      <FAQ/>
      <Ourstories/>
      <Expertskincare/>
      <Footer/>
    </div>
  );
};

export default OranicHero;

