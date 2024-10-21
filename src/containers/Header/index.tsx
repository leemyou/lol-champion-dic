import React from "react";
import { StyledHeader } from "./style";
import { LanguageRounded, DarkModeRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Header = () => {
  const onLengChange = () => {};
  const onModeChange = () => {};

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
