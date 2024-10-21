import React from "react";
import { DetailModal, Header, Main } from "./containers";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./styles/ThemeMuiStyle";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <Header />
        <Main />
        <DetailModal />
      </ThemeProvider>
    </>
  );
};

export default App;
