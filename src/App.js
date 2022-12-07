import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Floor from "./components/Floor";
import Light from "./components/Light";
import Avatar from "./components/Avatar";

import "./App.scss";
import Camera from "./components/Camera";

function App() {
  return (
    <div className="App">
      <Canvas shadows>
        <Camera />
        <OrbitControls maxPolarAngle="1" minPolarAngle="1" />
        <Floor position={[0, 0, 0]} size={[20, 20]} />
        <Light isHelper position={[10, 10, 10]} />
        <Avatar position={[0, 1, 0]} size={[2, 2, 2]} />
      </Canvas>
    </div>
  );
}

export default App;
