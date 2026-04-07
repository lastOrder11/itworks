import React from 'react';
import BlackholeCanvas from './canvas/Blackhole'; // <-- ON IMPORTE LE TROU NOIR

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        
        {/* Le petit design avec le point et la ligne */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 sm:h-80 h-40 gold-gradient" />
        </div>

        {/* Ton texte d'introduction */}
        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Salut, je suis <span className="text-accent">Vannel</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            Développeur IA & Data. <br className="sm:block hidden" />
            Je construis des applications intelligentes de A à Z.
          </p>
        </div>
      </div>

      {/* LE CANVAS DU TROU NOIR (Il prendra tout l'écran en fond) */}
      <BlackholeCanvas />

    </section>
  );
};

export default Hero;
