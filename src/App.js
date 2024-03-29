import { useState, useCallback, Suspense } from "react";

import { UilVolume, UilVolumeMute } from "@iconscout/react-unicons";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, useBounds } from "@react-three/drei";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import useSound from "use-sound";

import { confParticles } from "./configParticles";

import MainTheme from "./sounds/main.mp3";
import ClickSound from "./sounds/click.mp3";

import Floor from "./components/3DSceneComponents/Floor";
import Light from "./components/3DSceneComponents/Light";
import Camera from "./components/3DSceneComponents/Camera";
import Picture from "./components/3DSceneComponents/Picture";
import ModelAvatar from "./components/3DSceneComponents/ModelAvatar";
import Arrows from "./components/MainComponents/Arrows";
import Section from "./components/MainComponents/Section";
import Scene from "./components/3DSceneComponents/Scene";
import Icon from "./components/MainComponents/Icon";
import MouseTrail from "./components/MainComponents/utils/gsap/MouseTrail";
import Gallery from "./components/MainComponents/Gallery";
import Header from "./components/MainComponents/Structures/Header";

import "./App.scss";
import MovableImage from "./components/MainComponents/utils/gsap/MouvableIMage";

const SECTIONS = [
  {
    title: "Gallery",

    anchorTarget: `#1`,
    timeLineTarget: `#0`,
  },
  {
    children: () => (
      <MovableImage>
        <img className="hoverable" src="images/mars.jpg" alt="" />
      </MovableImage>
    ),
    isRightSection: true,
    title: "3D view",
    anchorTarget: `#2`,
    timeLineTarget: `#1`,
    isButton: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    children: () => (
      <MovableImage>
        <img className="hoverable" src="images/mammouth.jpg" alt="" />
      </MovableImage>
    ),
    isRightSection: true,
    title: "Global view",
    anchorTarget: `#0`,
    timeLineTarget: `#2`,
    isButton: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

function App() {
  const [page, setPage] = useState(0);
  const [avatarPosition, setAvatarPosition] = useState([0, 2, 0]);
  const [avatarRotation, setAvatarRotation] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const [playMainTheme, { pause }] = useSound(MainTheme, {
    volume: 0.2,
  });

  const [playClickSound] = useSound(ClickSound, { volume: 0.4 });

  const onClickHandler = () => {
    playClickSound();
    setPage(1);
  };

  const togglePlayingMainTheme = () => {
    isPlaying ? pause() : playMainTheme();
    setIsPlaying((prev) => !prev);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

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

    const mainPage = (
      <>
        {<Particles init={particlesInit} options={confParticles} />}
        <MouseTrail />

        <div className="MainPage">
          <Icon
            onClick={togglePlayingMainTheme}
            className="SoundIcon"
            iconElement={isPlaying ? <UilVolume /> : <UilVolumeMute />}
          />

          <Header sections={SECTIONS} />

          {SECTIONS.map(
            (
              {
                title,
                children,
                anchorTarget,
                description,
                isButton,
                isRightSection,
              },
              index
            ) => (
              <>
                <Section
                  key={index}
                  onClick={onClickHandler}
                  isButton={isButton}
                  description={description}
                  id={index}
                  title={title}
                  isRightSection={isRightSection}
                  arrows={<Arrows revert={index === 2} anchor={anchorTarget} />}
                >
                  {children && children()}
                </Section>
                {index === 0 && <Gallery />}
              </>
            )
          )}
        </div>
      </>
    );

    return page === 1 ? canvas : mainPage;
  };

  return <div className="App">{Page()}</div>;
}

export default App;
