import React, { useMemo } from 'react';

// Génère les étoiles une seule fois (pas de re-render, pas d'animation JS)
// Tout est fait en CSS : opacity aléatoire + animation delay aléatoire
const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,          // Entre 1px et 3px
    delay: `${(Math.random() * 4).toFixed(2)}s`,
    duration: `${(Math.random() * 3 + 2).toFixed(2)}s`,
    opacity: Math.random() * 0.6 + 0.2,   // Entre 0.2 et 0.8
  }));
};

const StarsCanvas = () => {
  // useMemo : les étoiles sont calculées une seule fois, jamais recalculées
  const stars = useMemo(() => generateStars(180), []);

  return (
    <div className="w-full h-full absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: var(--star-opacity); transform: scale(1); }
          50%       { opacity: calc(var(--star-opacity) * 0.2); transform: scale(0.8); }
        }
      `}</style>

      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: '#f8fafc',
            '--star-opacity': star.opacity,
            opacity: star.opacity,
            animation: `twinkle ${star.duration} ${star.delay} ease-in-out infinite`,
            // will-change évite le repaint en isolant chaque étoile sur sa propre couche
            willChange: 'opacity, transform',
          }}
        />
      ))}
    </div>
  );
};

export default StarsCanvas;
