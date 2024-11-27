import { RelationEnums, LanguageCodeEnums } from "@/enums";
import { filterState } from "@/recoils";
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

  const onChangeRelation = useCallback(
    (relation: RelationEnums[]) => {
      setFilter((prev) => ({ ...prev, relation: relation }));
    },
    [setFilter]
  );

  const onChangeRegion = useCallback(
    (region: string[]) => {
      setFilter((prev) => ({ ...prev, region: region }));
    },
    [setFilter]
  );

  return {
    filterOptions: filter,
    language: filter.language,
    onChangeLanguage,
    onChangeRelation,
    onChangeRegion,
  };
};
