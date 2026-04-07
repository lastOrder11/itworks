import React from "react";
import BallCanvas from "./canvas/Ball";
import { motion } from "framer-motion";

// ✅ NOUVEAU : Import de ton logo PostgreSQL
import azure from "../assets/tech/azure.png";
import databricks from "../assets/tech/databricks.png";
import docker from "../assets/tech/docker.png";
import fastapi from "../assets/tech/fastapi.png";
import git from "../assets/tech/git.png";
import huggingface from "../assets/tech/huggingface.png";
import langchain from "../assets/tech/langchain.png";
import python from "../assets/tech/python.png";
import postgresqlIcon from "../assets/tech/postgresql.png"; // <-- Remplace par ton chemin exact

// Tes 9 technologies
const technologies = [
  { name: "Azure Cloud", icon: azure },
  { name: "Databricks", icon: databricks },
  { name: "PostgreSQL", icon: postgresqlIcon }, // ✅ NOUVEAU
  { name: "Docker Stack", icon: docker },
  { name: "FastAPI Stack", icon: fastapi },
  { name: "GitHub Actions", icon: git },
  { name: "HuggingFace", icon: huggingface },
  { name: "LangChain", icon: langchain },
  { name: "Python ML Stack", icon: python },
];

const Tech = () => {
  return (
    <section id="tech" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 mt-20 border-t border-[#1e293b]">
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
          De la conception de modèles IA au déploiement Cloud, voici les outils que je maîtrise pour construire des pipelines de production robustes et scalables.
        </motion.p>
      </div>

      {/* ✅ NOUVEAU : Utilisation de Grid pour forcer une matrice 3x3 */}
      {/* On utilise max-w-4xl pour resserrer un peu la grille au centre */}
      <div className="mt-20 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center max-w-4xl mx-auto">
        {technologies.map((technology) => (
          // On augmente un peu la taille des containers pour des boules plus imposantes
          <div className="w-36 h-36" key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;