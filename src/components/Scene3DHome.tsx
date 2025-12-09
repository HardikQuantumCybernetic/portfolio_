import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Text3D, Center, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// Floating geometric shapes with better materials
const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Large Torus */}
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={2.5}>
        <mesh position={[-4, 2, -5]}>
          <torusGeometry args={[1, 0.3, 32, 64]} />
          <meshStandardMaterial 
            color="#4ecdc4" 
            emissive="#4ecdc4"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Wireframe Cube */}
      <Float speed={2} rotationIntensity={2.5} floatIntensity={2}>
        <mesh position={[4, -1, -6]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial 
            color="#4ecdc4"
            emissive="#4ecdc4"
            emissiveIntensity={0.3}
            wireframe
          />
        </mesh>
      </Float>

      {/* Glass-like Sphere */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={3}>
        <mesh position={[3, 3, -7]}>
          <sphereGeometry args={[0.6, 64, 64]} />
          <meshStandardMaterial 
            color="#4ecdc4"
            emissive="#4ecdc4"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Octahedron */}
      <Float speed={2.5} rotationIntensity={1.8} floatIntensity={2.2}>
        <mesh position={[-3, -2, -4]}>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial 
            color="#4ecdc4"
            emissive="#4ecdc4"
            emissiveIntensity={0.35}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
      </Float>

      {/* Icosahedron */}
      <Float speed={1.2} rotationIntensity={2} floatIntensity={2.5}>
        <mesh position={[0, -3, -5]}>
          <icosahedronGeometry args={[0.55]} />
          <meshStandardMaterial 
            color="#4ecdc4"
            emissive="#4ecdc4"
            emissiveIntensity={0.3}
            wireframe
          />
        </mesh>
      </Float>

      {/* Dodecahedron */}
      <Float speed={1.6} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[5, 1, -8]}>
          <dodecahedronGeometry args={[0.5]} />
          <meshStandardMaterial 
            color="#4ecdc4"
            emissive="#4ecdc4"
            emissiveIntensity={0.4}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Torus Knot */}
      <Float speed={1.3} rotationIntensity={1} floatIntensity={1.8}>
        <mesh position={[-5, 0, -6]}>
          <torusKnotGeometry args={[0.4, 0.15, 128, 32]} />
          <meshStandardMaterial 
            color="#4ecdc4"
            emissive="#4ecdc4"
            emissiveIntensity={0.35}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
};

// Interactive particles that respond to mouse
const InteractiveParticles = ({ count = 200 }) => {
  const mesh = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
      
      // Cyan/teal colors with variation
      colors[i * 3] = 0.25 + Math.random() * 0.35;
      colors[i * 3 + 1] = 0.75 + Math.random() * 0.25;
      colors[i * 3 + 2] = 0.65 + Math.random() * 0.35;
      
      sizes[i] = Math.random() * 0.08 + 0.02;
    }
    
    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.015;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.1;
      
      // Subtle response to mouse
      mesh.current.rotation.z = mouse.x * 0.1;
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
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// 3D Text component
const Text3DComponent = () => {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Center position={[0, 0, -10]}>
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={textRef}>
          <boxGeometry args={[8, 2, 0.5]} />
          <meshStandardMaterial
            color="#4ecdc4"
            emissive="#4ecdc4"
            emissiveIntensity={0.2}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>
    </Center>
  );
};

// Animated ring
const AnimatedRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -12]}>
      <torusGeometry args={[4, 0.02, 16, 100]} />
      <meshStandardMaterial
        color="#4ecdc4"
        emissive="#4ecdc4"
        emissiveIntensity={0.6}
      />
    </mesh>
  );
};

const Scene3DHome = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#4ecdc4" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ffffff" />
          <pointLight position={[0, 5, 5]} intensity={0.5} color="#4ecdc4" />
          
          <FloatingShapes />
          <InteractiveParticles count={250} />
          <Text3DComponent />
          <AnimatedRing />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3DHome;
