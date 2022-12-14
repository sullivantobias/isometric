import React, { useState } from "react";

import { Box, useTexture } from "@react-three/drei";

const picture = "montage.jpeg";

function Picture({ position }) {
  const [isHovering, setIsHovering] = useState(false);
  const texture = useTexture(picture);

  const handleHovering = (isHovering) => {
    document.body.style.cursor = isHovering ? "pointer" : "auto";

    setIsHovering(isHovering);
  };

  return (
    <Box
      onPointerOver={() => handleHovering(true)}
      onPointerOut={() => handleHovering(false)}
      position={position}
      args={[0.2, 2, 2]}
      scale={isHovering ? 1.2 : 1}
    >
      <meshPhongMaterial map={texture} attach="material" />
    </Box>
  );
}

export default Picture;
