import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Hat(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/hat.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials["CHAPEAU NOIR"]}
        geometry={nodes.Cylinder_1.geometry}
      />
      <mesh
        material={materials["LIGNE ROUGE"]}
        geometry={nodes.Cylinder_2.geometry}
      />
    </group>
  );
}

useGLTF.preload("/hat.glb");

export default Hat;
