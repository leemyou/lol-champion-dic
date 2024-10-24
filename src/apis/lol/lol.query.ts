import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getChampionDetail, getChampionList } from "./lol.api";
import {
  ReqChampDetail,
  ReqChampList,
  ResChampDetail,
  ResChampList,
} from "./lol.model";

export const useChampionList = (
  param: ReqChampList
): UseQueryResult<ResChampList, {}> => {
  return useQuery({
    queryKey: ["championList"],
    queryFn: async () => {
      return (await getChampionList(param)) as ResChampList;
    },
  });
};

export const useChampionDetail = (
  param: ReqChampDetail,
  enabled?: boolean | undefined
): UseQueryResult<ResChampDetail, {}> => {
  return useQuery({
    queryKey: ["championDetail"],
    queryFn: async () => {
      return (await getChampionDetail(param)) as ResChampDetail;
    },
    enabled: enabled || !!param.champId,
  });
};
