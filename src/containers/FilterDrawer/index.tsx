import React, { ChangeEvent, useMemo, useState } from "react";
import { StyledDrawer } from "./style";

import {
  LanguageCodeEnums,
  LanguageCodeToLanguage,
  RelationEnums,
} from "@/enums";
import { useFilter, useSearch } from "@/hooks";
import { langObjToArr } from "@/utils";

import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { regionChecked, relationChecked } from "@/recoils";

type FilterDrawerProps = {
  drawerOpen: boolean;
  onDrawerClose: () => void;
};

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  drawerOpen = false,
  onDrawerClose,
}: FilterDrawerProps) => {
  const { onResetSearch } = useSearch();
  const { language, onChangeLanguage, onChangeRelation, onChangeRegion } =
    useFilter();

  const [options, setOptions] = useState({ lang: language });

  const [relationSelected, setRelationSelected] =
    useState<RelationEnums[]>(relationChecked);
  const [selectedRegion, setSelectedRegion] = useState(regionChecked);

  const languageArr = useMemo(() => langObjToArr(LanguageCodeToLanguage), []);

  console.log(relationSelected);

  // drawer가 닫힌 후에 state를 저장.
  const handleClose = async () => {
    onChangeLanguage(options.lang);
    onChangeRelation(relationSelected);
    onChangeRegion(selectedRegion);
    onResetSearch && onResetSearch();
    onDrawerClose && onDrawerClose();
  };

  const handleChangeLanguage = (e: SelectChangeEvent<string>) => {
    setOptions((prev) => ({
      ...prev,
      lang: e.target.value as unknown as LanguageCodeEnums,
    }));
  };

  const handleRelationAll = () => {
    if (relationChecked.length === relationSelected.length) {
      setRelationSelected([]); // 전체 선택 해제
    } else {
      setRelationSelected(relationChecked); // 전체 선택
    }
  };

  const handleRelation = (item: RelationEnums) => {
    setRelationSelected(
      (prevSelected) =>
        prevSelected.includes(item)
          ? prevSelected.filter((i) => i !== item) // 선택 해제
          : [...prevSelected, item] // 선택
    );
  };

  const handleRegionAll = () => {
    if (regionChecked.length === selectedRegion.length) {
      setSelectedRegion([]); // 전체 선택 해제
    } else {
      setSelectedRegion(regionChecked); // 전체 선택
    }
  };

  const handleRegion = (item: string) => {
    setSelectedRegion(
      (prevSelected) =>
        prevSelected.includes(item)
          ? prevSelected.filter((i) => i !== item) // 선택 해제
          : [...prevSelected, item] // 선택
    );
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
          <div className="drawer-wrapper-middle-selects">
            <div className="drawer-wrapper-middle-selects-box">
              <p>Relations</p>
              <FormControlLabel
                label="ALL"
                control={
                  <Checkbox
                    checked={relationChecked.length === relationSelected.length}
                    indeterminate={
                      relationSelected.length !== 0 &&
                      relationChecked.length !== relationSelected.length
                    }
                    onChange={handleRelationAll}
                    color="default"
                  />
                }
              />
              {relationChecked.map((item) => (
                <FormControlLabel
                  key={item}
                  label={item}
                  id={item}
                  control={
                    <Checkbox
                      checked={relationSelected.includes(item)}
                      value={item}
                      onChange={() => handleRelation(item)}
                      color="default"
                    />
                  }
                />
              ))}
            </div>
            <div className="drawer-wrapper-middle-selects-box">
              <p>Regions</p>
              <FormControlLabel
                label="ALL"
                control={
                  <Checkbox
                    checked={regionChecked.length === selectedRegion.length}
                    indeterminate={
                      selectedRegion.length !== 0 &&
                      regionChecked.length !== selectedRegion.length
                    }
                    onChange={handleRegionAll}
                    color="default"
                  />
                }
              />

              {regionChecked.map((item) => (
                <FormControlLabel
                  key={item}
                  label={item}
                  id={item}
                  control={
                    <Checkbox
                      checked={selectedRegion.includes(item)}
                      value={item}
                      onChange={() => handleRegion(item)}
                      color="default"
                    />
                  }
                />
              ))}
            </div>
          </div>
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
