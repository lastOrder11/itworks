import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { motion } from "framer-motion";
import { BallMesh } from "./canvas/Ball";

import azure from "../assets/tech/azure.png";
import databricks from "../assets/tech/databricks.png";
import docker from "../assets/tech/docker.png";
import fastapi from "../assets/tech/fastapi.png";
import git from "../assets/tech/git.png";
import huggingface from "../assets/tech/huggingface.png";
import langchain from "../assets/tech/langchain.png";
import python from "../assets/tech/python.png";
import postgresqlIcon from "../assets/tech/postgresql.png";

const technologies = [
  { name: "Azure Cloud", icon: azure },
  { name: "Databricks", icon: databricks },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Docker Stack", icon: docker },
  { name: "FastAPI Stack", icon: fastapi },
  { name: "GitHub Actions", icon: git },
  { name: "HuggingFace", icon: huggingface },
  { name: "LangChain", icon: langchain },
  { name: "Python ML Stack", icon: python },
];

// ─────────────────────────────────────────────────────────
// Calcule la position 3D pour une grille 3x3
// Les 9 balls sont espacées en world space dans UN seul canvas
// ─────────────────────────────────────────────────────────
const getGridPosition = (index) => {
  const col = index % 3;          // 0, 1, 2
  const row = Math.floor(index / 3); // 0, 1, 2
  const spacingX = 3.6;
  const spacingY = 3.6;
  const x = (col - 1) * spacingX;  // -3.6, 0, 3.6
  const y = (1 - row) * spacingY;  // 3.6, 0, -3.6
  return [x, y, 0];
};

// ─────────────────────────────────────────────────────────
// Canvas unique avec toutes les balls — 1 contexte WebGL au lieu de 9
// Visibility-based : le canvas se pause quand il quitte le viewport
// ─────────────────────────────────────────────────────────
const TechCanvas = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !hasLoaded) {
          setHasLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasLoaded]);

  return (
    <div
      ref={containerRef}
      // Hauteur fixe pour le canvas unique : assez grand pour voir les 3 rangées
      className="w-full max-w-4xl mx-auto"
      style={{ height: "520px" }}
    >
      {hasLoaded && (
        <Canvas
          // 'always' car on gère la pause via hasLoaded/isVisible
          // Le canvas est simplement retiré du DOM quand invisible (via hasLoaded)
          frameloop={isVisible ? 'always' : 'demand'}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 11], fov: 65 }}
          gl={{
            antialias: false,          // Moins lourd sur le GPU
            preserveDrawingBuffer: false, // Inutile ici, économise de la VRAM
          }}
        >
          <Suspense fallback={null}>
            {technologies.map((tech, index) => (
              <BallMesh
                key={tech.name}
                imgUrl={tech.icon}
                position={getGridPosition(index)}
              />
            ))}
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// Section Tech
// ─────────────────────────────────────────────────────────
const Tech = () => {
  return (
    <section
      id="tech"
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 mt-20 border-t border-[#1e293b]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Compétences
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Mon Arsenal Technique.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          De la conception de modèles IA au déploiement Cloud, voici les outils que je maîtrise
          pour construire des pipelines de production robustes et scalables.
        </motion.p>
      </div>

      {/* Labels des technos en dessous du canvas */}
      <div className="mt-8">
        <TechCanvas />

        {/* Noms des technos : une grille de labels lisible */}
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <p
              key={tech.name}
              className="text-secondary text-center text-[13px] font-medium truncate"
            >
              {tech.name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
