import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, useBounds } from "@react-three/drei";
import Floor from "./components/Floor";
import Light from "./components/Light";
import Avatar from "./components/Avatar";
import Camera from "./components/Camera";
import Picture from "./components/PIcture";

import "./App.scss";

function App() {
  const [avatarPosition, setAvatarPosition] = useState([0, 1, 0]);
  const handleClickFloor = (evt) =>
    setAvatarPosition([evt.point.x, 1, evt.point.z]);

  const handleClickPicture = (evt, api) => {
    setAvatarPosition([evt.point.x + 2, 1, evt.point.z]);

    api.refresh(evt.object).fit();
  };

  const SelectToZoom = ({ children }) => {
    const api = useBounds();

    return (
      <group
        onClick={(evt) => handleClickPicture(evt, api)}
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
        <Bounds clip observe margin={2}>
          <SelectToZoom>
            <Picture position={[-10, 3, 0]} />
          </SelectToZoom>
        </Bounds>

        <Floor onClick={(evt) => handleClickFloor(evt)} size={[20, 20, 20]} />
        <Avatar position={avatarPosition} size={[2, 2, 2]} />
      </Canvas>
    </div>
  );
}

export default App;
