import React, { useEffect, useMemo, useRef } from "react";
import { StyledNode, StyledNodeContainer } from "./sytle";
import RelationGraph, {
  RelationGraphComponent,
  RGJsonData,
  RGOptions,
} from "relation-graph/react";
import champRelation from "../../assets/data/champRelation.json";

type NodeContainerProps = {};

export const NodeContainer: React.FC = ({}: NodeContainerProps) => {
  const graphRef = useRef<RelationGraphComponent | null>(null);

  // useMemo에 넣어 반복되는 그래프 옵션값 최적화
  const graphOptions: RGOptions = useMemo(() => {
    return {
      debug: false,
      defaultNodeBorderWidth: 0,
      defaultNodeColor: "rgba(238, 178, 94, 1)",
      allowSwitchLineShape: true,
      allowSwitchJunctionPoint: true,
      backgroundColor: "rgba(0,0,0,0)", // 배경색을 투명하게 함으로써, 모드에 영향 없도록.
      defaultLineShape: 1,
      layouts: [
        {
          label: "Auto Layout",
          layoutName: "force",
          layoutClassName: "seeks-layout-force",
        },
      ],
      defaultJunctionPoint: "border",
      allowShowMiniToolBar: true,
      allowShowDownloadButton: false,
      allowAutoLayoutIfSupport: false,
      disableDragNode: true,
    };
  }, []);

  const setGraphData = async () => {
    const __graph_json_data: RGJsonData = champRelation;
    const graphInstance = graphRef.current?.getInstance();
    await graphInstance?.setJsonData(__graph_json_data);
  };

  useEffect(() => {
    setGraphData();
  }, []);

  return (
    <StyledNodeContainer>
      <RelationGraph
        ref={graphRef}
        options={graphOptions}
        nodeSlot={({ node }) => <StyledNode img={`url(${node.data?.icon})`} />}
      />
    </StyledNodeContainer>
  );
};
