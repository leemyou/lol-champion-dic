import { searchState } from "@/recoils/search";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export const useSearch = () => {
  const [searchParams, setSearchParams] = useRecoilState(searchState);

  const onSearch = useCallback((text: string) => {
    setSearchParams(text);
  }, []);

  return {
    searchParams,
    onSearch,
  };
};
