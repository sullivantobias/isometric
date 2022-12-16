import React, { useRef } from "react";
import { CameraHelper } from "three";

import { useHelper, PerspectiveCamera } from "@react-three/drei";

function Camera({ position, isHelper }) {
  const camera = useRef();

  useHelper(camera, CameraHelper, "cyan");

  return (
    <PerspectiveCamera
      ref={isHelper && camera}
      position={position}
      makeDefault
    />
  );
}

export default Camera;
