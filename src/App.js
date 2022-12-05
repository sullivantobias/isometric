import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";
import Wall from "./components/Box";

import "./App.scss";

function App() {
  const CameraDolly = () => {
    const vec = new THREE.Vector3();

    useFrame((state) => {
      const step = 0.1;
      const x = 5;
      const y = 5;
      const z = 5;

      state.camera.position.lerp(vec.set(x, y, z), step);
      state.camera.lookAt(0, 0, 0);
    });

    return null;
  };

  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.2} />
        <directionalLight />
        <OrthographicCamera makeDefault zoom={55} />
        <gridHelper args={[10, 10, `red`, `yellow`]} />
        <Wall position={[0, 2, 5]} />
        <Wall position={[0, 2, -5]} />
        <CameraDolly />
      </Canvas>
    </div>
  );
}

export default App;
