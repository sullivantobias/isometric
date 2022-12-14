import React, { useState, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { Box, useTexture } from "@react-three/drei";
import { Vector3 } from "three";

const picture = "montage.jpeg";

function Picture({ position }) {
  const texture = useTexture(picture);
  const pictureRef = useRef();

  const [isHovering, setIsHovering] = useState(false);

  const handleHovering = (isHovering) => {
    document.body.style.cursor = isHovering ? "pointer" : "auto";

    setIsHovering(isHovering);
  };

  useFrame(() => {
    const vec = new Vector3(...(isHovering ? [1.2, 1.2, 1.2] : [1, 1, 1]));

    pictureRef.current.scale.lerp(vec, 0.1);
  });

  return (
    <Box
      onPointerOver={() => handleHovering(true)}
      onPointerOut={() => handleHovering(false)}
      position={position}
      args={[0.2, 2, 2]}
      ref={pictureRef}
    >
      <meshPhongMaterial map={texture} attach="material" />
    </Box>
  );
}

export default Picture;
