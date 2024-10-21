import React from "react";
import { DetailModal, Header, Main } from "./containers";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <DetailModal />
    </>
  );
};

export default App;
