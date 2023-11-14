import gsap, { Power4 } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import {
  GenerateInitMaterials,
  GenerateAnimatins,
  LoadTextures,
} from "./utils";
import { useFrame, useThree } from "@react-three/fiber";

export function Bottle(props) {
  const { cristalMaterial, sodaMaterial, brandMaterial } =
    GenerateInitMaterials();
  const { nodes, materials } = useGLTF("/images/Bottle.glb");

  const scene = useThree((state) => state.scene);
  const timeline = gsap.timeline({
    defaults: { duration: 2, ease: Power4.easeOut },
  });
  const scroll = useScroll();

  const colorsMaterial = {
    cristal: "#8c8c8c",
    soda: "#000",
  };

  useLayoutEffect(() => {
    const textures = LoadTextures([
      "FalloutBoy",
      "Classic",
      "Quantum",
      "Sunset",
    ]);
    const animations = GenerateAnimatins(
      scene,
      colorsMaterial,
      cristalMaterial,
      sodaMaterial,
      brandMaterial,
      textures
    );
    animations.forEach((animation) =>
      timeline.to(
        animation.target,
        { ...animation.animationsProperties },
        animation.pointTime
      )
    );
  }, []);

  useFrame(() => {
    if (timeline) {
      timeline.seek(timeline.duration() * scroll.offset);
    }
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
