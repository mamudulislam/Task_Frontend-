import React from 'react';
import Navbar from './Navbar';
import HeroContent from './HeroContent';
import StartStart from './StartStart';
import Rootedinscience from './Rootedinscience';
const OranicHero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/path-to-your-hero-image.jpg')` }}
      >
        <div className="absolute inset-0 bg-white" />
      </div>
      <Navbar />
      <HeroContent />
      <StartStart />
      <Rootedinscience/>
    </div>
  );
};

export default OranicHero;
