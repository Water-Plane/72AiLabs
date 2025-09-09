import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleBackground: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Position particles in a sphere around the camera
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Color gradient from blue to teal
      const colorVariation = Math.random();
      colors[i * 3] = 0.0 + colorVariation * 0.2; // R
      colors[i * 3 + 1] = 0.4 + colorVariation * 0.4; // G
      colors[i * 3 + 2] = 0.8 + colorVariation * 0.2; // B
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Rotate the entire particle system
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      
      // Animate individual particles
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Create floating motion
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i * 0.01) * 0.001;
        positions[i3] += Math.cos(state.clock.elapsedTime + i * 0.01) * 0.0005;
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={particles.positions}>
      <PointMaterial
        transparent
        vertexColors
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default ParticleBackground;
