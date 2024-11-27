import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  const { language, filterOptions } = useFilter();
  const { searchParams } = useSearch();
  const { data: champList, isLoading } = useChampionList({ language });

  const [graphData, setGraphData] = useState({
    nodes: [{ id: "", img: "" }],
    links: [{ source: "", target: "" }],
  });

  const nodeLinks = useMemo(
    () => [...filterOptions.relation, ...filterOptions.region],
    [filterOptions.region, filterOptions.relation]
  );

  /**
   * 그래프 데이터 처리 함수
   */
  const processGraphData = useCallback(() => {
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
            nodeIdMap.has(link.source) &&
            nodeIdMap.has(link.target) &&
            (!nodeLinks || nodeLinks.includes(link.relation))
        )
        .map((link) => ({
          ...link,
          source: link.source,
          target: link.target,
        }));

      // // 필터링된 링크에서 사용되는 노드만 포함
      const usedNodeIds = new Set(
        validLinks.flatMap((link) => [link.source, link.target])
      );

      const filteredNodes = nodes.filter((node) => usedNodeIds.has(node.id));

      setGraphData({
        nodes: filteredNodes,
        links: [...validLinks],
      });
      return;
    } catch (error) {
      console.error("Error processing graph data:", error);

      onAlertOpen({
        message: "데이터를 가져오는데 실패했습니다. 나중에 다시 시도해주세요.",
        alertType: AlertEnum.ERROR,
      });

      setGraphData({
        nodes: [{ id: "", img: "" }],
        links: [{ source: "", target: "" }],
      });
      return;
    }
  }, [champList, nodeLinks]);

  /**
   * 검색 시 카메라 이동 함수
   */
  const handleSearch = useCallback(() => {
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

    console.log(node);

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
  }, [searchParams, graphData]);

  /**
   * 노드 클릭 이벤트 함수
   */
  const handleClickNode = (node: NodeObject) => {
    if (node?.id) {
      openModal(node.id as string);
    } else {
      onAlertOpen({
        message:
          "챔피언 상세 정보를 불러오는데에 실패했습니다! 다시 시도해주세요.",
        alertType: AlertEnum.ERROR,
      });
    }
  };

  /**
   * 노드 오브젝트 생성 함수
   */
  const handleNodeObject = useCallback((node: NodeObject) => {
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
  }, []);

  // 그래프 업데이트
  useEffect(() => {
    if (isLoading || nodeLinks.length === 0) {
      setGraphData({
        nodes: [{ id: "", img: "" }],
        links: [{ source: "", target: "" }],
      });
      return;
    }

    processGraphData();
  }, [isLoading, champList, nodeLinks]);

  // 검색어 변경시 검색 실행
  useEffect(() => {
    if (searchParams && graphData?.nodes?.length) {
      handleSearch();
    }
  }, [searchParams, graphData, handleSearch]);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={graphData}
      extraRenderers={extraRenderers as unknown as THREE.Renderer[]}
      nodeThreeObject={handleNodeObject}
      backgroundColor="#ffffff00"
      onNodeClick={handleClickNode}
      linkOpacity={0.8}
      linkAutoColorBy={"relation"}
    />
  );
};
