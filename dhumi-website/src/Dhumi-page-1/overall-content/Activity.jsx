import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber/';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

function Octahedron() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(null);
  const degToRad = (degrees) => (degrees * Math.PI) / 180;

  const geometry = new THREE.OctahedronGeometry(1);
  const activityAngle = [
    [degToRad(-25), degToRad(40), degToRad(15)],
    [degToRad(25), degToRad(220), degToRad(17)],
    [degToRad(-30), degToRad(320), degToRad(-20)],
    [degToRad(30), degToRad(135), degToRad(-20)],
    [degToRad(25), degToRad(40), degToRad(-20)],
    [degToRad(25), degToRad(320), degToRad(15)],
    [degToRad(-25), degToRad(223), degToRad(-20)],
    [degToRad(-25), degToRad(140), degToRad(17)],
  ];

  const faces = [
    { position: [0.4, 0.45, 0.37], normal: [0.7, 0.2, 0], content: "Activity", color: "#f3a683", link: "/" },
    { position: [-0.37, 0.45, -0.35], normal: [-0.7, 0.7, 0], content: "Chat", color: "#fa983a", link: "/about" },
    { position: [-0.4, 0.45, 0.4], normal: [0, 0.7, 0.7], content: "Video Conference", color: "#78e08f", link: "/portfolio" },
    { position: [0.4, 0.45, -0.4], normal: [0, 0.7, -0.7], content: "Documentation", color: "#b8e994", link: "/services" },
    { position: [0.4, -0.45, 0.4], normal: [0.6, -0.6, 0.6], content: "Invoice Processing", color: "#82ccdd", link: "/analyze" },
    { position: [-0.35, -0.45, 0.4], normal: [-0.6, -0.6, 0.6], content: "HR Management", color: "#60a3bc", link: "/contact" },
    { position: [-0.4, -0.4, -0.4], normal: [-0.6, -0.6, -0.6], content: "Lead Management", color: "#c56cf0", link: "/blog" },
    { position: [0.35, -0.45, -0.4], normal: [0.6, -0.6, -0.6], content: "Travel Management", color: "#9b59b6", link: "/gallery" },
  ];

  const handleFaceClick = (link) => {
    if (link) window.location.href = link;
  };

  useFrame((state) => {
    if (meshRef.current && hovered === null) {
      // meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={meshRef} scale={[1.15, 1.15, 1.15]}>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color={new THREE.Color(Math.random(), Math.random(), Math.random())}
          metalness={0.5}
          roughness={0.7}
          transparent
          opacity={0.8}
        />
      </mesh>

      {faces.map((face, index) => (
        <group key={index} position={face.position} rotation={activityAngle[index]}>
          <mesh
            lookAt={face.normal}
            onClick={() => handleFaceClick(face.link)}
            onPointerOver={() => setHovered(index)}
            onPointerOut={() => setHovered(null)}
          >
            <circleGeometry args={[0.25, 32]} />
            <meshStandardMaterial
              color={hovered === index ? "" : "white"}
              emissive={hovered === index ? face.color : "#000000"}
              emissiveIntensity={hovered === index ? 0.5 : 0}
              transparent
              opacity={0.9}
            />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.05}
            color="black"
            anchorX="center"
            anchorY="middle"
            lookAt={face.normal}
          >
            {face.content}
          </Text>
        </group>
      ))}
    </group>
  );
}

export default function OctahedronViewer() {
  return (
    <div className="flex items-center justify-center h-[90vh] bg-gradient-to-r from-[#fefcea] to-[#f1daff] p-4">
      <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-500 ease-in-out hover:scale-[1.01]">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#a29bfe" />
          <Octahedron />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
