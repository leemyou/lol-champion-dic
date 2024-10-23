import React, { useMemo } from "react";
import { useChampionList } from "@/apis";
import { champListToChampNode } from "@/utils/champion";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

export const NodeContainer: React.FC = () => {
  const { data: champList } = useChampionList();

  // champList가 없는 경우, 빈 배열을 반환
  const test = useMemo(() => {
    return champList ? champListToChampNode(champList) : [];
  }, [champList]);

  // 그래프 데이터
  const gData = useMemo(() => {
    return !test.length
      ? { nodes: [], links: [] } // test가 null일 경우, 빈 값 반환
      : {
          nodes: test,
          links: test.map((id) => ({
            source: id,
            target: test[Math.round(Math.random())].id,
          })),
        };
  }, [test]);

  // 노드 렌더링 함수
  const handleNodeThreeObject = ({ img }: { img: string }) => {
    const imgTexture = new THREE.TextureLoader().load(`${img}`);
    imgTexture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: imgTexture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(12, 12, 12);

    return sprite;
  };

  return (
    <ForceGraph3D
      graphData={gData}
      nodeThreeObject={handleNodeThreeObject}
      backgroundColor="#ffffff00"
      linkColor={"#ccc"}
    />
  );
};
