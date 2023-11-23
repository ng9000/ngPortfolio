import { useRef, useEffect } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);

  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // update Y position
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // checking if bird reached end of frame relative to camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // change rotation amd move it backwards
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // change direction to forward to move it back in frame
      birdRef.current.rotation.y = 0;
    }
    // update direction of x and z axis based on direction
    if (birdRef.current.rotation.y === 0) {
      // moving bird forward changing its position from moving to the back of the island to yhe front
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      //moving it back
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
