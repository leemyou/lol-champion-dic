import { Header, NodeContainer } from "@/containers";
import React from "react";

type Props = {};

const NodeRelation: React.FC = ({}: Props) => {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <NodeContainer />
    </div>
  );
};

export default NodeRelation;
