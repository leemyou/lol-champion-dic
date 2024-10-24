import React from "react";
import { StyledHeader } from "./style";
import { LanguageRounded, DarkModeRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { useCustomTheme } from "@/hooks/useCustomTheme";

export const Header: React.FC = () => {
  const { onChangeTheme } = useCustomTheme();

  const onLengChange = () => {};

  const onModeChange = () => {
    onChangeTheme();
  };

  return (
    <StyledHeader style={{ borderBottom: ".5px solid #95959539" }}>
      <IconButton onClick={onLengChange}>
        <LanguageRounded />
      </IconButton>

      <IconButton onClick={onModeChange}>
        <DarkModeRounded />
      </IconButton>
    </StyledHeader>
  );
};
