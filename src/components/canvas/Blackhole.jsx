import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, useGLTF } from '@react-three/drei';

const Blackhole = () => {
  const blackhole = useGLTF('/blackhole.glb');
  const meshRef = useRef();

  // Rotation manuelle via useFrame — pas besoin d'OrbitControls ni d'autoRotate
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4; // Vitesse de rotation
    }
  });

  return (
    <mesh ref={meshRef}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <primitive
        object={blackhole.scene}
        scale={2.5}
        position={[0, -1.5, 0]}
        rotation={[0.1, 0, 0.1]}
      />
    </mesh>
  );
};

const BlackholeCanvas = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !hasLoaded) setHasLoaded(true);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasLoaded]);

  return (
    // Ce div prend tout l'espace de la section Hero
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      {hasLoaded && (
        <Canvas
          shadows
          // 'always' quand visible, 'demand' quand la Hero sort du viewport
          frameloop={isVisible ? 'always' : 'demand'}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: false, antialias: false }}
        >
          <Suspense fallback={null}>
            <Blackhole />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default BlackholeCanvas;
