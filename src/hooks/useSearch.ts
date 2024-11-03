import { searchState } from "@/recoils/search";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export const useSearch = () => {
  const [searchParams, setSearchParams] = useRecoilState(searchState);

  const onSearch = useCallback((text: string) => {
    setSearchParams(text);
  }, []);

  const onResetSearch = useCallback(() => {
    setSearchParams("");
  }, []);

  return {
    searchParams,
    onSearch,
    onResetSearch,
  };
};
