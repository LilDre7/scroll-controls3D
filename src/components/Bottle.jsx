import gsap, { Power2 } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GenerateInitMaterials } from "./utils";
import { useThree } from "@react-three/fiber";

export function Bottle(props) {
  const { cristalMaterial, sodaMaterial, brandMaterial } =
    GenerateInitMaterials();
  const { nodes, materials } = useGLTF("/images/Bottle.glb");

  const scene = useThree((state) => state.scene);
  const timeline = gsap.timeline({
    defaults: { duration: 1, ease: Power2.easeOut },
  });

  useLayoutEffect(() => {
    const bottleGroup = scene.getObjectByName("BottleGroup");

    timeline.to(
      bottleGroup.rotation,
      {
        y: Math.PI * 2,
      },
      1
    );
    timeline.to(
      bottleGroup.rotation,
      {
        y: -Math.PI * 2,
      },
      2
    );
    timeline.to(
      bottleGroup.rotation,
      {
        y: Math.PI * 2,
      },
      3
    );
  }, []);

  return (
    <group name="BottleGroup" {...props} dispose={null}>
      <mesh
        name="Bottle"
        geometry={nodes.Bottle.geometry}
        material={cristalMaterial}
      />
      <mesh
        name="Soda"
        geometry={nodes.Soda.geometry}
        material={sodaMaterial}
      />
      <mesh
        name="Brand"
        geometry={nodes.Brand.geometry}
        material={brandMaterial}
      />
      <mesh name="Cap" geometry={nodes.Cap.geometry} material={brandMaterial} />
    </group>
  );
}

useGLTF.preload("/images/Bottle.glb");
