import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleSwarm() {
  const ref = useRef<any>(null);
  
  // Track scroll position
  const scrollPosition = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1 based on rough document height, or just absolute scroll)
      scrollPosition.current = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create a memoized array of particle positions
  const sphere = useMemo(() => {
    const positions = new Float32Array(8000 * 3);
    for (let i = 0; i < 8000; i++) {
        // Random spherical distribution, but more spread out
        const r = 30 * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        // Add some noise to Y axis to make it look like a field
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  // Accumulators for base continuous rotation
  const baseRotX = useRef(0);
  const baseRotY = useRef(0);
  
  // Smoothing value for scroll
  const currentScroll = useRef(0);

  useFrame((state, delta) => {
    if (ref.current) {
      // 1. Update continuous base rotation
      baseRotX.current -= delta / 100;
      baseRotY.current -= delta / 150;
      
      // 2. Smoothly interpolate scroll position
      currentScroll.current += (scrollPosition.current - currentScroll.current) * 0.05;
      
      // 3. Calculate scroll-based offsets (very subtle)
      const scrollOffsetX = currentScroll.current * 0.0001;
      const scrollOffsetY = currentScroll.current * 0.0002;
      const scrollOffsetZ = Math.sin(currentScroll.current * 0.0002) * 2;

      // 4. Apply combined transformations
      ref.current.rotation.x = baseRotX.current + scrollOffsetX;
      ref.current.rotation.y = baseRotY.current + scrollOffsetY;
      ref.current.position.z = scrollOffsetZ;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#2D88FF"
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#18191A] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] z-0"></div>

      <Canvas camera={{ position: [0, 0, 15] }}>
        <fog attach="fog" args={['#18191A', 10, 40]} />
        <ParticleSwarm />
      </Canvas>
      {/* Overlay to ensure readability and luxurious depth */}
      <div className="absolute inset-0 bg-[#18191A]/10 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#18191A]/80 z-10" />
    </div>
  );
}
