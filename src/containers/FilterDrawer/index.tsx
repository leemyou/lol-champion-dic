import React, { useMemo, useState } from "react";
import { StyledDrawer } from "./style";
import {
  Box,
  Divider,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { LanguageCodeEnums, LanguageCodeToLanguage } from "@/enums/language";
import { useFilter } from "@/hooks/useFilter";
import { langObjToArr } from "@/utils/filter";

type FilterDrawerProps = {
  drawerOpen: boolean;
  onDrawerClose: () => void;
};

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  drawerOpen = false,
  onDrawerClose,
}: FilterDrawerProps) => {
  const { language, onChangeLanguage } = useFilter();

  const [options, setOptions] = useState({ lang: language, filter: {} });

  const languageArr = useMemo(() => langObjToArr(LanguageCodeToLanguage), []);

  // 검색 최적화 : drawer가 닫힌 후에 state를 저장.
  const handleClose = async () => {
    onChangeLanguage(options.lang);
    onDrawerClose && onDrawerClose();
  };

  const handleChangeLanguage = (e: SelectChangeEvent<string>) => {
    setOptions((prev) => ({
      ...prev,
      lang: e.target.value as unknown as LanguageCodeEnums,
    }));
  };

  return (
    <StyledDrawer open={drawerOpen} anchor="right" onClose={handleClose}>
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
            <Select
              defaultValue={LanguageCodeEnums.en_US}
              value={options.lang}
              fullWidth
              size="small"
              variant="outlined"
              color="secondary"
              onChange={handleChangeLanguage}
            >
              {languageArr.map(({ key, value }) => (
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              ))}
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
