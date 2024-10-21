import React from "react";
import "./App.css";
import { DetailModal, Header, Main } from "./containers";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <DetailModal />
    </div>
  );
};

export default App;
