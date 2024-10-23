import { useChampionList } from "@/apis";
import { champListToChampNode } from "@/utils/champion";
import React, { useMemo } from "react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

export const NodeContainer: React.FC = () => {
  // 챔피언 리스트 가져오기 - 항상 최상위에서 Hooks 호출
  const { data: champList, isLoading, isError } = useChampionList();

  // champList가 없는 경우에도 빈 배열을 반환하여 안전하게 처리
  const test = useMemo(() => {
    return champList ? champListToChampNode(champList) : [];
  }, [champList]);

  // 그래프 데이터 생성
  const gData = useMemo(() => {
    if (!test.length) return { nodes: [], links: [] }; // test가 없을 경우 빈 데이터 반환
    return {
      nodes: test,
      links: test.map((id) => ({
        source: id,
        target: test[Math.round(Math.random())].id,
      })),
    };
  }, [test]);

  // 노드 렌더링 함수 (이미지 포함)
  const handleNodeThreeObject = ({ img }: { img: string }) => {
    const imgTexture = new THREE.TextureLoader().load(`${img}`);
    imgTexture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: imgTexture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(12, 12, 12); // 크기 조정

    return sprite;
  };

  // 렌더링 부분에서 로딩, 에러 처리
  if (isLoading) {
    return <div>Loading...</div>; // 데이터 로딩 중에 로딩 화면 표시
  }

  if (isError || !champList) {
    return <div>Error loading champion list</div>; // 에러 발생 시 메시지 표시
  }

  return (
    <ForceGraph3D
      graphData={gData}
      nodeThreeObject={handleNodeThreeObject}
      backgroundColor="#ffffff00"
      linkColor={"#ccc"}
    />
  );
};
