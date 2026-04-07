import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    // On récupère les éléments DOM (c'est tes "mains")
    const cursorDiv = document.getElementById('custom-cursor');
    const particlesContainer = document.getElementById('comet-particles-container');

    if (!cursorDiv || !particlesContainer) return;

    // Affiche le curseur seulement quand JS est chargé
    cursorDiv.style.display = 'block';

    // Fonction pour créer une étincelle (particle)
    const createCometParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.classList.add('comet-particle');
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particlesContainer.appendChild(particle);

      // On supprime l'élément DOM après la fin de l'animation CSS
      setTimeout(() => {
        particle.remove();
      }, 800);
    };

    // Fonction pour suivre la souris
    const handleMouseMove = (e) => {
      cursorDiv.style.left = `${e.clientX}px`;
      cursorDiv.style.top = `${e.clientY}px`;
      createCometParticle(e.clientX, e.clientY); // Crée une étincelle !
    };

    // Écouteur d'événement sur toute la fenêtre
    window.addEventListener('mousemove', handleMouseMove);

    // Nettoyage de l'écouteur si le composant est démonté
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Le "head" de la comète */}
      <div id="custom-cursor" />
      {/* Le conteneur pour toutes les étincelles */}
      <div id="comet-particles-container" className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[999]" />
    </>
  );
};

export default CustomCursor;