import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  // 1. On génère 6000 valeurs (car 6000 est divisible par 3 coordonnées X,Y,Z !)
  const [sphere] = useState(() => {
    const positions = new Float32Array(2100);
    random.inSphere(positions, { radius: 1.2 });
    
    // 2. SÉCURITÉ ANTI-CRASH : On vérifie qu'aucune valeur n'est "NaN"
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0; // Si une erreur survient, on force à 0 pour éviter le plantage
      }
    }
    return positions;
  });

  // Animation de rotation lente des étoiles
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f8fafc' // Couleur du gris perle très clair
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;