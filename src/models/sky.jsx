import React, { useRef } from "react";
import skyScenery from "../assets/3d/sky.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScenery);
  const ref = useRef();
  useFrame((_, delta) => {
    if (isRotating) {
      // changing rotation of the sky on the based of island position
      ref.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh ref={ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
