import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Floor from "./components/Floor";
import Light from "./components/Light";
import Avatar from "./components/Avatar";
import Camera from "./components/Camera";
import Picture from "./components/PIcture";

import "./App.scss";

function App() {
  const [avatarPosition, setAvatarPosition] = useState([0, 1, 0]);
  const [isClicked, setIsClicked] = useState(false);
  const handleClickFloor = (evt) =>
    setAvatarPosition([evt.point.x, 1, evt.point.z]);
  const handleClickPicture = (evt) => {
    setAvatarPosition([evt.point.x + 2, 1, evt.point.z]);

    setTimeout(() => setIsClicked((prev) => !prev), 300);
  };

  return (
    <div className="App">
      <Canvas shadows>
        {/* camera and control */}
        <Camera position={[20, 20, 20]} />
        <OrbitControls maxPolarAngle="1" minPolarAngle="1" />
        {/* light */}
        <Light position={[10, 10, 10]} />

        <Floor onClick={(evt) => handleClickFloor(evt)} size={[20, 20, 20]} />
        <Avatar position={avatarPosition} size={[2, 2, 2]} />
        <Picture
          onClick={(evt) => handleClickPicture(evt)}
          position={[-10, 3, 0]}
        />
      </Canvas>
      {isClicked && (
        <div className="picture">
          <img src="https://loremflickr.com/640/360" />
        </div>
      )}
    </div>
  );
}

export default App;
