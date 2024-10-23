import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getChampionList } from "./lol.api";
import { ResChampList } from "./lol.model";

export const useChampionList = (): UseQueryResult<ResChampList, {}> => {
  return useQuery({
    queryKey: ["championList"],
    queryFn: async () => {
      return (await getChampionList()) as ResChampList;
    },
  });
};
