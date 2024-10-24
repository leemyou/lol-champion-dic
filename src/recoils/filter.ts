import { LanguageCodeEnums } from "@/enums/language";
import { atom } from "recoil";

export const filterState = atom({
  key: "filterState_key",
  default: {
    language: LanguageCodeEnums.en_US,
    // TODO: 관계나 챔프 필터 추가해야함.
  },
});
