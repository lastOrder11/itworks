import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

// ─────────────────────────────────────────────────────────
// BallMesh : juste le mesh 3D, sans Canvas
// Utilisé par Tech.jsx dans le canvas partagé
// ─────────────────────────────────────────────────────────
export const BallMesh = ({ imgUrl, position }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.5;
      meshRef.current.rotation.x = Math.sin(time * 0.12) * 0.2;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={0.1} floatIntensity={0.8}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} intensity={2.5} />
      <directionalLight position={[0, 1, 0]} intensity={1.5} color="#fff8eb" />

      <mesh ref={meshRef} castShadow receiveShadow scale={1.1} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#ffffff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false}
        />
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

// ─────────────────────────────────────────────────────────
// BallCanvas : garde l'ancienne API si besoin ailleurs
// ─────────────────────────────────────────────────────────
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, antialias: false }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <BallMesh imgUrl={icon} position={[0, 0, 0]} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
