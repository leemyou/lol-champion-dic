import React from "react";
import {
  Chip,
  Grid2,
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

export const Main = () => {
  const handleSearch = () => {
    console.log("search");
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      // 엔터 키가 눌렸을 때 실행할 동작
      handleSearch();
    }
  };

  const handleDelete = () => {
    console.log("run delete");
  };

  return (
    <Grid2
      container
      columns={{ xs: 6, sm: 8, md: 12 }}
      sx={{
        mx: {
          xs: "16px",
          sm: "90px",
          md: "120px",
          lg: "200px",
        },
      }}
    >
      <Grid2 size={{ xs: 6, md: 8 }} sx={{ mx: "auto", mb: "12px" }}>
        <OutlinedInput
          fullWidth
          variant="outlined"
          placeholder="Search"
          onKeyDown={handleEnter}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchRounded />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid2>

      <Grid2
        size={{ xs: 6, md: 8 }}
        sx={{ mx: "auto", mb: { xs: "48px", sm: "64px", md: "100px" } }}
      >
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Chip label="#전사" onDelete={handleDelete} />
          <Chip label="#근거리 챔피언" onDelete={handleDelete} />
        </Box>
      </Grid2>

      <Grid2 size={12}>
        <div style={{ backgroundColor: "blue" }}>그리드 들어올 자리</div>
      </Grid2>
    </Grid2>
  );
};
