import React, { useRef } from "react";
import { CameraHelper } from "three";

import { useHelper, PerspectiveCamera } from "@react-three/drei";

function Camera({ positionis, isHelper }) {
  const camera = useRef();

  useHelper(camera, CameraHelper, "cyan");

  return (
    <PerspectiveCamera
      ref={isHelper && camera}
      position={[20, 20, 20]}
      makeDefault
    />
  );
}

export default Camera;
