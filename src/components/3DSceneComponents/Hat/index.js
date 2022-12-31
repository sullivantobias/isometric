import React from "react";
import { useGLTF } from "@react-three/drei";

function Hat(props) {
  const { nodes, materials } = useGLTF("/vase.glb");

  return (
    <mesh
      material={materials["Material.001"]}
      geometry={nodes.Cylinder.geometry}
    />
  );
}

useGLTF.preload("/vase.glb");

export default Hat;
