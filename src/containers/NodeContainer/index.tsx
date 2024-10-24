import React, { useMemo } from "react";
import { useChampionList } from "@/apis";
import { champListToChampNode } from "@/utils/champion";
import ForceGraph3D, { NodeObject } from "react-force-graph-3d";
import * as THREE from "three";
import { useModal } from "@/hooks/useModal";
import { useFilter } from "@/hooks/useFilter";

export const NodeContainer: React.FC = () => {
  const { openModal } = useModal();

  const { language } = useFilter();

  const { data: champList } = useChampionList({ language: language });

  // champList가 없는 경우, 빈 배열을 반환
  const championList = useMemo(() => {
    return champList ? champListToChampNode(champList) : [];
  }, [champList]);

  // 그래프 데이터
  const gData = useMemo(() => {
    return !championList.length
      ? { nodes: [], links: [] } // championList가 null일 경우, 빈 값 반환
      : {
          nodes: championList,
          links: championList.map((id) => ({
            source: id,
            target: championList[Math.round(Math.random())].id,
          })),
        };
  }, [championList]);

  // 노드 렌더링 함수
  const handleNodeThreeObject = ({ img }: { img: string }) => {
    const imgTexture = new THREE.TextureLoader().load(`${img}`);
    imgTexture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: imgTexture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(12, 12, 12);

    return sprite;
  };

  const handleClickNode = (node: NodeObject) => {
    return !node.id
      ? alert(
          "챔피언 상세 정보를 불러오는데에 실패했습니다! 나중에 다시 시도해주세요."
        )
      : openModal(node.id as string);
  };

  return (
    <ForceGraph3D
      graphData={gData}
      nodeThreeObject={handleNodeThreeObject}
      backgroundColor="#ffffff00"
      onNodeClick={handleClickNode}
      linkOpacity={1}
      linkWidth={0.5}
    />
  );
};
