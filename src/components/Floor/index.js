import React from "react";

import { DoubleSide } from "three";

function Floor({ position, size }) {
  return (
    <>
      <gridHelper args={[...size, `red`, `black`]} />

      <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={size} />

        <meshBasicMaterial color="cyan" side={DoubleSide} />
      </mesh>
    </>
  );
}

export default Floor;
