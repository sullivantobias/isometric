import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { Vector3 } from "three";

function Avatar({ position, size }) {
  const avatarRef = useRef();

  useFrame(() => {
    const vec = new Vector3(...position);

    avatarRef.current.position.lerp(vec, 0.2);
  });
  return (
    <Box args={size} castShadow receiveShadow ref={avatarRef}>
      <meshStandardMaterial color="blue" />
    </Box>
  );
}

export default Avatar;
