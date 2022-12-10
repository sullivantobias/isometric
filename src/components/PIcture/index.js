import React from "react";

import { Box } from "@react-three/drei";

function Picture({ position, onClick }) {
  return (
    <Box onClick={onClick} position={position} args={[0.2, 2, 2]}>
      <meshPhongMaterial attach="material" color="red" />
    </Box>
  );
}

export default Picture;
