import React from 'react';
import { motion } from 'framer-motion';
import StarsCanvas from './canvas/Stars'; // <-- Spectacle d'étoiles

// Définition des hobbies et de leurs animations spécifiques
const hobbies = [
  {
    name: "Faire des 3 points au basket",
    description: "L'animé kuroko no basket m'a fait découvrir le basket sous un autre angle, j'ai particulièrement adoré les shoot, depuis, j'entraine mon tir à 3 points pour devenir de plus en plus précis.",
    icon: (
      <motion.div
        className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent"
        animate={{ scale: [1, 1.2, 1], borderColor: ["#f59e0b", "#fff", "#f59e0b"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}>🏀</motion.span>
      </motion.div>
    ),
  },
  {
    name: "Tester des recettes de cuisine",
    description: "Depuis que j'ai 8 ans, je cuisine, j'adore tester et créer mes propres recettes de cuisine, mais ce que j'apprécie le plus, c'est de voir les gens savourer mes créations.",
    icon: (
      <motion.div
        className="text-6xl"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        👨‍🍳
      </motion.div>
    ),
  },
  {
    name: "Regarder des animés",
    description: "Les animés sont littéralement dans mon ADN, loin de n'être qu'une source de loisir, un bon animé peut changer votre manière de penser et de voir le monde. Essayez My Hero Acadomia.",
    icon: (
      <motion.div
        className="text-6xl"
        animate={{ opacity: [1, 0.5, 1], scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        📺
      </motion.div>
    ),
  },
  {
    name: "Regarder les étoiles",
    description: "Depuis petit, j'ai toujours adoré regarder les étoiles, je me suis vite passionné pour les trous noirs et les étoiles à neutrons, qui continuent à stimuler mon imagination.",
    icon: (
      <motion.div
        className="relative text-6xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <span className="relative z-10">🌌</span>
        <motion.div
          className="absolute inset-0 bg-accent/30 rounded-full blur-xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    ),
  },
];

const HobbyCard = ({ index, name, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    className="bg-tertiary p-8 rounded-2xl border border-[#1e293b] shadow-card flex flex-col items-center text-center gap-6 sm:w-[360px] w-full"
  >
    {icon}
    <div>
      <h3 className="text-white font-bold text-[22px]">{name}</h3>
      <p className="mt-2 text-secondary text-[15px] leading-[24px]">{description}</p>
    </div>
  </motion.div>
);

const Hobby = () => {
  return (
    <section id="hobby" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 mt-20 border-t border-[#1e293b]">
      {/* Spectacle d'étoiles en fond */}
      {/* <StarsCanvas /> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Passions
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Ce qui me drive.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {hobbies.map((hobby, index) => (
          <HobbyCard key={hobby.name} index={index} {...hobby} />
        ))}
      </div>
    </section>
  );
};

export default Hobby;