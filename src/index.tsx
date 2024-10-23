import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "./styles/ThemeMuiStyle";
import { RecoilRoot, useRecoilValue } from "recoil";
import { ThemeEnums } from "./enums/theme";
import { themeState } from "./recoils/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// getElementById가 null이 아님을 보장
const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

// ThemeProvider 컴포넌트를 사용하여 테마를 결정하는 함수형 컴포넌트 생성
const AppWithTheme: React.FC = () => {
  const theme: ThemeEnums = useRecoilValue(themeState);

  // react query
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme === ThemeEnums.LIGHT ? LightTheme : DarkTheme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppWithTheme />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
