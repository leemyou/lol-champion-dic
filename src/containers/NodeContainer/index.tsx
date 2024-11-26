import React, { useCallback, useEffect, useMemo, useRef } from "react";
import baseRegionData from "@assets/data/baseRegionData.json";
import championRegionData from "@assets/data/championRegion.json";
import championRelationData from "@assets/data/championRelation.json";
import { CAMERA_DISTANCE } from "@/constants";
import {
  champListToChampNode,
  checkLanguageEng,
  createLowResTexture,
} from "@/utils";
import { AlertEnum, RelationEnums } from "@/enums";
import { useAlert, useFilter, useModal, useSearch } from "@/hooks";
import { useChampionList } from "@/apis";
import ForceGraph3D, { NodeObject } from "react-force-graph-3d";
import * as THREE from "three";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/addons/renderers/CSS2DRenderer.js";

export const NodeContainer: React.FC = () => {
  const extraRenderers = [new CSS2DRenderer()];

  const fgRef = useRef<any>();

  const { openModal } = useModal();
  const { onAlertOpen } = useAlert();
  const { language, nodeLinks } = useFilter();
  const { searchParams } = useSearch();
  const { data: champList, isLoading } = useChampionList({
    language: language,
  });

  // 그래프 데이터 처리 함수
  const processGraphData = useMemo(() => {
    if (isLoading) {
      return { nodes: [{}], links: [{}] };
    }

    try {
      let nodes = [...baseRegionData.nodes];

      // 챔피언 노드 추가
      if (champList) {
        nodes = [...baseRegionData.nodes, ...champListToChampNode(champList)];
      }

      // 노드 ID 맵 생성
      const nodeIdMap = new Set(nodes.map((node) => node.id));

      // 링크 데이터 처리
      const allLinks = [
        ...baseRegionData.links,
        ...championRegionData.links,
        ...championRelationData.links,
      ] as {
        source: string;
        target: string;
        relation: RelationEnums | string;
      }[];

      const validLinks = allLinks
        .filter(
          (link) =>
            nodeIdMap.has(link.source.toString()) &&
            nodeIdMap.has(link.target.toString()) &&
            (!nodeLinks || nodeLinks.includes(link.relation))
        )
        .map((link) => ({
          ...link,
          source: link.source.toString(),
          target: link.target.toString(),
        }));

      console.log("validLinks :", validLinks);

      // 필터링된 링크에서 사용되는 노드만 포함
      const usedNodeIds = new Set(
        validLinks.flatMap((link) => [link.source, link.target])
      );
      const filteredNodes = nodes.filter((node) => usedNodeIds.has(node.id));

      let returnLinks = [...validLinks];

      return {
        nodes: filteredNodes,
        links: returnLinks,
      };
    } catch (error) {
      console.error("Error processing graph data:", error);

      onAlertOpen({
        message: "데이터를 가져오는데 실패했습니다. 나중에 다시 시도해주세요.",
        alertType: AlertEnum.ERROR,
      });

      return {
        nodes: [{}],
        links: [{}],
      };
    }
  }, [champList, nodeLinks]);

  console.log(processGraphData);

  // 검색 기능
  const handleSearch = useCallback(() => {
    if (!processGraphData?.nodes?.length || !searchParams) return;

    const node = processGraphData.nodes.find((value: NodeObject) => {
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
  }, [processGraphData, searchParams]);

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
    if (searchParams && processGraphData?.nodes?.length) {
      handleSearch();
    }
  }, [searchParams, processGraphData, handleSearch]);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={processGraphData}
      extraRenderers={extraRenderers as unknown as THREE.Renderer[]}
      nodeThreeObject={(node) => {
        if (node.img === "") {
          const nodeEl = document.createElement("div");
          nodeEl.textContent = node.id?.toString() || "";
          nodeEl.style.color = node.color;
          nodeEl.className = "region-node-label";
          return new CSS2DObject(nodeEl);
        } else {
          const lowResTexture = createLowResTexture(node.img, 0.25);
          const material = new THREE.SpriteMaterial({ map: lowResTexture });
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(12, 12, 12);

          new THREE.TextureLoader().load(node.img, (highResTexture) => {
            highResTexture.colorSpace = THREE.SRGBColorSpace;
            material.map = highResTexture;
            material.needsUpdate = true;
          });

          return sprite;
        }
      }}
      backgroundColor="#ffffff00"
      onNodeClick={handleClickNode}
      linkOpacity={0.8}
      linkAutoColorBy={"relation"}
    />
  );
};
