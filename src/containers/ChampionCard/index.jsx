import React from "react";
import { Box, Chip, Paper, Typography } from "@mui/material";

export const ChampionCard = ({ name, image, tags }) => {
  console.log(image);
  const test = image.full.split(".");
  const imgUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${test[0]}_0.jpg`;

  return (
    <Paper
      elevation={6}
      sx={{
        position: "relative",
        width: "100%",
        paddingBottom: "100%",
        height: 0,
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "90%",
        backgroundPosition: "top",
        backgroundPositionY: "-10px",
        backgroundColor: "#000",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "20px 10px",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <Typography
          color="#fff"
          fontSize={{ xs: 24, md: 30 }}
          sx={{ lineHeight: "normal" }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {tags.map((tag) => (
            <Chip label={`#${tag}`} size="small" color="grey" />
          ))}
        </Box>
      </div>
    </Paper>
  );
};
