import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, useBounds } from "@react-three/drei";
import Floor from "./components/3DSceneComponents/Floor";
import Light from "./components/3DSceneComponents/Light";
import Camera from "./components/3DSceneComponents/Camera";
import Picture from "./components/3DSceneComponents/Picture";
import ModelAvatar from "./components/3DSceneComponents/ModelAvatar";
import Cards from "./components/MainComponents/Cards";
import Arrows from "./components/MainComponents/Arrows";
import Section from "./components/MainComponents/Section";

import "./App.scss";
import Scene from "./components/3DSceneComponents/Scene";

const SECTIONS = [
  {
    title: "Compositing Gallery",
    children: (
      <Cards
        cards={[
          "images/mammouth.jpg",
          "images/ampoules.jpg",
          "images/mars.jpg",
        ]}
      />
    ),
    anchorTarget: `#1`,
  },
  {
    title: "3D gallery view",
    anchorTarget: `#2`,
    isButton: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "Global gallery view",
    anchorTarget: `#0`,
    isButton: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

function App() {
  const [page, setPage] = useState(0);
  const [avatarPosition, setAvatarPosition] = useState([0, 2, 0]);
  const [avatarRotation, setAvatarRotation] = useState(0);

  const handleClickFloor = (evt) =>
    setAvatarPosition([evt.point.x, 0, evt.point.z]);

  const handleAvatarMovements = (evt) => {
    setAvatarPosition([evt.object.position.x + 2, 2, 0]);
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

  const Page = () => {
    const canvas = (
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

        <Scene />
      </Canvas>
    );

    const onClickHandler = () => setPage(1);

    const mainPage = (
      <div className="MainPage">
        {SECTIONS.map(
          ({ title, children, anchorTarget, description, isButton }, index) => (
            <Section
              key={index}
              onClick={onClickHandler}
              isButton={isButton}
              description={description}
              id={index}
              title={title}
            >
              {children}
              <Arrows revert={index === 2} anchor={anchorTarget} />
            </Section>
          )
        )}
      </div>
    );

    return page === 1 ? canvas : mainPage;
  };

  return <div className="App">{Page()}</div>;
}

export default App;
