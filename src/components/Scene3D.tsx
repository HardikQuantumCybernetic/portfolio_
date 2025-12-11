import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Theme-aware color hook
const useThemeColors = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark") || 
                !document.documentElement.classList.contains("light"));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    
    return () => observer.disconnect();
  }, []);

  return isDark 
    ? { primary: "#4ecdc4", secondary: "#2a9d8f", ambient: 0.4 }
    : { primary: "#8b5a2b", secondary: "#a0522d", ambient: 0.6 };
};

// Floating geometric shapes
const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);
  const colors = useThemeColors();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-3, 2, -2]}>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
          <meshStandardMaterial 
            color={colors.primary}
            emissive={colors.primary}
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[3, -1, -3]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial 
            color={colors.primary}
            emissive={colors.primary}
            emissiveIntensity={0.2}
            metalness={0.9}
            roughness={0.1}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={2.5}>
        <mesh position={[2, 2.5, -4]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial 
            color={colors.secondary}
            emissive={colors.secondary}
            emissiveIntensity={0.4}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[-2.5, -1.5, -2.5]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial 
            color={colors.primary}
            emissive={colors.primary}
            emissiveIntensity={0.3}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={1.8} floatIntensity={2}>
        <mesh position={[0, -2, -3]}>
          <icosahedronGeometry args={[0.45]} />
          <meshStandardMaterial 
            color={colors.secondary}
            emissive={colors.secondary}
            emissiveIntensity={0.25}
            metalness={0.75}
            roughness={0.25}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
};

// Interactive particles
const Particles = ({ count = 100 }) => {
  const mesh = useRef<THREE.Points>(null);
  const colors = useThemeColors();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
    }
    
    return { positions };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={colors.primary}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3D = () => {
  const colors = useThemeColors();
  
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={colors.ambient} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color={colors.primary} />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#ffffff" />
        
        <FloatingShapes />
        <Particles count={100} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
