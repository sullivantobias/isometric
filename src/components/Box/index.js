import React from "react";
import { useTexture } from "@react-three/drei";

const name = (type) => `PavingStones122_1K_${type}.jpg`;

function Wall({ position }) {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      name("Color"),
      name("Displacement"),
      name("NormalGL"),
      name("Roughness"),
      name("AmbientOcclusion"),
    ]);

  return (
    <mesh position={position}>
      <boxBufferGeometry args={[10, 5, 0]} />
      <meshStandardMaterial
        displacement={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
}

export default Wall;
