import * as THREE from "three";

/**
 * 이미지를 저해상도로 줄여주는 코드
 * @param imgUrl
 * @param scale 축소하고싶은 해상도 %
 * @returns
 */
const createLowResTexture = (imgUrl: string, scale: number): THREE.Texture => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const image = new Image();
  image.src = imgUrl;

  // Canvas를 사용하여 이미지 축소
  const texture = new THREE.Texture(canvas);
  image.onload = () => {
    const width = image.width * scale; // 낮춘 해상도
    const height = image.height * scale;

    canvas.width = width;
    canvas.height = height;

    ctx?.drawImage(image, 0, 0, width, height);
    texture.needsUpdate = true; // THREE.js에서 텍스처 업데이트
  };

  return texture;
};

export { createLowResTexture };
