import React from "react";
import NodeRelation from "./pages/NodeRelation";
import { DetailModal } from "./containers";

const App: React.FC = () => {
  return (
    <>
      <NodeRelation />
      <DetailModal />
    </>
  );
};

export default App;
