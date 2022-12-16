import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, useBounds } from "@react-three/drei";
import Floor from "./components/Floor";
import Light from "./components/Light";
import Camera from "./components/Camera";
import Picture from "./components/PIcture";
import ModelAvatar from "./components/ModelAvatar";

import "./App.scss";

function App() {
  const [avatarPosition, setAvatarPosition] = useState([0, 0, 0]);
  const [avatarRotation, setAvatarRotation] = useState(0);

  const handleClickFloor = (evt) =>
    setAvatarPosition([evt.point.x, 0, evt.point.z]);

  const handleAvatarMovements = (evt) => {
    setAvatarPosition([evt.object.position.x + 2, 0, 0]);
    setAvatarRotation(4.5);
  };

  const SelectToZoom = ({ children }) => {
    const api = useBounds();

    return (
      <group
        onClick={(evt) => {
          api.refresh(evt.object);

          handleAvatarMovements(evt);

          setTimeout(() => {
            api.fit();
          }, 600);
        }}
        onPointerMissed={(evt) =>
          api.to({ position: [20, 20, 20], target: [0, 0, 0] })
        }
      >
        {children}
      </group>
    );
  };

  return (
    <div className="App">
      <Canvas shadows>
        {/* camera and control */}
        <Camera position={[20, 20, 20]} />
        <OrbitControls makeDefault maxPolarAngle="1" minPolarAngle="1" />
        {/* light */}
        <Light position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Bounds clip observe margin={2}>
            <SelectToZoom>
              <Picture position={[-10, 5, 0]} />
            </SelectToZoom>
          </Bounds>
        </Suspense>

        <Suspense fallback={null}>
          <ModelAvatar rotationY={avatarRotation} position={avatarPosition} />
        </Suspense>

        <Floor onClick={(evt) => handleClickFloor(evt)} size={[20, 20, 20]} />
      </Canvas>
    </div>
  );
}

export default App;
