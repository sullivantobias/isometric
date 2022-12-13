import React, { useState } from "react";

import { Box, useTexture } from "@react-three/drei";

const picture = "montage.jpeg";

function Picture({ position }) {
  const [isHovering, setIsHovering] = useState(false);
  const texture = useTexture(picture);

  return (
    <Box
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
      position={position}
      args={[0.2, 2, 2]}
    >
      <meshPhongMaterial
        color={isHovering ? "red" : ""}
        map={texture}
        attach="material"
      />
    </Box>
  );
}

export default Picture;
