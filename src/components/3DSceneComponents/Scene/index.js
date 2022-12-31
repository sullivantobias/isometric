import React from "react";
import { useGLTF } from "@react-three/drei";

function Scene(props) {
  const { scene } = useGLTF("/scene.glb");

  return <primitive object={scene} />;
}

useGLTF.preload("/scene.glb");

export default Scene;
