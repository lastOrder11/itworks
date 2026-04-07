import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Blackhole = () => {
  // On charge ton fichier .glb qui est dans le dossier public
  const blackhole = useGLTF('/blackhole.glb');

  return (
    <mesh>
      {/* Les lumières : un trou noir absorbe la lumière, mais son disque d'accrétion brille ! */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      
      {/* L'objet 3D en lui-même */}
      <primitive 
        object={blackhole.scene}
        scale={2.5} // <-- Si ton trou noir est trop petit ou trop gros, change ce chiffre (ex: 1.5, 3.0...)
        position={[0, -1.5, 0]} // Position (X, Y, Z)
        rotation={[0.1, 2, 0.1]}
      />
    </mesh>
  );
};

const BlackholeCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} // Position de la caméra
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense permet d'attendre que le modèle charge sans faire crasher le site */}
      <Suspense fallback={null}>
        <OrbitControls 
          enableZoom={false} // On empêche le scroll de zoomer sur le trou noir
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true} // Ça le fait tourner tout seul !
          autoRotateSpeed={1.5} // Vitesse de rotation
        />
        <Blackhole />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BlackholeCanvas;