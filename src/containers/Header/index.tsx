import React from "react";
import { StyledHeader } from "./style";
import { LanguageRounded, DarkModeRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ThemeEnums } from "@enums/theme";
import { useRecoilState } from "recoil";
import { themeState } from "@recoils/theme";

export const Header: React.FC = () => {
  const { LIGHT, DARK } = ThemeEnums;
  const [mode, setMode] = useRecoilState(themeState);

  const onLengChange = () => {};

  const onModeChange = () => {
    setMode(mode === LIGHT ? DARK : LIGHT);
  };

  return (
    <StyledHeader>
      <IconButton onClick={onLengChange}>
        <LanguageRounded />
      </IconButton>

      <IconButton onClick={onModeChange}>
        <DarkModeRounded />
      </IconButton>
    </StyledHeader>
  );
};
