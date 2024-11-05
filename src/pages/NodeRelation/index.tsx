import React from "react";
import { Header, NodeContainer } from "@/containers";

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
