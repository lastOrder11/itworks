import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursorDiv = document.getElementById('custom-cursor');
    const particlesContainer = document.getElementById('comet-particles-container');

    if (!cursorDiv || !particlesContainer) return;

    cursorDiv.style.display = 'block';

    const createCometParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.classList.add('comet-particle');
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 800);
    };

    // VARIABLE POUR LIMITER LA FRÉQUENCE (Throttling)
    let lastParticleTime = 0;

    const handleMouseMove = (e) => {
      // Le cercle jaune suit toujours la souris instantanément
      cursorDiv.style.left = `${e.clientX}px`;
      cursorDiv.style.top = `${e.clientY}px`;

      // Mais on ne crée une étincelle que toutes les 40 millisecondes
      const now = Date.now();
      if (now - lastParticleTime > 40) {
        createCometParticle(e.clientX, e.clientY);
        lastParticleTime = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" />
      <div id="comet-particles-container" className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[999]" />
    </>
  );
};

export default CustomCursor;