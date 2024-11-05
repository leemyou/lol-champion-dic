import React, { useState } from "react";
import { StyledHeader } from "./style";

import { useCustomTheme, useSearch } from "@/hooks";
import { FilterDrawer } from "../FilterDrawer";

import {
  SettingsRounded,
  DarkModeRounded,
  SearchRounded,
} from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";

export const Header: React.FC = () => {
  const { onChangeTheme } = useCustomTheme();
  const { onSearch, searchParams } = useSearch();

  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState(searchParams);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const onModeChange = () => {
    onChangeTheme();
  };

  const handleChangeSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <StyledHeader style={{ borderBottom: ".5px solid #95959539" }}>
        <div className="header-search-wrapper">
          <TextField
            id="input-with-sx"
            label=""
            variant="standard"
            color="secondary"
            placeholder="검색어를 입력해주세요"
            value={searchText}
            onKeyDown={handleEnter}
            onChange={handleChangeSearch}
          />
          <SearchRounded
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
            onClick={handleSearch}
          />
        </div>
        <div className="header-btn-wrapper">
          <IconButton onClick={onModeChange}>
            <DarkModeRounded />
          </IconButton>

          <IconButton onClick={handleDrawerOpen}>
            <SettingsRounded />
          </IconButton>
        </div>
      </StyledHeader>

      <FilterDrawer drawerOpen={isOpen} onDrawerClose={handleDrawerClose} />
    </>
  );
};
