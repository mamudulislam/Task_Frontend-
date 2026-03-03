import React from 'react';
import Navbar from './Navbar';
import HeroContent from './HeroContent';
import StartStart from './StartStart';
import Rootedinscience from './Rootedinscience';
import Choosebycategory from './Choosebycategory';
import PopularProducts from './Popularproducts';
const OranicHero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <Navbar />
      <HeroContent />
      <StartStart />
      <Rootedinscience/>
      <Choosebycategory/>
      <PopularProducts/>
    </div>
  );
};

export default OranicHero;

