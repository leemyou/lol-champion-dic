import React from "react";
import { StyledDrawer } from "./style";
import {
  Box,
  Divider,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

type FilterDrawerProps = {
  drawerOpen: boolean;
  onDrawerClose: () => void;
};

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  drawerOpen = false,
  onDrawerClose,
}: FilterDrawerProps) => {
  const handleClose = () => {
    onDrawerClose && onDrawerClose();
  };

  return (
    <StyledDrawer open={drawerOpen} anchor="right" onClose={onDrawerClose}>
      <Box
        className="drawer-wrapper"
        sx={{
          width: {
            xs: "100vw",
            sm: "300px",
          },
        }}
      >
        <div className="drawer-wrapper-top">
          <Typography variant="h6" fontWeight={"bold"}>
            SETTING
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseRounded />
          </IconButton>
        </div>
        <div className="drawer-wrapper-middle">
          <p>FILTER</p>
        </div>
        <div className="drawer-wrapper-bottom">
          <div className="drawer-wrapper-bottom-lang">
            <p>LANGUAGE</p>
            <Select fullWidth size="small" variant="outlined" color="secondary">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <Divider />
          <div className="drawer-wrapper-bottom-footer">
            <Typography color="secondary">@emyo.155</Typography>
            <Typography color="secondary">
              https://github.com/leemyou
            </Typography>
          </div>
        </div>
      </Box>
    </StyledDrawer>
  );
};
