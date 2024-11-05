import { getUserLanguage } from "@/utils/language";
import { atom } from "recoil";

export const filterState = atom({
  key: "filterState_key",
  default: {
    language: getUserLanguage(),
    // TODO: 관계나 챔프 필터 추가해야함.
  },
});
