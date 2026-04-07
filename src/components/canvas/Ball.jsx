import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();

  // ✅ NOUVEAU : Animation en "Ping-Pong" (Oscillation)
  useFrame((state) => {
    // state.clock.elapsedTime donne le temps écoulé depuis le début de l'animation
    const time = state.clock.elapsedTime;

    if (meshRef.current) {
      // Math.sin(time) crée une valeur qui oscille doucement entre -1 et 1
      // On multiplie par 0.5 pour limiter l'angle de rotation à environ 30 degrés
      meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.5; // Oscillation douce gauche/droite
      meshRef.current.rotation.x = Math.sin(time * 0.12) * 0.2; // Très légère oscillation haut/bas
    }
  });

  return (
    // On garde Float pour le mouvement de flottaison haut/bas
    <Float speed={1.75} rotationIntensity={0.1} floatIntensity={1}>
      {/* Lumières virtualle pour l'éclat */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} intensity={2.5} />
      <directionalLight position={[0, 1, 0]} intensity={1.5} color="#fff8eb" />

      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#ffffff' // Blanc pur éclatant
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false}
        />
        {/* Le logo appliqué sur la sphère */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always' // Force l'animation constante
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;