import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

const workflow = [
  { 
    step: "1", 
    title: "Cadrage & Enjeux", 
    icon: (
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        🎯
      </motion.div>
    ) 
  },
  { 
    step: "2", 
    title: "Modélisation IA", 
    icon: (
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        🧠
      </motion.div>
    ) 
  },
  { 
    step: "3", 
    title: "Ingénierie Backend", 
    icon: (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
        ⚙️
      </motion.div>
    ) 
  },
  { 
    step: "4", 
    title: "Déploiement MLOps", 
    icon: (
      <motion.div animate={{ y: [0, -5, 0], x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        🚀
      </motion.div>
    ) 
  },
];

const WorkflowArrow = ({ index }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
    className="flex items-center justify-center text-accent/50 h-auto"
  >
    {/* Flèche horizontale rétrécie (w-8 au lieu de w-16) */}
    <motion.svg 
      className="md:flex hidden w-8 lg:w-12 h-10"
      viewBox="0 0 100 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{ x: [0, 5, 0] }} 
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M0 10 H80 M80 10 L70 0 M80 10 L70 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </motion.svg>

    {/* Flèche verticale pour mobile */}
    <motion.svg 
      className="md:hidden flex w-10 h-16"
      viewBox="0 0 20 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M10 0 V80 M10 80 L0 70 M10 80 L20 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </motion.svg>
  </motion.div>
);

const WorkflowCard = ({ index, step, title, icon }) => (
  // Tailles ajustées pour PC (md:w-[200px] lg:w-[220px])
  <Tilt className="w-full xs:w-[250px] md:w-[190px] lg:w-[220px]">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full gold-gradient p-[1px] rounded-[20px] shadow-card relative h-full"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px] py-6 px-4 min-h-[220px] h-full flex flex-col justify-center items-center relative overflow-hidden"
      >
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full border border-accent flex items-center justify-center text-accent font-bold text-sm bg-primary/50">
          {step}
        </div>
        <div className="text-5xl mb-4 mt-4">
          {icon}
        </div>
        <h3 className="text-white text-[16px] lg:text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section id="about" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 mt-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          
        </p>
        <h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[28px] leading-tight">
          Salut, je suis Vannel. Étudiant ingénieur, je construis des application d'Intelligence Artificielle de A à Z<br /><br />
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p className="mb-6 border-l-4 border-accent pl-4 italic">
          
          Salut, je suis Vannel, un étudiant ingénieur.
         <br /><br />  A travers ce portfolio, vous allez découvrir ce que je suis capable d'accomplir. Le notebook ne suffit pas ; je suis obsédé par l'impact business et le cycle 'End-to-End'.
         <br /><br />  Je construis des produits tangibles et déployés, résolvant de réels problèmes d'ingénierie. Mon parcourt m'a forgé une résilience et une autonomie exceptionnelles. Aujourd'hui, je cherche à développer davantage mes compétences techniques et sociales en apprenant aux côtés de professionnels.

        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-28 text-center"
      >
        <h3 className="text-white font-bold text-[32px] mb-2">Mon workflow de travail</h3>
        <p className="text-secondary text-[16px] max-w-2xl mx-auto">De l'identification du besoin métier jusqu'à la mise en production sur le Cloud.</p>
      </motion.div>

      {/* Resserrement du gap (gap-4 lg:gap-6) et suppression du flex-wrap pour PC */}
      <div className="mt-16 flex flex-wrap xl:flex-nowrap md:flex-row flex-col gap-4 lg:gap-6 justify-center md:items-stretch items-center">
        {workflow.map((item, index) => (
          <React.Fragment key={item.title}>
            <WorkflowCard index={index} {...item} />
            {index < workflow.length - 1 && <WorkflowArrow index={index} />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default About;