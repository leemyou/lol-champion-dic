import React, { useEffect, useMemo, useRef } from "react";
import { useChampionList } from "@/apis";
import { champListToChampNode } from "@/utils/champion";
import ForceGraph3D, { NodeObject } from "react-force-graph-3d";
import * as THREE from "three";
import { useModal } from "@/hooks/useModal";
import { useFilter } from "@/hooks/useFilter";
import baseRegionData from "@assets/data/baseRegionData.json";
import championRegionData from "@assets/data/championRegion.json";
import { useSearch } from "@/hooks/useSearch";

export const NodeContainer: React.FC = () => {
  const fgRef = useRef<any>();

  const { openModal } = useModal();

  const { language } = useFilter();
  const { data: champList } = useChampionList({ language: language });
  const { searchParams } = useSearch();

  // 그래프 데이터 구성
  const gData = useMemo(() => {
    return champList
      ? {
          nodes: [...baseRegionData.nodes, ...champListToChampNode(champList)],
          links: [...baseRegionData.links, ...championRegionData.links],
        }
      : baseRegionData;
  }, [champList]);

  // 노드 렌더링 함수
  const handleNodeThreeObject = ({ img }: { img: string }) => {
    const imgTexture = new THREE.TextureLoader().load(`${img}`);
    imgTexture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: imgTexture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(12, 12, 12);
    return sprite;
  };

  // 노드 클릭 이벤트
  const handleClickNode = (node: NodeObject) => {
    return !node.id
      ? alert(
          '"챔피언 상세 정보를 불러오는데에 실패했습니다! 다시 시도해주세요.",'
        )
      : openModal(node.id as string);
  };

  // 검색 기능
  const handleSearch = () => {
    const node = gData.nodes.find(
      (value) => value.id.toLowerCase() === searchParams.toLowerCase()
    ) as NodeObject;

    if (!node) {
      alert("일치하는 검색어가 없습니다!");
      return;
    }

    const distance = 40;
    const distRatio =
      1 + distance / Math.hypot(node.x || 0, node.y || 0, node.z || 0);

    fgRef.current.cameraPosition(
      {
        x: (node.x || 0) * distRatio,
        y: (node.y || 0) * distRatio,
        z: (node.z || 0) * distRatio,
      },
      node,
      3000
    );
  };

  // 검색어가 변할 때 검색 실행
  useEffect(() => {
    if (searchParams) handleSearch();
  }, [searchParams, gData]);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={gData}
      nodeThreeObject={handleNodeThreeObject}
      backgroundColor="#ffffff00"
      onNodeClick={handleClickNode}
      linkOpacity={1}
      linkWidth={0.5}
    />
  );
};
