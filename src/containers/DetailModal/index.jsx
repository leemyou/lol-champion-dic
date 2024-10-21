import { Box, Chip, Dialog, DialogContent, Typography } from "@mui/material";
import React, { useState } from "react";

export const DetailModal = ({
  bgImg = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
  champName = "아트록스",
  champTitle = "다르킨의 검",
  champLore = "한때는 공허에 맞서 싸웠던 슈리마의 명예로운 수호자 아트록스와 그의 종족은 결국 공허보다 위험한 존재가 되어 룬테라의 존속을 위협했지만, 교활한 필멸자의 마법에 속아넘어가 패배하게 되었다. 수백 년에 걸친 봉인 끝에, 아트록스는 자신의 정기가 깃든 마법 무기를 휘두르는 어리석은 자들을 타락시키고 육신을 바꾸는 것으로 다시 한번 자유의 길을 찾아내었다. 이제 이전의 잔혹한 모습을 닮은 육체를 차지한 아트록스는 세상의 종말과 오랫동안 기다려온 복수를 열망한다.",
  champTags = ["Fighter"],
}) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    console.log("close");
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"lg"}>
      <DialogContent
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center",
          objectFit: "cover",
          width: "100%",
          height: "80vh",
          padding: 0,
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(45deg, #ffffff, #ffffff42, #fff0)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: {
              xs: "10px",
              sm: "30px",
              md: "50px 52px",
              lg: "70px 72px",
            },
          }}
        >
          <Typography
            variant="h5"
            fontWeight={"regular"}
            sx={{ fontStyle: "italic" }}
          >
            {champTitle}
          </Typography>

          <Typography variant="h2" fontWeight={"bold"}>
            {champName}
          </Typography>
          <div>
            {champTags.map((tag) => (
              <Chip label={`#${tag}`} size="small" />
            ))}
          </div>
          <Typography variant="body1" sx={{ width: "65%", mt: 2 }}>
            {champLore}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
