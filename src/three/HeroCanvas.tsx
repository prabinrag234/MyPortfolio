import { Suspense, useEffect, useRef, type ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Sparkles, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';
import { useMediaQuery } from '../hooks/useMediaQuery';

function RotatingGroup({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.09;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.current.y * 0.2, 0.04);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -pointer.current.x * 0.15, 0.04);
  });

  return <group ref={group}>{children}</group>;
}

function Scene({ reduced, compact }: { reduced: boolean; compact: boolean }) {
  const sparkleCount = reduced ? 0 : compact ? 20 : 50;

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 3, 4]} intensity={1.4} />
      <directionalLight position={[-4, -2, -3]} intensity={0.8} color="#c4b5fd" />
      <RotatingGroup>
        <Float speed={reduced ? 0 : 1.4} rotationIntensity={reduced ? 0 : 0.5} floatIntensity={reduced ? 0 : 1.1}>
          <Icosahedron args={[0.85, compact ? 2 : 5]} position={[2.3, 1.2, -1.4]}>
            <MeshDistortMaterial
              color="#818cf8"
              distort={0.35}
              speed={reduced ? 0 : 1.6}
              roughness={0.45}
              metalness={0.05}
              transparent
              opacity={0.9}
            />
          </Icosahedron>
        </Float>
        <Float speed={reduced ? 0 : 1.1} rotationIntensity={reduced ? 0 : 0.4} floatIntensity={reduced ? 0 : 0.9}>
          <Icosahedron args={[0.5, compact ? 1 : 3]} position={[-2.4, -1.3, -1]}>
            <MeshDistortMaterial
              color="#a5b4fc"
              distort={0.4}
              speed={reduced ? 0 : 1.2}
              roughness={0.5}
              metalness={0.05}
              transparent
              opacity={0.8}
            />
          </Icosahedron>
        </Float>
        <Float speed={reduced ? 0 : 1} rotationIntensity={reduced ? 0 : 0.3} floatIntensity={reduced ? 0 : 0.7}>
          <TorusKnot args={[2.25, 0.045, 100, 10]} position={[0, 0, -1.6]}>
            <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.28} />
          </TorusKnot>
        </Float>
        {sparkleCount > 0 && (
          <Sparkles count={sparkleCount} scale={[7, 6, 4]} size={2} speed={0.25} color="#818cf8" opacity={0.5} />
        )}
      </RotatingGroup>
    </>
  );
}

export default function HeroCanvas() {
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const compact = useMediaQuery('(max-width: 768px)');

  const vignette = {
    maskImage: 'radial-gradient(ellipse 62% 58% at 50% 45%, transparent 42%, black 88%)',
    WebkitMaskImage: 'radial-gradient(ellipse 62% 58% at 50% 45%, transparent 42%, black 88%)',
  };

  return (
    <div className="absolute inset-0 pointer-events-none select-none" style={vignette} aria-hidden="true">
      <Canvas
        dpr={[1, compact ? 1.25 : 1.75]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <Suspense fallback={null}>
          <Scene reduced={reduced} compact={compact} />
        </Suspense>
      </Canvas>
    </div>
  );
}
