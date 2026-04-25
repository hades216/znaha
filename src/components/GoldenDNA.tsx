import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Environment } from '@react-three/drei';

function DNA() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: 15 }).map((_, i) => (
        <group key={i} rotation={[0, i * 0.5, 0]}>
          <mesh position={[0.6, (i - 7.5) * 0.15, 0]}>
            <sphereGeometry args={[0.07, 32, 32]} />
            <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[-0.6, (i - 7.5) * 0.15, 0]}>
            <sphereGeometry args={[0.07, 32, 32]} />
            <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, (i - 7.5) * 0.15, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 1.2]} />
            <meshStandardMaterial color="#A67C00" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function GoldenDNA() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 40 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={1} angle={0.2} penumbra={1} castShadow />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <DNA />
      </Float>
      <Environment preset="city" />
    </Canvas>
  );
}
