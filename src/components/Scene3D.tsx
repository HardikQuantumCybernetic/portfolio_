import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
    ? { primary: "#4ecdc4", secondary: "#2a9d8f", accent: "#1a6b64", ambient: 0.4 }
    : { primary: "#c9a66b", secondary: "#8b6914", accent: "#5c4a1f", ambient: 0.7 };
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

// Mouse-following interactive particles
const MouseParticles = ({ count = 80 }) => {
  const mesh = useRef<THREE.Points>(null);
  const colors = useThemeColors();
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 6 - 3;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }
    
    return { positions, originalPositions };
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = ((e.clientX / window.innerWidth) * 2 - 1) * (viewport.width / 2);
      mouse.current.y = (-(e.clientY / window.innerHeight) * 2 + 1) * (viewport.height / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [viewport]);

  useFrame((state) => {
    if (mesh.current) {
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const ox = particles.originalPositions[i * 3];
        const oy = particles.originalPositions[i * 3 + 1];
        
        const dx = mouse.current.x - ox;
        const dy = mouse.current.y - oy;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 3;
        
        if (distance < maxDist) {
          const force = (1 - distance / maxDist) * 0.8;
          positions[i * 3] = ox + dx * force * 0.3;
          positions[i * 3 + 1] = oy + dy * force * 0.3;
        } else {
          positions[i * 3] += (ox - positions[i * 3]) * 0.05;
          positions[i * 3 + 1] += (oy - positions[i * 3 + 1]) * 0.05;
        }
        
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.002;
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
      mesh.current.rotation.z = state.clock.elapsedTime * 0.02;
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
        size={0.08}
        color={colors.primary}
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3D = () => {
  const colors = useThemeColors();
  
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={colors.ambient} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color={colors.primary} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color={colors.secondary} />
        
        <FloatingShapes />
        <MouseParticles count={80} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
