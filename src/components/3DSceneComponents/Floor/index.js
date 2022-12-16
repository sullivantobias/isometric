import React from "react";

import { DoubleSide } from "three";
import { Plane, useTexture } from "@react-three/drei";

const name = (type) => `textures/floor/Metal_ArtDeco_Tiles_001_${type}.jpg`;

function Floor({ position, size, onClick, isHelper }) {
  const [colorMap, normalMap, roughnessMap, aoMap] = useTexture([
    name("baseColor"),
    name("normal"),
    name("roughness"),
    name("ambientOcclusion"),
  ]);

  return (
    <>
      {isHelper && <gridHelper args={[...size, `red`, `black`]} />}
      <Plane
        args={size}
        receiveShadow
        position={position}
        rotation={[Math.PI / 2, 0, 0]}
        onClick={onClick}
      >
        <meshPhongMaterial
          attach="material"
          side={DoubleSide}
          displacement={0.2}
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </Plane>
    </>
  );
}

export default Floor;
