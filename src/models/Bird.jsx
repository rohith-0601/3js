import React from "react";
import birdscene from "../assets/3d/bird.glb";
import { useGLTF } from "@react-three/drei";

const Bird = () => {
  const { scene } = useGLTF(birdscene); // ✅ Use scene here

  return (
    <mesh>
    <primitive
      object={scene}
      position={[-5, 2, 1]}
      scale={[0.003, 0.003, 0.003]}
    />
    </mesh>
  );
};

export default Bird;
