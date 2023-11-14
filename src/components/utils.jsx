import * as THREE from "three";

export const GenerateInitMaterials = () => {
  const falloutBoyTexture = new THREE.TextureLoader().load(
    "/public/images/FalloutBoy.png"
  );
  falloutBoyTexture.flipY = false;

  const cristalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x8c8c8c,
    metalness: 0.0,
    roughness: 0.2,
    transparent: true,
    opacity: 1,
    envMapIntensity: 1.0,
    transmission: 1,
  });

  const sodaMaterial = new THREE.MeshStandardMaterial({
    color: 0x000,
    roughness: 1,
    opacity: 1,
    metalness: 1,
    transparent: false,
  });

  const brandMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.5,
    metalness: 1,
    envMapIntensity: 1,
    transparent: true,
    map: falloutBoyTexture,
  });

  return { cristalMaterial, sodaMaterial, brandMaterial };
};
