import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleSwarm() {
  const ref = useRef<any>(null);
  
  // Create a memoized array of particle positions
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
        // Random spherical distribution
        const r = 20 * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#EAB308"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] z-0"></div>

      <Canvas camera={{ position: [0, 0, 15] }}>
        <ParticleSwarm />
      </Canvas>
      {/* Overlay to ensure readability and luxurious depth */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#050505]/60 to-[#050505] z-10" />
    </div>
  );
}
