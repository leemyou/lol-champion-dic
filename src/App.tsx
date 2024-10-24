import React from "react";
import NodeRelation from "./pages/NodeRelation";
import { DetailModal, FilterDrawer } from "./containers";

const App: React.FC = () => {
  return (
    <>
      <NodeRelation />
      <DetailModal />
      <FilterDrawer />
    </>
  );
};

export default App;
