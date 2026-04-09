import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

// ─────────────────────────────────────────────────────────
// Composant LazyVideo : ne charge la vidéo QUE quand elle
// entre dans le viewport (évite 3 téléchargements simultanés)
// ─────────────────────────────────────────────────────────
const LazyVideo = ({ src, className }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect(); // On charge une seule fois
        }
      },
      { threshold: 0.2 } // Démarre quand 20% de la vidéo est visible
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          controls
          className={className}
        />
      ) : (
        // Placeholder pendant que la vidéo n'est pas encore visible
        <div className="w-full h-full flex items-center justify-center bg-black/50">
          <div className="text-accent/50 text-4xl animate-pulse">▶</div>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// Composant MediaDisplay : gère vidéo ET image (ex: Assurance Auto)
// ─────────────────────────────────────────────────────────
const MediaDisplay = ({ src, name }) => {
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');

  if (isVideo) {
    return (
      <LazyVideo
        src={src}
        className="w-full h-full object-contain"
      />
    );
  }

  // Fallback image (pour Assurance Auto qui utilise une image PNG)
  return (
    <img
      src={src}
      alt={`Aperçu ${name}`}
      className="w-full h-full object-contain"
      loading="lazy"
    />
  );
};

// ─────────────────────────────────────────────────────────
// Données des projets
// ─────────────────────────────────────────────────────────
const descriptions = {
  countHours: `CountHours, un système qui estime ton salaire brut et suit tes heures travaillées, juste en uploadant ton contrat de travail.\n\nComment ça marche ?\n→ Tu crées un compte pour avoir ton espace personnel\n→ Tu uploades ton contrat PDF (l'IA l'analyse automatiquement)\n→ Tu renseignes tes heures réelles (supplémentaires, de nuit, du dimanche...)\n→ Tu obtiens ton estimation de salaire brut + ton compteur d'heures qui s'incrémente automatiquement`,

  assuranceAuto: `assuranceAuto est un système qui analyse automatiquement un sinistre automobile et rend une décision d'indemnisation, juste en uploadant deux photos.\n\nComment ça marche ?\n→ Tu crées un compte pour avoir ton espace personnel\n→ Tu uploades une photo du véhicule endommagé + le constat amiable\n→ Le système détecte automatiquement les dégâts sur la carrosserie et lit le constat manuscrit pour extraire les observations\n→ Toutes ces données sont croisées avec les conditions générales d'assurance pour rendre une décision : remboursé ou non remboursé, avec le montant estimé`,

  ecommerceSentiment: `Transformez les avis clients en alertes exploitables pour vos équipes afin de les aider à détecter rapidement les problèmes produits.\n\nComment ça marche ?\n→ Sur le site des produits, un client consulte un produit et laisse un avis librement\n→ Le système présent sur le site de monitoring analyse automatiquement le sentiment (positif, neutre, négatif)\n→ Les avis sont centralisés et historisés par produit\n→ Le moteur de monitoring détecte : les pics d'avis négatifs et les mots critiques (arnaque, dangereux, etc.)\n→ Les incidents sont priorisés et affichés\n→ En cas d'incertitude (score donné par le modèle trop faible), un humain valide ou corrige la prédiction`,

  churnDecision: `Un système qui ne se contente pas de prédire le churn, mais qui aide à prendre des décisions rentables, en intégrant directement l'impact business (ROI).\n\nComment ça marche ?\n→ Tu sélectionnes un client et lances une prédiction de churn, le modèle estime la probabilité de départ\n→ Tu définis des hypothèses métiers (coût du churn, coût de rétention, taux de succès)\n→ Le système propose automatiquement des actions pour retenir le client\n→ Une estimation du gain attendu est calculée pour chaque décision\n→ Une simulation permet de tester plusieurs seuils\n→ Le seuil optimal est sélectionné pour maximiser le ROI`,
};

const projects = [
  {
    name: "CountHours",
    description: descriptions.countHours,
    tags: [
      { name: "FastAPI", color: "text-accent" },
      { name: "LangGraph", color: "text-green-400" },
      { name: "PostgreSQL", color: "text-red-500" },
      { name: "Docker", color: "text-pink-400" },
      { name: "React", color: "text-blue-500" }
    ],
    video: "/counthours.mp4",
    github: "https://github.com/varde11/hoursCountProjet",
    liveLinks: [{ label: "Démo Live", url: "https://varde11-count-hours-frontend.hf.space" }]
  },
  {
    name: "Assurance Auto",
    description: descriptions.assuranceAuto,
    tags: [
      { name: "FastAPI", color: "text-accent" },
      { name: "LangChain", color: "text-green-400" },
      { name: "PostgreSQL", color: "text-red-500" },
      { name: "Docker", color: "text-pink-400" },
      { name: "Computer vision", color: "text-blue-500" }
    ],
    video: "/image_assurance.png",
    github: "https://github.com/varde11/AssuranceProjet",
    liveLinks: [{ label: "Démo Live", url: "https://varde11-assurance-frontend.hf.space" }]
  },
  {
    name: "E-commerce Sentiment",
    description: descriptions.ecommerceSentiment,
    tags: [
      { name: "FastAPI", color: "text-accent" },
      { name: "NLP", color: "text-green-400" },
      { name: "PostgreSQL", color: "text-red-400" },
      { name: "Docker", color: "text-pink-400" },
      { name: "Streamlit", color: "text-blue-500" }
    ],
    video: "/e_commerce.mp4",
    github: "https://github.com/varde11/sentimentProjet",
    liveLinks: [
      { label: "Boutique", url: "https://varde11-ecommerce.hf.space" },
      { label: "Console", url: "https://varde11-console-sentiment.hf.space" }
    ]
  },
  {
    name: "Churn Decision Intelligence",
    description: descriptions.churnDecision,
    tags: [
      { name: "FastAPI", color: "text-accent" },
      { name: "Machine Learning", color: "text-green-400" },
      { name: "PostgreSQL", color: "text-red-500" },
      { name: "Docker", color: "text-pink-400" }
    ],
    video: "/churn_projet_video.mp4",
    github: "https://github.com/varde11/ProjetChurn",
    liveLinks: [{ label: "Démo Live", url: "https://varde11-churn-frontend.hf.space" }]
  },
];

// ─────────────────────────────────────────────────────────
// Composant ProjectRow
// ─────────────────────────────────────────────────────────
const ProjectRow = ({ index, name, description, tags, video, github, liveLinks }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`w-full flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col-reverse items-start gap-12 mt-24 border-b border-[#1e293b] pb-12 last:border-b-0`}>

      {/* CÔTÉ TEXTE */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        className="flex-1 w-full"
      >
        <Tilt options={{ max: 15, scale: 1.02, speed: 450 }} className="w-full">
          <div className="bg-tertiary p-8 rounded-2xl border border-[#1e293b] shadow-card w-full">
            <h3 className="text-white font-bold text-[32px]">{name}</h3>
            <p className="mt-4 text-secondary text-[16px] leading-[28px] whitespace-pre-wrap">{description}</p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] font-medium ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>

            {/* Bouton GitHub */}
            <div className="mt-6 border-t border-[#1e293b] pt-4">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors text-sm font-bold"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Voir le code source
              </a>
            </div>
          </div>
        </Tilt>
      </motion.div>

      {/* CÔTÉ VIDÉO / IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        className="flex-1 relative w-full h-[350px] sm:h-[450px] bg-black rounded-2xl border-2 border-accent shadow-card overflow-hidden group"
      >
        {/* Vidéo ou Image selon le type de fichier */}
        <MediaDisplay src={video} name={name} />

        {/* BOUTONS DES LIENS DÉPLOYÉS (En haut à droite) */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
          {liveLinks && liveLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => window.open(link.url, "_blank")}
              className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-accent hover:bg-accent text-white font-bold text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <span>🚀</span> {link.label}
            </button>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

// ─────────────────────────────────────────────────────────
// Section principale Works
// ─────────────────────────────────────────────────────────
const Works = () => {
  return (
    <section id="projects" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Portfolio
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projets End-to-End.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Les projets suivants illustrent mon obsession : transformer des Notebooks de Data Science en produits tangibles, robustes et déployés qui génèrent un véritable impact métier.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectRow key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
