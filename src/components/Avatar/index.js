import React from "react";

import { Box } from "@react-three/drei";

function Avatar({ position, size }) {
  return (
    <Box castShadow args={size} position={position}>
      <meshPhongMaterial attach="material" color="lightGrey" />
    </Box>
  );
}

export default Avatar;
