import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import Floor from "./components/Floor";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <PerspectiveCamera position={[15, 15, 15]} makeDefault />
        <OrbitControls maxPolarAngle="1.57" />
        <Floor position={[0, 0, 0]} size={[15, 15]} />
      </Canvas>
    </div>
  );
}

export default App;
