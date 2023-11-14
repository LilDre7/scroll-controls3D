import { Canvas } from "@react-three/fiber";
import { Bottle } from "./Bottle";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="container-3d">
      <Canvas className={"canvas"} camera={{ fov: 35, position: [0, 2, 10] }}>
        <ambientLight intensity={0.9} color={0xffffff} />
        <ScrollControls pages={8} damping={0.7}>
          <Bottle />
        </ScrollControls>
        <OrbitControls target={[0, 2, 0]} enableZoom={false} />
        <Environment files={"/images/snowy_park_01_1k.hdr"} blur={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene;
