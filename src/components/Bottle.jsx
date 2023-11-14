import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GenerateInitMaterials } from "./utils";

export function Bottle(props) {
  const { cristalMaterial, sodaMaterial, brandMaterial } =
    GenerateInitMaterials();
  const { nodes, materials } = useGLTF("/images/Bottle.glb");

  return (
    <group {...props} dispose={null}>
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
