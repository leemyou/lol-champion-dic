import React from "react";
import { ChampDetail } from "./style";
import { useCustomTheme } from "@/hooks";
import type { championData } from "@/containers";
import {
  Box,
  Chip,
  DialogContent,
  IconButton,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  isLoading: boolean;
  champData: championData;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  champData,
  isLoading,
}) => {
  const { isThemeLight } = useCustomTheme();
  const screen = useTheme();

  const isFullScreenXS = useMediaQuery(screen.breakpoints.down("sm")); // full screen의 breakpoints를 걸어주기 위한 코드

  return (
    <ChampDetail
      open={isOpen}
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

          {isLoading ? (
            <>
              <Skeleton variant="rounded" width={"60%"} height={20} />
              <Skeleton
                variant="rounded"
                width={"50%"}
                height={50}
                sx={{ mt: 2, mb: 2 }}
              />
              <Skeleton variant="text" width={"30%"} height={40} />
              <Skeleton
                variant="rounded"
                sx={{ width: { xs: "100%", sm: "65%" }, mt: 2 }}
                height={200}
              />
            </>
          ) : (
            <>
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
                      key={`${champData.champId}_${tag}`}
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
            </>
          )}
        </Box>
      </DialogContent>
    </ChampDetail>
  );
};
