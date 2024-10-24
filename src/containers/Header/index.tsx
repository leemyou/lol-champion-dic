import React, { useState } from "react";
import { StyledHeader } from "./style";
import { SettingsRounded, DarkModeRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { useCustomTheme } from "@/hooks/useCustomTheme";
import { FilterDrawer } from "../FilterDrawer";

export const Header: React.FC = () => {
  const { onChangeTheme } = useCustomTheme();

  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const onModeChange = () => {
    onChangeTheme();
  };

  return (
    <>
      <StyledHeader style={{ borderBottom: ".5px solid #95959539" }}>
        <IconButton onClick={onModeChange}>
          <DarkModeRounded />
        </IconButton>

        <IconButton onClick={handleDrawerOpen}>
          <SettingsRounded />
        </IconButton>
      </StyledHeader>

      <FilterDrawer drawerOpen={isOpen} onDrawerClose={handleDrawerClose} />
    </>
  );
};
