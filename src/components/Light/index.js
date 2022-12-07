import React, { useRef } from "react";

import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";

function Light({ position, isHelper }) {
  const light = useRef();

  useHelper(light, SpotLightHelper, "cyan");

  return (
    <spotLight
      castShadow
      ref={isHelper && light}
      args={["white", 1, 100]}
      position={position}
    />
  );
}

export default Light;
