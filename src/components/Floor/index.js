import React from "react";

import { DoubleSide } from "three";
import { Plane } from "@react-three/drei";

function Floor({ position, size, onClick, isHelper }) {
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
          color="lightGreen"
          side={DoubleSide}
        />
      </Plane>
    </>
  );
}

export default Floor;
