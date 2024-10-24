import { LanguageCodeEnums } from "@/enums/language";
import { filterState } from "@/recoils/filter";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export const useFilter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const onChangeLanguage = useCallback(
    (langId: LanguageCodeEnums) => {
      setFilter((prev) => ({ ...prev, language: langId }));
    },
    [setFilter]
  );

  return {
    language: filter.language,
    onChangeLanguage,
  };
};
