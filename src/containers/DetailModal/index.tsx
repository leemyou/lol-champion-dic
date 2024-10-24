import React, { useMemo } from "react";
import { ChampDetail } from "./style";
import { Cancel } from "@mui/icons-material";
import {
  Box,
  Chip,
  DialogContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useModal } from "@/hooks/useModal";
import { useChampionDetail } from "@/apis";
import { IChampionDetail } from "@/apis/lol/lol.model";
import { useCustomTheme } from "@/hooks/useCustomTheme";

type championData = {
  bgImgMb: string;
  bgImg: string;
  champName: string;
  champTitle: string;
  champLore: string;
  champTags: string[];
};

type DetailModalProps = {};

export const DetailModal: React.FC<DetailModalProps> = ({}) => {
  const { closeModal, open, championId } = useModal();
  const { isThemeLight } = useCustomTheme();

  const { data } = useChampionDetail({ champId: championId });

  const screen = useTheme();
  const isFullScreenXS = useMediaQuery(screen.breakpoints.down("sm")); // full screen의 breakpoints를 걸어주기 위한 코드

  const champData: championData = useMemo(() => {
    const champion = (data?.data?.[championId] as IChampionDetail) || {};
    return {
      bgImgMb: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`,
      bgImg: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`,
      champName: champion.name || "",
      champTitle: champion.title || "",
      champLore: champion.lore || "",
      champTags: champion.tags || [],
    };
  }, [championId, data]);

  const handleClose = () => {
    closeModal();
  };

  return (
    <ChampDetail
      open={open}
      onClose={handleClose}
      fullWidth={true}
      maxWidth={"lg"}
      fullScreen={isFullScreenXS}
    >
      <DialogContent
        className="dialog-content"
        sx={{
          backgroundImage: `url(${
            isFullScreenXS ? champData.bgImgMb : champData.bgImg
          })`,
          height: { xs: "100vh", sm: "90vh", md: "80vh" },
        }}
      >
        <Box
          className="dialog-content-box"
          sx={{
            padding: {
              xs: "20px 16px",
              sm: "30px",
              md: "50px 52px",
              lg: "70px 72px",
            },
            background: isThemeLight
              ? "linear-gradient(45deg, #ffffff, #ffffff42, #fff0)"
              : "linear-gradient(45deg, #000000, #00000042, #fff0)",
          }}
        >
          <IconButton
            className="dialog-content-box-cancle"
            size="large"
            onClick={handleClose}
            children={<Cancel />}
          />
          <Typography
            className="dialog-content-box-subtitle"
            variant="h5"
            fontWeight={"regular"}
            textAlign={"left"}
          >
            {champData?.champTitle}
          </Typography>

          <Typography variant="h2" fontWeight={"bold"} textAlign={"left"}>
            {champData.champName}
          </Typography>
          {champData.champTags.length > 0 && (
            <div className="dialog-content-box-tags">
              {champData.champTags?.map((tag: string) => (
                <Chip
                  label={`#${tag}`}
                  size="small"
                  itemType="detail"
                  key={`${championId}_${tag}`}
                />
              ))}
            </div>
          )}
          <Typography
            variant="body1"
            textAlign={"left"}
            sx={{ width: { xs: "100%", sm: "65%" }, mt: 2 }}
          >
            {champData.champLore}
          </Typography>
        </Box>
      </DialogContent>
    </ChampDetail>
  );
};
