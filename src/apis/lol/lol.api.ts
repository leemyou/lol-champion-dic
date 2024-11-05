import axios from "axios";
import {
  ReqChampDetail,
  ReqChampList,
  ResChampDetail,
  ResChampList,
} from "./lol.model";

// Axios 인스턴스 생성
const Axios = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com/cdn",
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: 추후 파라미터(버전, 국가) 추가 필요
const getChampionList = async (params: ReqChampList) => {
  return await Axios.get<ResChampList>(
    `/14.20.1/data/${params.language}/champion.json`
  ).then((res) => res.data);
};

// TODO: 추후 파라미터(버전, 국가) 추가 필요
const getChampionDetail = async (param: ReqChampDetail) => {
  return await Axios.get(
    `/14.20.1/data/${param.language}/champion/${param.champId}.json`,
    {}
  ).then((res: { data: ResChampDetail }) => res.data);
};

export { getChampionList, getChampionDetail };
