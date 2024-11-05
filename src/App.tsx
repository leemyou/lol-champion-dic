import React from "react";
import NodeRelation from "./pages/NodeRelation";
import { DetailModal } from "./containers";
import { Notification } from "./components";

const App: React.FC = () => {
  return (
    <>
      <NodeRelation />
      <DetailModal />
      <Notification />
    </>
  );
};

export default App;
