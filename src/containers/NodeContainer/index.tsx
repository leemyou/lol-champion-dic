import React, { useCallback, useEffect, useRef, useState } from "react";
import baseRegionData from "@assets/data/baseRegionData.json";
import championRegionData from "@assets/data/championRegion.json";
import { CAMERA_DISTANCE } from "@/constants";
import { champListToChampNode, checkLanguageEng } from "@/utils";
import { AlertEnum } from "@/enums";
import { useAlert, useFilter, useModal, useSearch } from "@/hooks";
import { type ResChampList } from "@/apis/lol/lol.model";
import { useChampionList } from "@/apis";
import ForceGraph3D, { NodeObject } from "react-force-graph-3d";
import * as THREE from "three";

export const NodeContainer: React.FC = () => {
  const fgRef = useRef<any>();

  const { openModal } = useModal();
  const { onAlertOpen } = useAlert();
  const { language } = useFilter();
  const { searchParams } = useSearch();
  const { data: champList, isLoading } = useChampionList({
    language: language,
  });

  const [graphData, setGraphData] = useState(baseRegionData);

  const processGraphData = useCallback(
    (championList: ResChampList | undefined) => {
      try {
        let nodes = [...baseRegionData.nodes];

        // 챔피언 노드 추가
        if (championList) {
          nodes = [...nodes, ...champListToChampNode(championList)];
        }

        // 노드 ID 맵 생성
        const nodeIdMap = new Set(nodes.map((node) => node.id));

        // 링크 데이터 처리
        const allLinks = [...baseRegionData.links, ...championRegionData.links];
        const validLinks = allLinks
          .map((link) => ({
            // link배열을 새로 만드는 작업
            ...link,
            source: link.source.toString(),
            target: link.target.toString(),
          }))
          .filter(
            (link) => nodeIdMap.has(link.source) && nodeIdMap.has(link.target) // node에 실제로 있는 것들만 link에 남긴다.
          );

        return {
          nodes,
          links: [...baseRegionData.links, ...validLinks],
        };
      } catch (error) {
        console.error("Error processing graph data:", error);

        return {
          nodes: baseRegionData.nodes,
          links: baseRegionData.links,
        };
      }
    },
    []
  );

  // 데이터 업데이트
  useEffect(() => {
    if (isLoading) {
      setGraphData({
        nodes: baseRegionData.nodes,
        links: baseRegionData.links,
      });
      return;
    }

    const newData = processGraphData(champList);
    setGraphData(newData);
  }, [isLoading, champList, processGraphData]);

  // 노드 렌더링 함수
  const handleNodeThreeObject = useCallback(({ img }: { img: string }) => {
    const imgTexture = new THREE.TextureLoader().load(`${img}`);
    imgTexture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: imgTexture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(12, 12, 12);
    return sprite;
  }, []);

  // 검색 기능
  const handleSearch = useCallback(() => {
    if (!graphData?.nodes?.length || !searchParams) return;

    const node = graphData.nodes.find((value: NodeObject) => {
      if (!value?.name) return false;

      const dataValue = checkLanguageEng(value.name)
        ? value.name.toLowerCase()
        : value.name;
      const searchValue = checkLanguageEng(searchParams)
        ? searchParams.toLowerCase()
        : searchParams;

      return dataValue === searchValue;
    }) as NodeObject;

    if (!node) {
      onAlertOpen({
        message: "일치하는 검색어가 없습니다!",
        alertType: AlertEnum.ERROR,
      });
      return;
    }

    const distRatio =
      1 + CAMERA_DISTANCE / Math.hypot(node.x || 0, node.y || 0, node.z || 0);

    fgRef.current?.cameraPosition(
      {
        x: (node.x || 0) * distRatio,
        y: (node.y || 0) * distRatio,
        z: (node.z || 0) * distRatio,
      },
      node,
      2000
    );
  }, [graphData, searchParams]);

  // 노드 클릭 이벤트
  const handleClickNode = useCallback(
    (node: NodeObject) => {
      if (node?.id) {
        openModal(node.id as string);
      } else {
        onAlertOpen({
          message:
            "챔피언 상세 정보를 불러오는데에 실패했습니다! 다시 시도해주세요.",
          alertType: AlertEnum.ERROR,
        });
      }
    },
    [openModal]
  );

  // 검색어 변경시 검색 실행
  useEffect(() => {
    if (searchParams && graphData?.nodes?.length) {
      handleSearch();
    }
  }, [searchParams, graphData, handleSearch]);

  // 그래프 새로고침
  useEffect(() => {
    const fg = fgRef.current;
    if (!isLoading && graphData?.nodes?.length > 0 && fg) {
      // react와 Three.js의 렌더링 타이밍이 틀릴 수 있으므로 잠시 지연 후 새로고침 실행
      const timer = setTimeout(() => {
        fg.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [graphData, isLoading]);

  useEffect(() => {});

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={graphData}
      nodeThreeObject={handleNodeThreeObject}
      backgroundColor="#ffffff00"
      onNodeClick={handleClickNode}
      linkOpacity={1}
      numDimensions={3}
      linkAutoColorBy={"#888888"}
    />
  );
};
